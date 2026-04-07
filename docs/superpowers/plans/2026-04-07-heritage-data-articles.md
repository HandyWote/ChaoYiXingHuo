# 真实数据对接 + 文章模块实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将潮艺星火小程序的假数据替换为真实非遗地点数据，并新增公众号文章模块。

**Architecture:** 数据层：Node.js 脚本从腾讯地图 POI 抓取真实地点，输出 JSON 替换硬编码数据。展示层：地图首页适配新的"地点+多非遗"模型；新增文章 Tab 页，通过微信云开发自动同步公众号文章，web-view 内嵌展示。导航改为双 TabBar（首页+文章）。

**Tech Stack:** 微信小程序原生框架、微信云开发（云函数+云数据库）、腾讯地图 Web Service API（数据抓取）、Node.js（脚本）。

---

## Task 1: 创建 TabBar 图标

**Files:**
- Create: `assets/icons/tab-home.svg`
- Create: `assets/icons/tab-home-active.svg`
- Create: `assets/icons/tab-article.svg`
- Create: `assets/icons/tab-article-active.svg`

- [ ] **Step 1: 创建首页 Tab 图标（未选中）**

`assets/icons/tab-home.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <polyline points="9 22 9 12 15 12 15 22"/>
</svg>
```

- [ ] **Step 2: 创建首页 Tab 图标（选中）**

`assets/icons/tab-home-active.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#a85418" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <polyline points="9 22 9 12 15 12 15 22"/>
</svg>
```

- [ ] **Step 3: 创建文章 Tab 图标（未选中）**

`assets/icons/tab-article.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
  <polyline points="14 2 14 8 20 8"/>
  <line x1="16" y1="13" x2="8" y2="13"/>
  <line x1="16" y1="17" x2="8" y2="17"/>
  <polyline points="10 9 9 9 8 9"/>
</svg>
```

- [ ] **Step 4: 创建文章 Tab 图标（选中）**

`assets/icons/tab-article-active.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#a85418" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
  <polyline points="14 2 14 8 20 8"/>
  <line x1="16" y1="13" x2="8" y2="13"/>
  <line x1="16" y1="17" x2="8" y2="17"/>
  <polyline points="10 9 9 9 8 9"/>
</svg>
```

- [ ] **Step 5: 验证**

在浏览器中打开 4 个 SVG 文件确认图标正确渲染。

---

## Task 2: 更新 app.json 配置

**Files:**
- Modify: `app.json`

- [ ] **Step 1: 更新 app.json，添加新页面、TabBar、云开发目录**

将 `app.json` 完整替换为：

```json
{
  "pages": [
    "pages/index/index",
    "pages/articles/articles",
    "pages/detail/detail",
    "pages/webview/webview"
  ],
  "window": {
    "navigationBarTitleText": "潮艺星火",
    "navigationBarBackgroundColor": "#a85418",
    "navigationBarTextStyle": "black",
    "backgroundColor": "#f8f8f8",
    "backgroundTextStyle": "light",
    "enablePullDownRefresh": false
  },
  "tabBar": {
    "color": "#999999",
    "selectedColor": "#a85418",
    "backgroundColor": "#ffffff",
    "borderStyle": "black",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "assets/icons/tab-home.svg",
        "selectedIconPath": "assets/icons/tab-home-active.svg"
      },
      {
        "pagePath": "pages/articles/articles",
        "text": "文章",
        "iconPath": "assets/icons/tab-article.svg",
        "selectedIconPath": "assets/icons/tab-article-active.svg"
      }
    ]
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json",
  "lazyCodeLoading": "requiredComponents",
  "useExtendedLib": {
    "weui": true
  },
  "cloud": true,
  "permission": {
    "scope.userLocation": {
      "desc": "您的位置信息将用于定位潮汕非遗文化地点"
    }
  },
  "requiredPrivateInfos": ["getLocation"]
}
```

关键变更：
- `pages` 新增 `articles` 和 `webview` 页面路径（articles 必须在 detail 之前，因为 TabBar 页面需要在 pages 数组前部）
- 新增 `tabBar` 配置，双 Tab（首页 + 文章）
- 新增 `"cloud": true` 启用云开发

- [ ] **Step 2: 验证**

在微信开发者工具中确认编译报错（因为新页面文件还不存在），这是预期行为。

---

## Task 3: 创建文章列表页骨架

**Files:**
- Create: `pages/articles/articles.json`
- Create: `pages/articles/articles.js`
- Create: `pages/articles/articles.wxml`
- Create: `pages/articles/articles.wxss`

- [ ] **Step 1: 创建 articles.json**

```json
{
  "usingComponents": {},
  "navigationBarTitleText": "潮艺文章"
}
```

- [ ] **Step 2: 创建 articles.js**

