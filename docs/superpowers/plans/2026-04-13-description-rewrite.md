# 非遗数据描述重写 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 使用 DeepSeek API 为 app.js 中 185 条 heritagePoints 数据生成独特的知识介绍型描述，替换当前的模板套话。

**Architecture:** Python 脚本读取 app.js → 解析 heritagePoints 数组 → 分批调用 DeepSeek API 生成描述 → 写回 app.js。使用 uv 管理依赖，.env 管理 API key。

**Tech Stack:** Python 3.8+, uv, requests, python-dotenv, DeepSeek API (OpenAI 兼容格式)

---

### Task 1: 配置 Python 环境和依赖

**Files:**
- Create: `scripts/pyproject.toml`
- Verify: `.gitignore` (已有 .env)

- [ ] **Step 1: 创建 scripts 目录和 pyproject.toml**

```bash
mkdir scripts
```

```toml
# scripts/pyproject.toml
[project]
name = "description-rewrite"
version = "0.1.0"
requires-python = ">=3.8"
dependencies = [
    "requests>=2.28.0",
    "python-dotenv>=1.0.0",
]
```

- [ ] **Step 2: 用 uv 安装依赖**

```bash
cd scripts && uv sync && cd ..
```

Expected: 创建 `.venv/` 目录，无报错

- [ ] **Step 3: 创建 .env 文件（用户手动填写 API key）**

```bash
echo 'DEEPSEEK_API_KEY=sk-your-key-here' > .env
```

注意：用户需要将 `sk-your-key-here` 替换为真实 API key。`.env` 已在 `.gitignore` 中。

---

### Task 2: 编写描述重写脚本

**Files:**
- Create: `scripts/rewrite-descriptions.py`

- [ ] **Step 1: 编写完整脚本**

```python
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
    # 用 brace depth 切分每个条目
    entries_text = []
    depth = 0
    start = -1
    for i, ch in enumerate(array_text):
        if ch == "{":
            if depth == 0:
                start = i
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0 and start >= 0:
                entries_text.append(array_text[start : i + 1])
                start = -1

    entries = []
    for text in entries_text:
        entry = json.loads(text)
        # 只保留生成描述所需的字段
        slim = {
            "id": entry["id"],
            "name": entry["name"],
            "category": entry["category"],
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
    """将新描述写回 app.js 内容中对应条目。"""

    def replace_entry(match):
        entry_text = match.group(0)
        id_match = re.search(r'"id"\s*:\s*(\d+)', entry_text)
        if not id_match:
            return entry_text
        entry_id = int(id_match.group(1))
        if entry_id in new_descriptions:
            new_desc = new_descriptions[entry_id].replace("\\", "\\\\").replace('"', '\\"')
            return re.sub(
                r'"description"\s*:\s*"[^"]*"',
                f'"description": "{new_desc}"',
                entry_text,
            )
        return entry_text

    return re.sub(
        r'\{[^{}]*"id"\s*:\s*\d+[^{}]*"description"\s*:\s*"[^"]*"[^{}]*\}',
        replace_entry,
        content,
    )


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
        for r in results:
            entry_id = r["id"]
            desc = r["description"]
            new_descriptions[entry_id] = desc
            name = next(e["name"] for e in entries if e["id"] == entry_id)
            print(f"  [{entry_id}] {name}: {desc[:40]}...")

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
```

---

### Task 3: 运行脚本生成描述

**Files:**
- Modify: `app.js` (description 字段)
- Create: `app.js.bak` (备份)

- [ ] **Step 1: 确认 API key 已设置**

```bash
grep -c "sk-your-key-here" .env && echo "ERROR: 请先在 .env 中设置真实 API key" || echo "API key 已设置"
```

Expected: `API key 已设置`

- [ ] **Step 2: 运行脚本**

```bash
cd scripts && uv run python rewrite-descriptions.py && cd ..
```

Expected output:
```
读取 /Users/hand/project/ChaoYiXingHuo/app.js ...
共解析出 185 条 heritagePoints
备份到 /Users/hand/project/ChaoYiXingHuo/app.js.bak ...

批次 1/37: ID [1, 2, 3, 4, 5]
  [1] 华夏历史博物馆: 位于潮州市潮安区...
  ...

完成! 请在微信开发者工具中预览确认效果。
```

---

### Task 4: 验证结果

**Files:**
- Verify: `app.js`

- [ ] **Step 1: 验证 app.js 语法正确**

```bash
node --check app.js && echo "语法正确" || echo "SYNTAX ERROR"
```

Expected: `语法正确`

- [ ] **Step 2: 验证条目数量不变**

```bash
node -e "
const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf-8');
const matches = content.match(/\"id\":\s*\d+/g);
console.log('Entry count:', matches ? matches.length : 0);
"
```

Expected: `Entry count: 185`

- [ ] **Step 3: 验证模板描述已被替换**

```bash
node -e "
const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf-8');
const templates = [
  '具有深厚文化底蕴的历史名胜',
  '展示潮汕地区历史文化与非物质文化遗产的重要场所',
  '当地群众文化活动的重要阵地',
  '非遗技艺传承的重要场所，见证着传统手工艺的薪火相传'
];
let total = 0;
for (const t of templates) {
  const count = (content.match(new RegExp(t, 'g')) || []).length;
  if (count > 0) console.log('仍存在模板:', t, '(' + count + '条)');
  total += count;
}
console.log(total === 0 ? '所有模板描述已替换' : 'WARNING: 仍有 ' + total + ' 条模板描述');
"
```

Expected: `所有模板描述已替换`

- [ ] **Step 4: 抽样检查描述质量**

在微信开发者工具中打开项目，随机浏览 5-10 个不同 category 的条目，确认描述内容准确、风格一致。

- [ ] **Step 5: 确认无误后清理备份**

```bash
rm app.js.bak
```
