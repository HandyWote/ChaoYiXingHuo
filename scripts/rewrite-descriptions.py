#!/usr/bin/env python3
"""为 app.js 中 heritagePoints 的 description 字段调用 DeepSeek API 生成新描述。"""

import json
import os
import re
import subprocess
import shutil
import sys
import time
from pathlib import Path

import requests
from dotenv import load_dotenv

# 加载 .env
load_dotenv(Path(__file__).resolve().parent.parent / ".env")

API_KEY = os.environ.get("DEEPSEEK_API_KEY")
if not API_KEY or API_KEY == "sk-your-key-here":
    print("ERROR: 请在 .env 文件中设置 DEEPSEEK_API_KEY")
    sys.exit(1)

API_URL = "https://api.deepseek.com/chat/completions"
MODEL = "deepseek-chat"
BATCH_SIZE = 5
MAX_RETRIES = 3

APP_JS = Path(__file__).resolve().parent.parent / "app.js"
BACKUP_JS = APP_JS.with_suffix(".js.bak")

SYSTEM_PROMPT = """你是潮汕文化专家。请为以下潮汕非遗/文旅场所撰写描述。

要求：
- 纯中文，知识介绍型风格
- 每条 3-4 句话，约 80-120 字
- 基于场所名称、类别、地址、关联非遗项目等信息撰写
- 内容必须准确，不要编造不存在的历史信息
- 如果信息不足以写出准确内容，如实描述已知信息即可
- 不同类别（景点、博物馆、工坊、美食等）应有不同的措辞侧重"""

USER_PROMPT_TEMPLATE = """场所列表（JSON）：
{entries_json}

请严格返回 JSON 数组，不要包含其他文字。格式：[{{"id": 1, "description": "..."}}, ...]"""


def split_array_entries(array_text: str) -> list[tuple[int, int, str]]:
    """用 brace-depth 解析拆分数组中的 JSON 对象（字符串感知，正确处理转义）。"""
    entries = []
    depth = 0
    in_string = False
    start = -1
    i = 0
    while i < len(array_text):
        ch = array_text[i]
        if in_string:
            if ch == "\\" and i + 1 < len(array_text):
                i += 2  # 跳过转义字符
                continue
            if ch == '"':
                in_string = False
        elif ch == '"':
            in_string = True
        elif ch == "{":
            if depth == 0:
                start = i
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0 and start >= 0:
                entries.append((start, i + 1, array_text[start : i + 1]))
                start = -1
        i += 1
    return entries


def parse_heritage_points(content: str) -> list[dict]:
    """从 app.js 内容中解析 heritagePoints 数组。"""
    match = re.search(
        r"this\.globalData\.heritagePoints\s*=\s*\[([\s\S]*)\];",
        content,
    )
    if not match:
        print("ERROR: 未找到 heritagePoints 数组")
        sys.exit(1)

    array_text = match.group(1)
    entries_text = split_array_entries(array_text)

    entries = []
    for _, _, text in entries_text:
        entry = json.loads(text)
        slim = {
            "id": entry["id"],
            "name": entry["name"],
            "category": entry.get("category", ""),
            "address": entry.get("address", ""),
            "heritageItems": [
                {
                    "name": hi["name"],
                    "type": hi["type"],
                    "status": hi["status"],
                }
                for hi in entry.get("heritageItems", [])
            ],
        }
        entries.append(slim)
    return entries