```js
const app = getApp()

Page({
  data: {
    articles: [],
    loading: true
  },

  onLoad() {
    this.loadArticles()
  },

  onShow() {
    this.loadArticles()
  },

  onPullDownRefresh() {
    this.loadArticles(() => {
      wx.stopPullDownRefresh()
    })
  },

  loadArticles(callback) {
    const db = wx.cloud.database()
    db.collection('articles')
      .orderBy('publishTime', 'desc')
      .limit(20)
      .get()
      .then(res => {
        this.setData({
          articles: res.data,
          loading: false
        })
        if (callback) callback()
      })
      .catch(err => {
        console.error('获取文章列表失败:', err)
        this.setData({ loading: false })
        wx.showToast({ title: '加载失败', icon: 'none' })
        if (callback) callback()
      })
  },

  openArticle(e) {
    const url = encodeURIComponent(e.currentTarget.dataset.url)
    wx.navigateTo({
      url: `/pages/webview/webview?url=${url}`
    })
  }
})
```

- [ ] **Step 3: 创建 articles.wxml**

```xml
<view class="articles-page">
  <view class="page-header">
    <text class="page-title">潮艺文章</text>
    <text class="page-subtitle">探寻潮汕非遗文化之美</text>
  </view>

  <view class="loading-state" wx:if="{{loading}}">
    <view class="loading-spinner"></view>
    <text>加载中...</text>
  </view>

  <view class="empty-state" wx:elif="{{articles.length === 0}}">
    <text class="empty-text">暂无文章</text>
  </view>

  <view class="article-list" wx:else>
    <view class="article-card" wx:for="{{articles}}" wx:key="_id" bindtap="openArticle" data-url="{{item.articleUrl}}">
      <view class="card-image">
        <image src="{{item.coverUrl}}" mode="aspectFill" class="cover-img"></image>
        <view class="card-overlay">
          <text class="card-title">{{item.title}}</text>
        </view>
      </view>
      <view class="card-footer">
        <text class="card-summary">{{item.summary}}</text>
        <text class="card-date">{{item.publishTime}}</text>
      </view>
    </view>
  </view>
</view>
```

- [ ] **Step 4: 创建 articles.wxss**

```css
page {
  background-color: #f8f8f8;
}

.articles-page {
  padding: 15px;
  padding-bottom: 30px;
}

.page-header {
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #a85418;
}

.page-title {
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #a85418;
}

.page-subtitle {
  display: block;
  font-size: 13px;
  color: #999;
  margin-top: 4px;
}

.loading-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  color: #999;
}

.loading-spinner {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid rgba(168, 84, 24, 0.2);
  border-top-color: #a85418;
  animation: spin 0.8s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.article-card {
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.article-card:active {
  transform: scale(0.98);
}

.card-image {
  position: relative;
  width: 100%;
  height: 180px;
}

.cover-img {
  width: 100%;
  height: 100%;
}

.card-overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px 14px 12px;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
}

.card-title {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.4;
}

.card-footer {
  padding: 10px 14px;
}

.card-summary {
  display: block;
  font-size: 13px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.card-date {
  font-size: 12px;
  color: #bbb;
}
```

- [ ] **Step 5: 验证**

微信开发者工具中应能看到 TabBar 出现，点击"文章"Tab 可看到空状态页面（因为云数据库还没数据）。

---

## Task 4: 创建 WebView 页面

**Files:**
- Create: `pages/webview/webview.json`
- Create: `pages/webview/webview.js`
- Create: `pages/webview/webview.wxml`
- Create: `pages/webview/webview.wxss`

- [ ] **Step 1: 创建 webview.json**

```json
{
  "usingComponents": {},
  "navigationBarTitleText": "文章详情"
}
```

- [ ] **Step 2: 创建 webview.js**

```js
Page({
  data: {
    url: ''
  },

  onLoad(options) {
    if (options.url) {
      this.setData({
        url: decodeURIComponent(options.url)
      })
    } else {
      wx.showToast({ title: '链接无效', icon: 'none' })
      setTimeout(() => wx.navigateBack(), 1500)
    }
  }
})
```

- [ ] **Step 3: 创建 webview.wxml**

```xml
<web-view src="{{url}}" wx:if="{{url}}"></web-view>
```

- [ ] **Step 4: 创建 webview.wxss**

```css
/* web-view 自动全屏，无需额外样式 */
```

- [ ] **Step 5: 验证**

在微信开发者工具中，从文章列表页点击任意文章（暂时无法测试，等云函数部署后验证）。

---

## Task 5: 创建云函数 sync-articles

**Files:**
- Create: `cloudfunctions/sync-articles/index.js`
- Create: `cloudfunctions/sync-articles/package.json`
- Create: `cloudfunctions/sync-articles/config.json`

- [ ] **Step 1: 创建 cloudfunctions/sync-articles/package.json**

```json
{
  "name": "sync-articles",
  "version": "1.0.0",
  "description": "同步公众号文章到云数据库",
  "main": "index.js",
  "dependencies": {
    "wx-server-sdk": "~2.6.3"
  }
}
```

- [ ] **Step 2: 创建 cloudfunctions/sync-articles/config.json**

