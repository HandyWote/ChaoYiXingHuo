# 潮艺星火 — 真实数据对接 + 文章模块设计

日期：2026-04-07

## 背景

当前小程序的非遗数据存在两个问题：
1. 地图坐标是近似值，不指向真实可去的场所
2. 数据模型是"一个非遗一个坐标"，不符合现实（非遗集中在博物馆、文化馆等场所）

用户同时希望新增文章模块，展示同主体公众号已发布的潮汕非遗相关文章。

## 设计决策

### 1. 数据模型重构

从"一个非遗一个坐标"改为"地点为中心，一个地点包含多个非遗项目"。

```js
{
  id: 1,
  name: "潮州市非物质文化遗产展示馆",
  category: "博物馆",           // 博物馆/文化馆/景点/工坊
  latitude: 23.4574,
  longitude: 116.6747,
  address: "广东省潮州市湘桥区...",
  description: "真实评价式描述...",
  images: ["url1", "url2"],
  heritageItems: [
    {
      name: "潮州木雕",
      type: "传统美术",
      status: "国家级非物质文化遗产",
      content: "详细介绍..."
    }
  ]
}
```

### 2. 数据抓取脚本

Node.js 脚本 `scripts/fetch-heritage-data.js`，分两步：

**Step 1 — 腾讯地图 POI 搜索：**
- 搜索范围：汕头、潮州、揭阳
- 关键词："非物质文化遗产"、"博物馆"、"文化馆"、具体非遗名称（"潮州木雕"、"潮绣"等）、"古城"、"古街"
- 获取精确坐标、地址、地点名称

**Step 2 — 匹配非遗项目 + 生成描述：**
- 根据地点名称和类型匹配关联非遗项目
- 描述风格：博物馆/文化馆 → 场馆介绍；景点 → 文化历史背景；工坊 → 传承人故事

**输出：** `heritage-locations.json`，直接替换 `app.js` 中的硬编码数据。

**依赖：** 腾讯地图 Web Service API Key（免费，10000次/天）。

### 3. 文章模块 — 微信云开发

**架构：**
```
公众号发布文章 → 云函数 sync-articles 定时拉取 → 云数据库 articles 集合 → 小程序读取展示 → web-view 打开原文
```

**云数据库 `articles` 集合：**
```js
{
  _id: "auto",
  title: "文章标题",
  summary: "文章摘要",
  coverUrl: "封面图URL",
  articleUrl: "公众号原文链接",
  publishTime: "2026-03-15",
  createTime: "2026-04-07"
}
```

**云函数 `sync-articles`：**
- 获取公众号 access_token（AppID: wx1061946a8e585ab0，AppSecret 存环境变量）
- 调用素材管理 API 获取图文素材列表
- 增量同步到云数据库
- 定时触发器：每天执行一次

**安全：** AppSecret 仅存在云函数环境变量中，不暴露到前端代码。

### 4. 导航结构

**双 TabBar：** 首页（地图）+ 文章，两个 Tab。

```json
{
  "tabBar": {
    "color": "#999",
    "selectedColor": "#a85418",
    "list": [
      { "pagePath": "pages/index/index", "text": "首页", "iconPath": "...", "selectedIconPath": "..." },
      { "pagePath": "pages/articles/articles", "text": "文章", "iconPath": "...", "selectedIconPath": "..." }
    ]
  }
}
```

### 5. 文章列表页 — 大图卡片布局

`pages/articles/articles` 页面：
- 顶部标题"潮艺文章"
- 纵向滚动的大图卡片列表
- 每张卡片：大封面图 + 标题叠加在图片底部 + 日期和摘要
- 点击卡片 → 跳转 `pages/webview/webview?url=xxx`

`pages/webview/webview` 页面：
- 接收 url 参数
- web-view 组件加载公众号文章
- 同主体绑定，无需额外配置业务域名

### 6. 地图标记适配

首页地图需要适配新的数据模型：
- 不同 category 使用不同图标（博物馆/文化馆/景点/工坊）
- 标记气泡显示地点名称 + 关联非遗数量
- 底部信息卡片展示地点信息 + 关联非遗列表
- 点击"查看详情"跳转 detail 页，detail 页适配展示地点 + 多个非遗项目

## 新增文件清单

| 文件 | 说明 |
|------|------|
| `scripts/fetch-heritage-data.js` | 数据抓取脚本 |
| `pages/articles/articles.js/wxml/wxss/json` | 文章列表页 |
| `pages/webview/webview.js/wxml/wxss/json` | web-view 页面 |
| `cloudfunctions/sync-articles/` | 云函数（含依赖） |
| `assets/icons/tab-home.svg` | 首页 Tab 图标 |
| `assets/icons/tab-article.svg` | 文章 Tab 图标 |

## 修改文件清单

| 文件 | 修改内容 |
|------|----------|
| `app.js` | 替换 heritagePoints 数据结构 |
| `app.json` | 新增 pages、tabBar 配置、云开发目录 |
| `pages/index/index.js` | 适配新数据模型、地图标记逻辑 |
| `pages/index/index.wxml` | 底部信息卡片适配多非遗展示 |
| `pages/detail/detail.js` | 适配地点 + 多非遗展示 |
| `pages/detail/detail.wxml` | 详情页 UI 重构 |

## 前提条件

1. 腾讯地图 Web Service API Key（用于数据抓取脚本）
2. 微信云开发已开通（已确认）
3. 公众号 AppID/AppSecret（已提供，存云函数环境变量）
4. 公众号与小程序同主体绑定（已确认）