def call_api(batch: list[dict]) -> list[dict]:
    """调用 DeepSeek API，带重试。"""
    entries_json = json.dumps(batch, ensure_ascii=False, indent=2)
    user_prompt = USER_PROMPT_TEMPLATE.format(entries_json=entries_json)

    for attempt in range(MAX_RETRIES):
        try:
            resp = requests.post(
                API_URL,
                headers={
                    "Authorization": f"Bearer {API_KEY}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": MODEL,
                    "messages": [
                        {"role": "system", "content": SYSTEM_PROMPT},
                        {"role": "user", "content": user_prompt},
                    ],
                    "temperature": 0.7,
                    "max_tokens": 2000,
                },
                timeout=60,
            )
            resp.raise_for_status()
            text = resp.json()["choices"][0]["message"]["content"]
            # 提取 JSON（可能被 ```json ``` 包裹）
            json_match = re.search(r"\[.*\]", text, re.DOTALL)
            if not json_match:
                print(f"  WARNING: 无法解析 API 返回 (attempt {attempt+1})")
                continue
            return json.loads(json_match.group())
        except Exception as e:
            wait = 2 ** attempt
            print(f"  API 错误 (attempt {attempt+1}/{MAX_RETRIES}): {e}")
            if attempt < MAX_RETRIES - 1:
                print(f"  等待 {wait}s 后重试...")
                time.sleep(wait)

    print(f"  ERROR: 批次处理失败")
    return []


def rewrite_descriptions(content: str, new_descriptions: dict[int, str]) -> str:
    """将新描述写回 app.js（使用 JSON round-trip，正确处理所有转义字符）。"""
    array_match = re.search(
        r"(this\.globalData\.heritagePoints\s*=\s*\[)([\s\S]*)(\];)",
        content,
    )
    if not array_match:
        print("ERROR: rewrite_descriptions: 未找到 heritagePoints 数组")
        return content

    prefix = array_match.group(1)
    array_text = array_match.group(2)
    suffix = array_match.group(3)

    entries_text = split_array_entries(array_text)

    new_parts = []
    for _, _, entry_text in entries_text:
        entry = json.loads(entry_text)
        entry_id = entry.get("id")
        if entry_id in new_descriptions:
            entry["description"] = new_descriptions[entry_id]
        new_parts.append(json.dumps(entry, ensure_ascii=False, indent=2))

    new_array = ",\n  ".join(new_parts)
    return prefix + "\n  " + new_array + "\n" + suffix


def main():
    print(f"读取 {APP_JS} ...")
    content = APP_JS.read_text(encoding="utf-8")

    entries = parse_heritage_points(content)
    print(f"共解析出 {len(entries)} 条 heritagePoints")

    # 备份
    print(f"备份到 {BACKUP_JS} ...")
    shutil.copy2(APP_JS, BACKUP_JS)

    # 分批调用 API
    new_descriptions: dict[int, str] = {}
    total_batches = (len(entries) + BATCH_SIZE - 1) // BATCH_SIZE

    for i in range(0, len(entries), BATCH_SIZE):
        batch = entries[i : i + BATCH_SIZE]
        batch_num = i // BATCH_SIZE + 1
        ids = [e["id"] for e in batch]
        print(f"\n批次 {batch_num}/{total_batches}: ID {ids}")

        results = call_api(batch)
        expected_ids = {e["id"] for e in batch}
        for r in results:
            entry_id = r["id"]
            if entry_id not in expected_ids:
                print(f"  WARNING: API 返回未知 ID {entry_id}，已跳过")
                continue
            desc = r["description"]
            new_descriptions[entry_id] = desc
            name = next(e["name"] for e in entries if e["id"] == entry_id)
            print(f"  [{entry_id}] {name}: {desc[:40]}...")

        # 批次间延迟，防止 rate limit
        time.sleep(1)

    print(f"\n共生成 {len(new_descriptions)} 条描述")

    if len(new_descriptions) != len(entries):
        missing = [e["id"] for e in entries if e["id"] not in new_descriptions]
        print(f"WARNING: {len(missing)} 条未成功生成: {missing}")

    # 写回 app.js
    print("写入 app.js ...")
    new_content = rewrite_descriptions(content, new_descriptions)
    APP_JS.write_text(new_content, encoding="utf-8")

    # 验证语法
    print("验证语法 ...")
    result = subprocess.run(["node", "--check", str(APP_JS)], capture_output=True, text=True)
    if result.returncode != 0:
        print(f"SYNTAX ERROR: {result.stderr}")
        print("从备份恢复 ...")
        shutil.copy2(BACKUP_JS, APP_JS)
        print("已恢复备份")
        sys.exit(1)

    print("语法验证通过!")
    print("\n完成! 请在微信开发者工具中预览确认效果。")


if __name__ == "__main__":
    main()