```json
{
  "permissions": {
    "openapi": []
  },
  "envVariables": {
    "MP_APPID": "wx1061946a8e585ab0",
    "MP_APPSECRET": "88a2afa28655b3614b74420b17e2fa5a"
  }
}
```

注意：AppSecret 应在云开发控制台 → 云函数 → 环境变量中配置，而非硬编码。此处作为初始配置，部署后应迁移到控制台。

- [ ] **Step 3: 创建 cloudfunctions/sync-articles/index.js**

```js
const cloud = require('wx-server-sdk')
const https = require('https')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

/**
 * 获取公众号 access_token
 */
function getAccessToken(appid, secret) {
  return new Promise((resolve, reject) => {
    const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`
    https.get(url, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        const result = JSON.parse(data)
        if (result.access_token) {
          resolve(result.access_token)
        } else {
          reject(new Error(`获取access_token失败: ${JSON.stringify(result)}`))
        }
      })
    }).on('error', reject)
  })
}

/**
 * 获取公众号图文素材列表
 */
function getMaterialList(token, offset = 0, count = 20) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({ type: 'news', offset, count })
    const options = {
      hostname: 'api.weixin.qq.com',
      path: `/cgi-bin/material/batchget_material?access_token=${token}`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }
    const req = https.request(options, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => resolve(JSON.parse(data)))
    })
    req.on('error', reject)
    req.write(postData)
    req.end()
  })
}

/**
 * 云函数入口
 */
