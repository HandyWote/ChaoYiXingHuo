# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## TOP RULES

must use superpower
always give me some resolutions and recommand me the lower tech-debt plan

## Project Overview

潮艺星火 — 一个展示潮汕非物质文化遗产的微信小程序。通过地图可视化展示非遗点位置，支持搜索、随机发现、详情查看和分享。

## Tech Stack

- 微信小程序原生框架（非 uni-app / Taro）
- 腾讯地图 SDK（mapKey 在 app.js 中配置）
- WeUI 扩展库（app.json 中 `useExtendedLib` 启用）
- ES6+ 语法，Babel 编译（依赖 `@babel/runtime`）
- 纯本地数据，无后端 API

## Architecture

两个页面，全局数据驱动：

- **app.js** — 应用入口，所有非遗数据硬编码在 `globalData.heritagePoints` 数组中（约 88KB）。每个条目包含 id、name、type、status、latitude、longitude、content、images、inheritors 等字段。
- **pages/index/** — 首页（地图视图）。功能：地图标记点展示、定位、非遗列表（按距离排序）、模糊搜索、随机跳转。通过 `getApp()` 读取全局数据。
- **pages/detail/** — 详情页。通过 URL 参数 `id` 从全局数据中查找对应条目，展示详情、图片预览、分享。

页面间数据流：index 点击跳转 → `wx.navigateTo('/pages/detail/detail?id=XX')` → detail 从 `app.globalData` 按 id 查找。

## Development

使用微信开发者工具打开项目根目录即可预览和调试。AppID: `wx2f229f30d03478b8`。

无 npm build 脚本，无测试框架。`package.json` 中的 test 脚本为占位符。

## Key Conventions

- 非遗数据全部在 `app.js` 的 `loadDefaultHeritageData()` 方法中维护，新增/修改非遗条目直接编辑该方法的数组
- 地图坐标系为 gcj02（国测局坐标）
- SVG 图标存放在 `assets/icons/` 和 `assets/heritage/` 目录
- 导航栏主色调 `#a85418`，定义在 `app.json` 的 `window.navigationBarBackgroundColor`
