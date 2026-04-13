# 非遗数据噪声清理 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 从 app.js 的 heritagePoints 数组中移除 42 条噪声数据，保持其余数据完整不变。

**Architecture:** 使用 Node.js 脚本读取 app.js，按 ID 过滤掉目标条目，写回文件。脚本化处理避免手动编辑 3440 行文件时的出错风险。

**Tech Stack:** Node.js（项目已有），无需安装额外依赖。

---

### Task 1: 编写清理脚本

**Files:**
- Create: `scripts/cleanup-heritage.js`

- [ ] **Step 1: 创建 scripts 目录并编写清理脚本**

```javascript
// scripts/cleanup-heritage.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app.js');
const content = fs.readFileSync(filePath, 'utf-8');

// 要移除的 ID 列表
const idsToRemove = new Set([
  // 第一组：完全无关的商业/政府场所
  212, 216, 218, 213, 71, 92,
  // 第二组：噪声地址
  63, 202, 203, 141,
  // 第三组：村级小公园
  65, 66, 67, 68, 69, 70, 72, 204, 205, 206, 207, 208, 209, 210,
  // 第四组：非潮汕文化相关的博物馆
  81, 158, 77, 78, 80, 160,
  // 第五组：无关基础设施
  214, 215, 217,
  // 第六组：商业民宿/住宅/品牌展馆
  223, 225, 221, 164, 165, 143,
  // 第七组：革命历史类
  166, 174
]);

// 匹配整个 heritagePoints 数组赋值
const arrayMatch = content.match(
  /this\.globalData\.heritagePoints\s*=\s*\[([\s\S]*)\];/
);

if (!arrayMatch) {
  console.error('ERROR: Could not find heritagePoints array in app.js');
  process.exit(1);
}

const arrayContent = arrayMatch[1];

// 按 JSON 对象边界拆分（每个条目以 { 开头）
// 简单方法：用正则匹配每个 {...} 块
const entries = [];
let depth = 0;
let entryStart = -1;

for (let i = 0; i < arrayContent.length; i++) {
  if (arrayContent[i] === '{') {
    if (depth === 0) entryStart = i;
    depth++;
  } else if (arrayContent[i] === '}') {
    depth--;
    if (depth === 0 && entryStart >= 0) {
      entries.push(arrayContent.substring(entryStart, i + 1));
      entryStart = -1;
    }
  }
}

console.log(`Total entries found: ${entries.length}`);

let removed = 0;
let kept = 0;
const filteredEntries = [];

for (const entry of entries) {
  // 提取 id
  const idMatch = entry.match(/"id"\s*:\s*(\d+)/);
  if (!idMatch) continue;
  const id = parseInt(idMatch[1]);

  if (idsToRemove.has(id)) {
    removed++;
    console.log(`  REMOVING id=${id}`);
  } else {
    kept++;
    filteredEntries.push(entry);
  }
}

console.log(`\nResults: removed=${removed}, kept=${kept}, total=${removed + kept}`);

if (removed !== idsToRemove.size) {
  console.error(`WARNING: Expected to remove ${idsToRemove.size} entries but only found ${removed}`);
  process.exit(1);
}

// 重新构建文件内容
const newEntries = filteredEntries.join(',\n  ');
const newContent = content.replace(
  /this\.globalData\.heritagePoints\s*=\s*\[[\s\S]*\];/,
  `this.globalData.heritagePoints = [\n  ${newEntries}\n];`
);

fs.writeFileSync(filePath, newContent, 'utf-8');
console.log('Done! app.js updated.');
```

- [ ] **Step 2: 先备份原文件**

```bash
cp app.js app.js.bak
```

- [ ] **Step 3: 运行清理脚本**

```bash
node scripts/cleanup-heritage.js
```

Expected output:
```
Total entries found: 226
  REMOVING id=212
  REMOVING id=216
  ...（42 行 REMOVING）
Results: removed=42, kept=184, total=226
Done! app.js updated.
```

---

### Task 2: 验证清理结果

**Files:**
- Verify: `app.js`

- [ ] **Step 1: 验证 app.js 语法正确**

```bash
node -e "require('./app.js')" 2>&1 || echo "SYNTAX ERROR"
```

注意：app.js 使用 App() 注册，不是标准 module，所以 require 可能报错。改用语法检查：

```bash
node --check app.js 2>&1 || echo "SYNTAX ERROR"
```

Expected: 无输出（语法正确）

- [ ] **Step 2: 验证条目数量**

```bash
node -e "
const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf-8');
const matches = content.match(/\"id\":\s*\d+/g);
console.log('Entry count:', matches ? matches.length : 0);
"
```

Expected: `Entry count: 184`

- [ ] **Step 3: 验证被移除的 ID 确实不存在**

```bash
node -e "
const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf-8');
const bad = [212, 216, 218, 213, 71, 92, 63, 202, 203, 141, 65, 66, 67, 68, 69, 70, 72, 204, 205, 206, 207, 208, 209, 210, 81, 158, 77, 78, 80, 160, 214, 215, 217, 223, 225, 221, 164, 165, 143, 166, 174];
let found = 0;
for (const id of bad) {
  if (content.includes('\"id\": ' + id) || content.includes('\"id\":' + id)) {
    console.log('STILL PRESENT:', id);
    found++;
  }
}
console.log(found === 0 ? 'All 42 entries successfully removed' : 'ERROR: ' + found + ' entries still present');
"
```

Expected: `All 42 entries successfully removed`

- [ ] **Step 4: 验证关键条目仍存在**

```bash
node -e "
const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf-8');
const mustKeep = ['广济桥', '古城牌坊街', '潮州木雕', '英歌舞', '潮绣', '潮剧', '潮州工夫茶艺', '潮府工夫茶文化博物馆'];
let missing = 0;
for (const name of mustKeep) {
  if (!content.includes(name)) {
    console.log('MISSING:', name);
    missing++;
  }
}
console.log(missing === 0 ? 'All key entries verified present' : 'ERROR: ' + missing + ' key entries missing');
"
```

Expected: `All key entries verified present`

---

### Task 3: 清理

- [ ] **Step 1: 确认一切正常后删除备份和脚本**

```bash
rm app.js.bak
rm scripts/cleanup-heritage.js
rmdir scripts 2>/dev/null || true
```