exports.main = async (event, context) => {
  const appid = process.env.MP_APPID
  const secret = process.env.MP_APPSECRET

  if (!appid || !secret) {
    return { success: false, message: '缺少环境变量 MP_APPID 或 MP_APPSECRET' }
  }

  try {
    // 1. 获取 access_token
    const token = await getAccessToken(appid, secret)

    // 2. 获取图文素材列表
    const materialResult = await getMaterialList(token, 0, 20)

    if (!materialResult.item || materialResult.item.length === 0) {
      return { success: true, message: '没有找到图文素材', synced: 0 }
    }

    // 3. 遍历并同步到云数据库
    const articlesCollection = db.collection('articles')
    let syncedCount = 0

    for (const item of materialResult.item) {
      const newsItem = item.content.news_item[0] // 取每条图文的第一篇

      const articleData = {
        title: newsItem.title,
        summary: newsItem.digest || '',
        coverUrl: newsItem.thumb_url || '',
        articleUrl: newsItem.url,
        publishTime: new Date(parseInt(item.content.update_time) * 1000).toISOString().split('T')[0],
        mediaId: item.media_id,
        updateTime: db.serverDate()
      }

      // 检查是否已存在（按 mediaId 去重）
      const existResult = await articlesCollection
        .where({ mediaId: item.media_id })
        .count()

      if (existResult.total === 0) {
        await articlesCollection.add({ data: articleData })
        syncedCount++
      }
    }

    return { success: true, synced: syncedCount, total: materialResult.item.length }
  } catch (err) {
    console.error('同步文章失败:', err)
    return { success: false, message: err.message }
  }
}
```

- [ ] **Step 4: 部署云函数**

在微信开发者工具中：
1. 右键点击 `cloudfunctions/sync-articles` 目录
2. 选择"上传并部署：云端安装依赖"
3. 等待部署完成

- [ ] **Step 5: 创建云数据库集合并配置权限**

在微信开发者工具 → 云开发控制台：
1. 进入"数据库"
2. 创建集合 `articles`
3. 设置权限为"所有用户可读，仅创建者可写"

- [ ] **Step 6: 测试同步**

在微信开发者工具 → 云开发控制台 → 云函数：
1. 找到 `sync-articles`
2. 点击"云端测试"
3. 查看返回结果是否包含 `success: true`
4. 检查 `articles` 集合中是否有数据

- [ ] **Step 7: 配置定时触发器（可选）**

在云开发控制台 → 云函数 → sync-articles → 定时触发器：
- 触发周期：每天
- 名称：daily-sync
- Cron 表达式：`0 7 * * * *`（每天早上 7 点）

---

## Task 6: 更新数据模型（app.js）

**Files:**
- Modify: `app.js`

- [ ] **Step 1: 替换 loadDefaultHeritageData 方法**

用新的数据结构替换 `app.js` 中 `loadDefaultHeritageData()` 方法的整个内容。新数据使用"地点为中心"模型。

由于真实数据需要通过 Task 8 的脚本抓取，这里先放一个包含 2-3 条样本数据的占位结构，后续由脚本输出覆盖：

将 `loadDefaultHeritageData()` 方法内的数组替换为：

```js
loadDefaultHeritageData() {
  this.globalData.heritagePoints = [
    {
      id: 1,
      name: "潮州市博物馆",
      category: "博物馆",
      latitude: 23.4563,
      longitude: 116.6426,
      address: "广东省潮州市湘桥区潮州大道",
      description: "潮州市博物馆是展示潮州历史文化的重要场所，馆内收藏了大量潮州木雕、潮绣、陶瓷等非遗精品，是了解潮汕传统文化的绝佳窗口。",
      images: [],
      heritageItems: [
        { name: "潮州木雕", type: "传统美术", status: "国家级非物质文化遗产", content: "潮州木雕是广东潮州地区的一项民间雕刻艺术，主要用以装饰建筑、家具和祭祀器具。" },
        { name: "潮绣", type: "传统美术", status: "国家级非物质文化遗产", content: "潮绣在唐代就已出现于广东潮州地区，以龙凤、花卉、飞禽走兽为题材，绣法可分为绣、垫、贴、拼、缀五种。" },
        { name: "潮州花灯", type: "传统美术", status: "省级非物质文化遗产", content: "潮州花灯大致可分为彩扎的立式屏灯和彩绘的挂灯两大类型。" }
      ]
    },
    {
      id: 2,
      name: "汕头市非物质文化遗产展示馆",
      category: "博物馆",
      latitude: 23.3535,
      longitude: 116.6819,
      address: "广东省汕头市金平区外马路",
      description: "汕头市非物质文化遗产展示馆集中展示了汕头地区丰富的非遗资源，包括潮剧、英歌舞、剪纸等传统艺术的实物与多媒体展示。",
      images: [],
      heritageItems: [
        { name: "潮剧", type: "传统戏剧", status: "国家级非物质文化遗产", content: "潮剧又名潮州戏、潮音戏，是用潮州方言演唱的一个古老的地方戏曲剧种，距今已有四百三十多年历史。" },
        { name: "剪纸（广东剪纸）", type: "传统美术", status: "国家级非物质文化遗产", content: "潮阳剪纸造型灵活，构图以对称为主，结构严谨，尤其以"花中套花"的布局最具特点。" },
        { name: "潮州音乐", type: "传统音乐", status: "国家级非物质文化遗产", content: "潮州音乐是流传于广东潮州地区各类民间器乐的总称，蕴藏丰富，品种繁多。" }
      ]
    },
    {
      id: 3,
      name: "揭阳楼",
      category: "景点",
      latitude: 23.5436,
      longitude: 116.3724,
      address: "广东省揭阳市榕城区揭阳楼广场",
      description: "揭阳楼是揭阳市标志性建筑，楼内设有文化展厅，展示揭阳地区的历史文化和非物质文化遗产，周边广场常有英歌舞等民俗表演。",
      images: [],
      heritageItems: [
        { name: "英歌（普宁英歌）", type: "传统舞蹈", status: "国家级非物质文化遗产", content: "英歌是一种融舞蹈、南拳套路、戏曲演技于一体的民间广场舞蹈，表演气势豪壮。" },
        { name: "狮舞（青狮）", type: "传统舞蹈", status: "国家级非物质文化遗产", content: "青狮是潮汕地区独有的深具地方特色的传统狮舞。" },
        { name: "阳美翡翠玉雕", type: "传统美术", status: "国家级非物质文化遗产", content: "阳美翡翠玉雕工艺系由旧玉器加工技术发展而来，善于利用玉石的天然纹理。" }
      ]
    }
  ]
}
```

**注意**：这只是样本数据。完整的真实数据将在 Task 8 的脚本运行后生成并替换。

- [ ] **Step 2: 验证**

确认 app.js 无语法错误，微信开发者工具可正常编译。

---

## Task 7: 更新首页适配新数据模型

**Files:**
- Modify: `pages/index/index.js`
- Modify: `pages/index/index.wxml`
- Modify: `pages/index/index.wxss`

- [ ] **Step 1: 更新 index.js — loadHeritagePoints 方法**

替换 `loadHeritagePoints()` 方法（第 111-139 行），适配新数据模型的 `category` 字段用于不同标记图标：

```js
loadHeritagePoints() {
  const heritagePoints = app.globalData.heritagePoints || []

  // 根据 category 选择不同图标颜色
  const categoryIcons = {
    '博物馆': '/assets/icons/marker.svg',
    '文化馆': '/assets/icons/marker.svg',
    '景点': '/assets/icons/marker.svg',
    '工坊': '/assets/icons/marker.svg'
  }

  const markers = heritagePoints.map(point => ({
    id: point.id,
    latitude: point.latitude,
    longitude: point.longitude,
    name: point.name,
    iconPath: categoryIcons[point.category] || '/assets/icons/marker.svg',
    width: 35,
    height: 35,
    anchor: { x: 0.5, y: 0.9 },
    zIndex: 1,
    callout: {
      content: point.name + (point.heritageItems ? ` (${point.heritageItems.length}项非遗)` : ''),
      color: '#a85418',
      fontSize: 13,
      borderWidth: 1,
      borderColor: '#a85418',
      borderRadius: 5,
      padding: 8,
      display: 'BYCLICK'
    }
  }))

  setTimeout(() => {
    this.setData({ markers })
  }, 200)
},
```

- [ ] **Step 2: 更新 index.js — 修复 bindTouchMap 重复定义 bug**

删除第 398-405 行的重复 `bindTouchMap` 方法（只保留第 242-257 行的那个），这个 bug 导致点击地图时列表无法隐藏。

- [ ] **Step 3: 更新 index.wxml — 底部信息卡片适配**

替换底部信息卡片部分（第 31-39 行）：

```xml
<!-- 底部显示当前选中的地点信息 -->
<view class="heritage-info {{showInfo ? 'show' : ''}}">
  <view class="heritage-card">
    <view class="heritage-name">{{selectedHeritage.name}}</view>
    <view class="heritage-category">{{selectedHeritage.category}} · {{selectedHeritage.address}}</view>
    <view class="heritage-desc">{{selectedHeritage.description}}</view>
    <view class="heritage-items" wx:if="{{selectedHeritage.heritageItems && selectedHeritage.heritageItems.length > 0}}">
      <view class="item-tag" wx:for="{{selectedHeritage.heritageItems}}" wx:for-item="hItem" wx:key="name">
        {{hItem.name}}
      </view>
    </view>
    <view class="check-detail" bindtap="goToDetail" data-id="{{selectedHeritage.id}}">
      查看详情
    </view>
  </view>
