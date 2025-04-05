// app.js
App({
  globalData: {
    mapKey: '7KUBZ-NZD6J-AKNF3-X4YJ5-UML6T-DEBES',
    heritagePoints: []
  },

  onLaunch() {
    // 使用内置数据而不是尝试从文件加载
    this.loadDefaultHeritageData();
    
    // 获取用户位置权限
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success: () => {
              // 用户已经同意小程序使用位置功能
            }
          })
        }
      }
    })
  },

  onShow() {
    // 小程序显示时的逻辑
  },

  onHide() {
    // 小程序隐藏时的逻辑
  },

  // 加载默认的非遗数据
  loadDefaultHeritageData() {
    // 硬编码的非遗数据
    this.globalData.heritagePoints = [
      {
        "id": 1,
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "description": "潮州木雕是广东潮州地区的传统雕刻艺术，以精细的镂空雕刻著称。",
        "images": [],
        "history": "潮汕非遗文化源远流长，历史可追溯至宋末元初时期，是中华文化的重要组成部分。",
        "protection": "国家和地方政府已将多项潮汕非遗项目列入保护名录，并设立专项资金支持非遗传承与创新。",
        "latitude": 23.6618,
        "longitude": 116.6229
      },
      {
        "id": 2,
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "description": "潮绣是中国四大名绣之一，以金线、银线、绒线结合绣制，具有立体感强、金碧辉煌的特点。",
        "images": [],
        "history": "潮绣起源于唐代，兴盛于明清时期，是潮汕地区重要的传统手工艺。",
        "protection": "国家和地方政府对潮绣技艺进行保护，设立传承基地并举办展览活动。",
        "latitude": 23.6615,
        "longitude": 116.6232
      },
      {
        "id": 3,
        "name": "潮州歌册",
        "type": "传统音乐",
        "status": "省级非物质文化遗产",
        "description": "潮州歌册是流传于潮汕地区的传统民间音乐艺术形式，以地方方言演唱。",
        "images": [],
        "history": "潮州歌册有数百年历史，曾是潮汕地区民间娱乐和文化传播的重要方式。",
        "protection": "地方政府支持潮州歌册的传承与发展，鼓励新一代艺术家学习和创新。",
        "latitude": 23.6623,
        "longitude": 116.6218
      }
    ];
  }
})