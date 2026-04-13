# 非遗数据描述重写设计

日期：2026-04-13
状态：已批准

## 背景

`app.js` 中 `heritagePoints` 数组包含 185 条数据（清理噪声后）。每条数据的 `description` 字段均为模板生成的套话，存在以下问题：

- 4 个模板句子按 category 分配，所有条目描述千篇一律
- 美食店被描述为"历史名胜"，茶馆也被描述为"历史名胜"
- `heritageItems.content` 字段全部为空字符串，无可用内容
- 无法帮助用户了解每个地点的独特价值

## 目标

为 185 条数据生成独特的、准确的知识介绍型描述。

## 描述生成规格

- **风格：** 知识介绍型，纯中文
- **长度：** 每条 3-4 句话，约 80-120 字
- **内容要求：**
  - 基于场所的 name、category、address、关联 heritageItems 信息
  - 内容必须准确，不编造不存在的历史信息
  - 信息不足时，如实描述已知信息即可
  - 不同 category 的描述措辞应有所区分（景点、博物馆、工坊、美食等各有侧重）

## 技术方案

### 脚本：`scripts/rewrite-descriptions.py`

**依赖管理：** 使用 `uv`，在项目根目录或 `scripts/` 下配置 `pyproject.toml`

**流程：**
1. 读取 `app.js`，用正则解析 heritagePoints 数组
2. 提取每条的 id、name、category、address、heritageItems[].name/type/status
3. 分批调用 DeepSeek API（每批 5 条）
4. 解析返回的 JSON，将新 description 写回 app.js 对应条目
5. 验证 app.js 语法正确

**API：** DeepSeek V3（兼容 OpenAI API 格式），API key 通过 `.env` 文件管理（`DEEPSEEK_API_KEY`）

**环境配置：**
- 在项目根目录创建 `.env` 文件：`DEEPSEEK_API_KEY=sk-xxx`
- `.env` 已在 `.gitignore` 中（如未添加需补充）
- 脚本使用 `python-dotenv` 加载 `.env`

**Prompt 策略：**
```
你是潮汕文化专家。请为以下潮汕非遗/文旅场所撰写描述。

要求：
- 纯中文，知识介绍型风格
- 每条 3-4 句话，约 80-120 字
- 基于场所名称、类别、地址、关联非遗项目等信息撰写
- 内容必须准确，不要编造不存在的历史信息
- 如果信息不足以写出准确内容，如实描述已知信息即可

场所列表：
[{id, name, category, address, heritageItems}]

请返回 JSON 数组：[{"id": 1, "description": "..."}, ...]
```

### 安全措施

- 运行前自动备份 `app.js` → `app.js.bak`
- API 请求失败自动重试 3 次，指数退避
- 写入后执行 `node --check app.js` 验证语法
- API key 通过 `.env` 文件管理，不硬编码

### 清理

- 确认结果正确后，删除 `app.js.bak`

## 数据分类

| Category | 条目数 | 当前模板 |
|----------|--------|----------|
| 景点     | 101    | "...历史名胜，承载着丰富的非遗文化记忆。" |
| 文化馆   | 26     | "...群众文化活动的重要阵地..." |
| 博物馆   | 19     | "...展示潮汕地区历史文化..." |
| 茶文化   | 24     | "...历史名胜..." |
| 工坊     | 12     | "...非遗技艺传承的重要场所..." |
| 美食     | 3      | "...历史名胜..." |
| **合计** | **185**|          |

## 不在本次范围

- `heritageItems.content` 空值填充
- 新增或恢复条目
- category 字段调整