</view>
```

- [ ] **Step 4: 更新 index.wxml — 右侧列表适配**

替换右侧列表中的卡片（第 52-56 行）：

```xml
<view class="heritage-card" bindtap="selectHeritage" data-id="{{item.id}}">
  <view class="heritage-name">{{item.name}}</view>
  <view class="heritage-category">{{item.category}}</view>
  <view class="heritage-desc">{{item.description}}</view>
</view>
```

- [ ] **Step 5: 更新 index.wxss — 新增 category 和 heritage-items 样式**

在 `heritage-desc` 样式后面追加：

```css
/* 地点类别标签 */
.heritage-category {
  font-size: 12px;
  color: #a85418;
  background-color: rgba(168, 84, 24, 0.08);
  padding: 2px 8px;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 8px;
}

/* 关联非遗标签列表 */
.heritage-items {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.item-tag {
  font-size: 11px;
  color: #a85418;
  background-color: rgba(168, 84, 24, 0.05);
  border: 1px solid rgba(168, 84, 24, 0.2);
  padding: 3px 8px;
  border-radius: 4px;
}
```

- [ ] **Step 6: 验证**

在微信开发者工具中：
1. 首页地图应显示 3 个标记点
2. 点击标记，底部卡片应显示地点名称、类别、地址、描述、关联非遗标签
3. 右侧列表点击后应正确选中并定位

---

## Task 8: 更新详情页适配新数据模型

**Files:**
- Modify: `pages/detail/detail.js`
- Modify: `pages/detail/detail.wxml`
- Modify: `pages/detail/detail.wxss`

- [ ] **Step 1: 更新 detail.js**

完整替换 `pages/detail/detail.js`：

```js
const app = getApp()

Page({
  data: {
    location: null,
    loading: true,
    animationReady: false,
  },

  onLoad(options) {
    const id = parseInt(options.id)
    this.loadDetail(id)
  },

  onReady() {
    setTimeout(() => {
      this.setData({ animationReady: true })
    }, 200)
  },

  onShareAppMessage() {
    const loc = this.data.location
    return {
      title: `潮艺星火 - ${loc ? loc.name : '潮汕非遗'}`,
      path: `/pages/detail/detail?id=${loc ? loc.id : '1'}`
    }
  },

  loadDetail(id) {
    const heritagePoints = app.globalData.heritagePoints || []
    const location = heritagePoints.find(item => item.id === id)

    if (location) {
      wx.setNavigationBarTitle({ title: location.name })
      this.setData({ location, loading: false })
    } else {
      wx.showToast({ title: '未找到相关信息', icon: 'none' })
      setTimeout(() => wx.navigateBack(), 1500)
    }
  },

  goBack() {
    wx.navigateBack()
  },

  previewImage(e) {
    const current = e.currentTarget.dataset.src
    const urls = this.data.location.images
    if (urls && urls.length > 0) {
      wx.previewImage({ current, urls })
    }
  },

  handleImageError(e) {
    const location = this.data.location
    if (location && location.images) {
      location.images[0] = '/assets/icons/default.svg'
      this.setData({ location })
    }
  }
})
```

- [ ] **Step 2: 更新 detail.wxml**

完整替换 `pages/detail/detail.wxml`：

```xml
<view class="container {{animationReady ? 'animation-ready' : ''}}" wx:if="{{!loading}}">
  <!-- 地点图片 -->
  <view class="location-image" wx:if="{{location.images.length > 0}}">
    <image
      src="{{location.images[0]}}"
      mode="aspectFill"
      bindtap="previewImage"
      binderror="handleImageError"
      data-src="{{location.images[0]}}"
      class="location-img"
    ></image>
  </view>

  <!-- 默认占位图（无图片时） -->
  <view class="location-image placeholder-img" wx:else>
    <text class="placeholder-text">{{location.name}}</text>
  </view>

  <!-- 地点内容 -->
  <view class="location-content">
    <!-- 地点标题 -->
    <view class="location-title">
      <text>{{location.name}}</text>
    </view>

    <!-- 地点类别和地址 -->
    <view class="location-meta">
      <text class="meta-category">{{location.category}}</text>
      <text class="meta-address">{{location.address}}</text>
    </view>

    <!-- 地点描述 -->
    <view class="location-desc">
      <text>{{location.description}}</text>
    </view>

    <!-- 关联非遗项目列表 -->
    <view class="section" wx:if="{{location.heritageItems && location.heritageItems.length > 0}}">
      <view class="section-title">关联非遗项目</view>
      <view class="heritage-list">
        <view class="heritage-item" wx:for="{{location.heritageItems}}" wx:key="name">
          <view class="heritage-item-header">
            <text class="heritage-item-name">{{item.name}}</text>
            <text class="heritage-item-status">{{item.status}}</text>
          </view>
          <text class="heritage-item-type">{{item.type}}</text>
          <text class="heritage-item-content">{{item.content}}</text>
        </view>
      </view>
    </view>
  </view>
</view>

<!-- 加载中 -->
<view class="loading" wx:else>
  <text>加载中...</text>
</view>
```

- [ ] **Step 3: 更新 detail.wxss — 追加新样式**

在现有样式末尾追加：

```css
/* 地点占位图 */
.placeholder-img {
  background: linear-gradient(135deg, #a85418, #c47a3a);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
  font-weight: bold;
}

/* 地点元信息 */
.location-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease 0.15s;
}

.animation-ready .location-meta {
  opacity: 1;
  transform: translateY(0);
}

.meta-category {
  font-size: 12px;
  color: #fff;
  background-color: #a85418;
  padding: 2px 10px;
  border-radius: 10px;
}

.meta-address {
  font-size: 12px;
  color: #999;
}

/* 非遗项目列表 */
.heritage-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.heritage-item {
  background-color: rgba(168, 84, 24, 0.03);
  border-radius: 8px;
  padding: 12px;
  border-left: 3px solid #a85418;
}

.heritage-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.heritage-item-name {
  font-size: 15px;
  font-weight: bold;
  color: #333;
}

.heritage-item-status {
  font-size: 11px;
  color: #a85418;
  background-color: rgba(168, 84, 24, 0.08);
  padding: 2px 6px;
  border-radius: 4px;
}

.heritage-item-type {
  display: block;
  font-size: 12px;
  color: #999;
  margin-bottom: 6px;
}

.heritage-item-content {
  display: block;
  font-size: 13px;
  color: #666;
  line-height: 1.6;
}
```

- [ ] **Step 4: 验证**

在微信开发者工具中：
1. 从首页点击标记 → 点击"查看详情"
2. 详情页应显示地点名称、类别标签、地址、描述
3. 关联非遗项目列表应正确展示

---

## Task 9: 创建数据抓取脚本

**Files:**
- Create: `scripts/fetch-heritage-data.js`
- Create: `scripts/package.json`

- [ ] **Step 1: 创建 scripts/package.json**

```json
{
  "name": "chaoyixinghuo-scripts",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "fetch": "node fetch-heritage-data.js"
  },
  "dependencies": {
    "axios": "^1.6.0"
  }
}
```

- [ ] **Step 2: 安装脚本依赖**

```bash
cd scripts && npm install
```

- [ ] **Step 3: 创建 scripts/fetch-heritage-data.js**

```js
/**
 * 潮艺星火 — 非遗地点数据抓取脚本
 *
 * 使用腾讯地图 Web Service API 的 POI 搜索功能，
 * 抓取潮汕地区（汕头、潮州、揭阳）非遗相关的真实地点数据。
 *
 * 使用前：
 * 1. 在腾讯地图开放平台申请 API Key: https://lbs.qq.com/dev/console/application/mine
 * 2. 将 API Key 设置为环境变量: set TX_MAP_KEY=你的key
 * 3. 运行: node fetch-heritage-data.js
 */

