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
        "images": [
          "/assets/heritage/woodcarving.svg"
        ],
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
        "images": [
          "/assets/heritage/embroidery.svg"
        ],
        "history": "潮绣起源于唐代，兴盛于明清时期，是潮汕地区重要的传统手工艺。",
        "protection": "和国家地方government 对潮绣技艺进行保护，设立传承基地并举办展览活动。",
        "latitude": 23.6615,
        "longitude": 116.6232
      },
      {
        "id": 3,
        "name": "潮州歌册",
        "type": "传统音乐",
        "status": "省级非物质文化遗产",
        "description": "潮州歌册是流传于潮汕地区的传统民间音乐艺术形式，以地方方言演唱。",
        "images": [
          "/assets/heritage/songbook.svg"
        ],
        "history": "潮州歌册有数百年历史，曾是潮汕地区民间娱乐和文化传播的重要方式。",
        "protection": "地方政府支持潮州歌册的传承与发展，鼓励新一代艺术家学习和创新。",
        "latitude": 23.6623,
        "longitude": 116.6218
      },
      {
        "id": 4,
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "description": "中国最古老的地方剧种之一，运用潮汕方言演唱，以细腻的唱腔和程式化表演著称",
        "images": ["/assets/heritage/opera.svg"],
        "history": "形成于明代，至今已有400多年历史，2006年列入首批国家级非遗名录",
        "protection": "设立潮剧传承保护中心，定期举办潮剧文化节和青少年传承培训班",
        "latitude": 23.6652,
        "longitude": 116.6197
      },
      {
        "id": 5,
        "name": "大吴泥塑",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "description": "潮州浮洋镇大吴村传统泥塑技艺，以戏剧人物造型和贴塑工艺闻名",
        "images": ["/assets/heritage/clay_sculpture.svg"],
        "history": "起源于南宋末年，与天津泥人张、无锡惠山泥人并称中国三大泥塑",
        "protection": "建立大吴泥塑博物馆，开展非遗进校园活动",
        "latitude": 23.5721,
        "longitude": 116.5824
      },
      {
        "id": 6,
        "name": "潮州工夫茶",
        "type": "传统技艺",
        "status": "国家级非物质文化遗产",
        "description": "包含茶叶冲泡技法、茶具、品饮方式的完整茶道体系",
        "images": ["/assets/heritage/tea_art.svg"],
        "history": "形成于明代，发展出二十一式冲泡技艺，2022年列入人类非遗代表作名录",
        "protection": "制定技术规范标准，设立工夫茶文化研究会",
        "latitude": 23.6631,
        "longitude": 116.6225
      },
      {
        "id": 7,
        "name": "嵌瓷",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "description": "用彩色瓷片镶嵌装饰建筑构件的独特工艺，常见于潮汕祠堂庙宇",
        "images": ["/assets/heritage/mosaic.svg"],
        "history": "明代万历年间从潮州木雕衍生发展而来",
        "protection": "建立嵌瓷艺术展览馆，开展工艺大师认定工作",
        "latitude": 23.6689,
        "longitude": 116.6173
      },
      {
        "id": 8,
        "name": "蜈蚣舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "description": "澄海西门村传统民间舞蹈，用28节绸布连接模仿蜈蚣形态",
        "images": ["/assets/heritage/dance.svg"],
        "history": "创编于清同治年间，用于驱除瘟疫祈求平安",
        "protection": "组建专业表演团队，创新演出形式",
        "latitude": 23.4867,
        "longitude": 116.7663
      }
    ];
  }
})