const axios = require('axios')
const fs = require('fs')
const path = require('path')

// ====== 配置 ======
const API_KEY = process.env.TX_MAP_KEY
if (!API_KEY) {
  console.error('请设置环境变量 TX_MAP_KEY（腾讯地图 Web Service API Key）')
  console.error('获取地址: https://lbs.qq.com/dev/console/application/mine')
  process.exit(1)
}

const BASE_URL = 'https://apis.map.qq.com/ws/place/v1/explore'

// 搜索范围：潮汕三个城市
const CITIES = [
  { name: '潮州', lat: 23.4563, lng: 116.6426 },
  { name: '汕头', lat: 23.3535, lng: 116.6819 },
  { name: '揭阳', lat: 23.5436, lng: 116.3724 }
]

// 搜索关键词
const KEYWORDS = [
  '非物质文化遗产',
  '非遗展示馆',
  '文化馆',
  '博物馆',
  '潮州木雕',
  '潮绣',
  '英歌舞',
  '潮剧',
  '工夫茶',
  '嵌瓷',
  '剪纸',
  '抽纱',
  '牌坊街',
  '古城区'
]

// 非遗项目匹配规则（关键词 → 非遗项目列表）
const HERITAGE_MAP = {
  '木雕': { name: '潮州木雕', type: '传统美术', status: '国家级非物质文化遗产' },
  '潮绣': { name: '潮绣', type: '传统美术', status: '国家级非物质文化遗产' },
  '刺绣': { name: '潮绣', type: '传统美术', status: '国家级非物质文化遗产' },
  '英歌': { name: '英歌舞', type: '传统舞蹈', status: '国家级非物质文化遗产' },
  '潮剧': { name: '潮剧', type: '传统戏剧', status: '国家级非物质文化遗产' },
  '工夫茶': { name: '潮州工夫茶艺', type: '民俗', status: '国家级非物质文化遗产' },
  '功夫茶': { name: '潮州工夫茶艺', type: '民俗', status: '国家级非物质文化遗产' },
  '嵌瓷': { name: '嵌瓷', type: '传统美术', status: '国家级非物质文化遗产' },
  '剪纸': { name: '剪纸（广东剪纸）', type: '传统美术', status: '国家级非物质文化遗产' },
  '抽纱': { name: '抽纱', type: '传统美术', status: '省级非物质文化遗产' },
  '陶瓷': { name: '枫溪瓷烧制技艺', type: '传统技艺', status: '国家级非物质文化遗产' },
  '瓷': { name: '枫溪瓷烧制技艺', type: '传统技艺', status: '国家级非物质文化遗产' },
  '花灯': { name: '潮州花灯', type: '传统美术', status: '省级非物质文化遗产' },
  '泥塑': { name: '大吴泥塑', type: '传统美术', status: '省级非物质文化遗产' },
  '铁枝木偶': { name: '铁枝木偶戏', type: '传统戏剧', status: '国家级非物质文化遗产' },
  '木偶': { name: '铁枝木偶戏', type: '传统戏剧', status: '国家级非物质文化遗产' },
  '玉雕': { name: '阳美翡翠玉雕', type: '传统美术', status: '国家级非物质文化遗产' },
  '内画': { name: '广东内画', type: '传统美术', status: '省级非物质文化遗产' },
  '音乐': { name: '潮州音乐', type: '传统音乐', status: '国家级非物质文化遗产' },
  '灯谜': { name: '澄海灯谜', type: '民间文学', status: '国家级非物质文化遗产' },
  '蜈蚣舞': { name: '蜈蚣舞', type: '传统舞蹈', status: '省级非物质文化遗产' },
  '狮舞': { name: '青狮', type: '传统舞蹈', status: '国家级非物质文化遗产' },
  '龙舞': { name: '乔林烟花火龙', type: '传统舞蹈', status: '国家级非物质文化遗产' },
  '歌册': { name: '潮州歌册', type: '曲艺', status: '国家级非物质文化遗产' }
}

// 地点类别判断
function guessCategory(name) {
  if (/博物馆/.test(name)) return '博物馆'
  if (/文化馆|文化中心/.test(name)) return '文化馆'
  if (/工坊|工作室|传习/.test(name)) return '工坊'
  return '景点'
}

// 根据地点名称匹配关联非遗项目
function matchHeritageItems(name, address) {
  const combined = name + address
  const matched = []
  const seen = new Set()

  for (const [keyword, heritage] of Object.entries(HERITAGE_MAP)) {
    if (combined.includes(keyword) && !seen.has(heritage.name)) {
      seen.add(heritage.name)
      matched.push({
        name: heritage.name,
        type: heritage.type,
        status: heritage.status,
        content: '' // 详细内容后续可手动补充或从数据源获取
      })
    }
  }

  return matched
}

// 生成地点描述
function generateDescription(name, category, matchedItems) {
  const descriptions = {
    '博物馆': `${name}是展示潮汕地区历史文化与非物质文化遗产的重要场所。`,
    '文化馆': `${name}是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。`,
    '景点': `${name}是潮汕地区具有深厚文化底蕴的历史名胜。`,
    '工坊': `${name}是非遗技艺传承的重要场所，见证着传统手工艺的薪火相传。`
  }

  let desc = descriptions[category] || descriptions['景点']

  if (matchedItems.length > 0) {
    const itemNames = matchedItems.slice(0, 3).map(i => i.name).join('、')
    desc += `馆内涉及${itemNames}等非遗项目。`
  }

  return desc
}

/**
 * 调用腾讯地图 POI 搜索 API
 */
async function searchPOI(keyword, city) {
  const params = {
    key: API_KEY,
    keyword: keyword,
    boundary: `nearby(${city.lat},${city.lng},30000)`, // 30km 半径
    page_size: 20,
    page_index: 1,
    output: 'json'
  }

  try {
    const response = await axios.get(BASE_URL, { params, timeout: 10000 })
    if (response.data && response.data.status === 0 && response.data.data) {
      return response.data.data || []
    }
    return []
  } catch (err) {
    console.warn(`  搜索 "${keyword}@${city.name}" 失败: ${err.message}`)
    return []
  }
}

/**
 * 主流程
 */
async function main() {
  console.log('=== 潮艺星火 非遗地点数据抓取 ===\n')
  console.log(`API Key: ${API_KEY.substring(0, 6)}...`)
  console.log(`搜索城市: ${CITIES.map(c => c.name).join('、')}`)
  console.log(`搜索关键词: ${KEYWORDS.length} 个\n`)

  const allLocations = new Map() // 用坐标去重

  for (const city of CITIES) {
    console.log(`\n--- 搜索 ${city.name} ---`)
    for (const keyword of KEYWORDS) {
      process.stdout.write(`  搜索 "${keyword}"...`)
      const pois = await searchPOI(keyword, city)
      process.stdout.write(` 找到 ${pois.length} 个结果\n`)

      for (const poi of pois) {
        const key = `${poi.location.lat.toFixed(4)},${poi.location.lng.toFixed(4)}`

        if (!allLocations.has(key)) {
          const name = poi.title
          const address = poi.address || ''
          const category = guessCategory(name)
          const matchedItems = matchHeritageItems(name, address)

          allLocations.set(key, {
            id: allLocations.size + 1,
            name: name,
            category: category,
            latitude: parseFloat(poi.location.lat.toFixed(6)),
            longitude: parseFloat(poi.location.lng.toFixed(6)),
            address: poi.province + poi.city + poi.district + address,
            description: generateDescription(name, category, matchedItems),
            images: [],
            heritageItems: matchedItems
          })
        } else {
          // 合并非遗项目
          const existing = allLocations.get(key)
          const newItems = matchHeritageItems(poi.title, poi.address || '')
          for (const item of newItems) {
            if (!existing.heritageItems.some(h => h.name === item.name)) {
              existing.heritageItems.push(item)
            }
          }
        }
      }

      // API 调用间隔，避免触发限流
      await new Promise(resolve => setTimeout(resolve, 200))
    }
  }

  const locations = Array.from(allLocations.values())
  // 重新编号
  locations.forEach((loc, i) => { loc.id = i + 1 })

  console.log(`\n=== 结果 ===`)
  console.log(`共找到 ${locations.length} 个非遗相关地点`)
  console.log(`涉及 ${new Set(locations.flatMap(l => l.heritageItems.map(h => h.name))).size} 个非遗项目`)

  // 输出 JSON
  const outputPath = path.resolve(__dirname, '../heritage-locations.json')
  fs.writeFileSync(outputPath, JSON.stringify(locations, null, 2), 'utf-8')
  console.log(`\n已保存到: ${outputPath}`)
  console.log('\n下一步: 将生成的 JSON 数据复制到 app.js 的 loadDefaultHeritageData() 方法中')
}

main().catch(err => {
  console.error('脚本执行失败:', err)
  process.exit(1)
})
```

- [ ] **Step 4: 运行脚本**

需要先申请腾讯地图 API Key：
1. 访问 https://lbs.qq.com/dev/console/application/mine
2. 创建应用，添加 WebServiceAPI 类型的 Key
3. 设置环境变量后运行：

```bash
# Windows
set TX_MAP_KEY=你的key
cd scripts
npm run fetch
```

预期输出：
```
=== 潮艺星火 非遗地点数据抓取 ===
搜索城市: 潮州、汕头、揭阳
...
共找到 XX 个非遗相关地点
已保存到: heritage-locations.json
```

- [ ] **Step 5: 将脚本输出整合到 app.js**

将生成的 `heritage-locations.json` 的数组内容替换 `app.js` 中 `loadDefaultHeritageData()` 方法内的数组。

- [ ] **Step 6: 验证**

在微信开发者工具中确认地图标记点数量和位置正确，底部卡片信息显示正常。

- [ ] **Step 7: 提交所有更改**

```bash
git add scripts/ assets/icons/tab-*.svg pages/articles/ pages/webview/ cloudfunctions/ app.js app.json pages/index/ pages/detail/
git commit -m "feat: 真实数据对接 + 文章模块

- 重构数据模型为地点+多非遗模式
- 新增双TabBar导航（首页+文章）
- 新增文章列表页（大图卡片布局）
- 新增web-view内嵌公众号文章
- 新增云函数sync-articles自动同步公众号文章
- 新增数据抓取脚本（腾讯地图POI API）
- 修复bindTouchMap重复定义bug"
```

---

## 自查清单

| 规格要求 | 对应任务 |
|----------|----------|
| 数据模型：地点为中心 + 多非遗 | Task 6, 7, 8 |
| 数据抓取脚本 | Task 9 |
| 双 TabBar 导航 | Task 1, 2 |
| 文章列表页（大图卡片） | Task 3 |
| WebView 内嵌文章 | Task 4 |
| 云函数自动同步 | Task 5 |
| AppSecret 安全存储 | Task 5（云函数环境变量） |
| 地图标记适配新模型 | Task 7 |
| 详情页适配新模型 | Task 8 |
| index.js bindTouchMap 重复 bug 修复 | Task 7 Step 2 |
