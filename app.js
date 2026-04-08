// app.js
App({
  globalData: {
    heritagePoints: []
  },

  onLaunch() {
    // 初始化云开发
    if (wx.cloud) {
      wx.cloud.init({ traceUser: true })
    }

    this.loadDefaultHeritageData();
  },

  onShow() {
    // 小程序显示时的逻辑
  },

  onHide() {
    // 小程序隐藏时的逻辑
  },

  // 加载默认的非遗数据
  loadDefaultHeritageData() {
    // 硬编码的非遗数据（地点为中心的数据模型）
    this.globalData.heritagePoints = [
  {
    "id": 1,
    "name": "华夏历史博物馆",
    "category": "博物馆",
    "latitude": 23.576666,
    "longitude": 116.59593,
    "address": "广东省潮州市潮安区潮汕路浮阳路段西侧1号",
    "description": "华夏历史博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 2,
    "name": "潮州博物馆",
    "category": "博物馆",
    "latitude": 23.652752,
    "longitude": 116.624581,
    "address": "广东省潮州市湘桥区潮州市大道人民广场西南角",
    "description": "潮州博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 3,
    "name": "潮州市湘桥区博物馆",
    "category": "博物馆",
    "latitude": 23.668169,
    "longitude": 116.650567,
    "address": "广东省潮州市湘桥区太平路84号",
    "description": "潮州市湘桥区博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      },
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 4,
    "name": "大吴泥塑博物馆",
    "category": "博物馆",
    "latitude": 23.560082,
    "longitude": 116.613952,
    "address": "广东省潮州市潮安区潮汕环线高速松昌中学东北侧约180米",
    "description": "大吴泥塑博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。涉及大吴泥塑等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "大吴泥塑",
        "type": "传统美术",
        "status": "省级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 5,
    "name": "潮府工夫茶文化博物馆",
    "category": "博物馆",
    "latitude": 23.666039,
    "longitude": 116.647942,
    "address": "广东省潮州市湘桥区义安路宰辅巷10号",
    "description": "潮府工夫茶文化博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 6,
    "name": "潮州嵌瓷博物馆",
    "category": "博物馆",
    "latitude": 23.53856,
    "longitude": 116.602723,
    "address": "广东省潮州市潮安区金石镇郑镜鸿路(湖美学校西侧约200米)",
    "description": "潮州嵌瓷博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。涉及嵌瓷等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "嵌瓷",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 7,
    "name": "潮州市杨坚平非遗传统工艺博物馆",
    "category": "博物馆",
    "latitude": 23.668084,
    "longitude": 116.648365,
    "address": "广东省潮州市湘桥区文星路五分之一号",
    "description": "潮州市杨坚平非遗传统工艺博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 8,
    "name": "淡浮院-砚峰尺八博物馆",
    "category": "博物馆",
    "latitude": 23.678677,
    "longitude": 116.701277,
    "address": "广东省潮州市湘桥区淡浮院",
    "description": "淡浮院-砚峰尺八博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 9,
    "name": "宋茶文化博物馆",
    "category": "博物馆",
    "latitude": 23.934885,
    "longitude": 116.670256,
    "address": "广东省潮州市潮安区凤凰镇乌岽佛石",
    "description": "宋茶文化博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 10,
    "name": "潮州市意空间文化艺术馆",
    "category": "工坊",
    "latitude": 23.666891,
    "longitude": 116.650503,
    "address": "广东省潮州市湘桥区昌黎路一号2-4层(牌坊街与昌黎路交叉路口)",
    "description": "潮州市意空间文化艺术馆是非遗技艺传承的重要场所，见证着传统手工艺的薪火相传。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 11,
    "name": "潮绣艺术馆",
    "category": "工坊",
    "latitude": 23.652484,
    "longitude": 116.629508,
    "address": "广东省潮州市湘桥区城新西路与新春路交叉口东北角名瑞楼21号",
    "description": "潮绣艺术馆是非遗技艺传承的重要场所，见证着传统手工艺的薪火相传。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 12,
    "name": "画哩艺术馆",
    "category": "工坊",
    "latitude": 23.63091,
    "longitude": 116.577122,
    "address": "广东省潮州市潮安区潮安康华医院(新兴路东)",
    "description": "画哩艺术馆是非遗技艺传承的重要场所，见证着传统手工艺的薪火相传。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 13,
    "name": "潮州市仰中美术馆·潮彩体验中心",
    "category": "工坊",
    "latitude": 23.676176,
    "longitude": 116.598714,
    "address": "广东省潮州市湘桥区凤新街道兴利路1号",
    "description": "潮州市仰中美术馆·潮彩体验中心是非遗技艺传承的重要场所，见证着传统手工艺的薪火相传。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 14,
    "name": "清晖楼艺术馆",
    "category": "工坊",
    "latitude": 23.487711,
    "longitude": 116.635495,
    "address": "广东省潮州市潮安区潮汕路与玉林路交叉口正东方向293米左右",
    "description": "清晖楼艺术馆是非遗技艺传承的重要场所，见证着传统手工艺的薪火相传。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 15,
    "name": "联合美术馆(城北校区)",
    "category": "工坊",
    "latitude": 23.677065,
    "longitude": 117.005885,
    "address": "广东省潮州市饶平县拥军路与敬贤路交叉口正南方向307米左右",
    "description": "联合美术馆(城北校区)是非遗技艺传承的重要场所，见证着传统手工艺的薪火相传。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 16,
    "name": "潮州市仰中美术馆(牌坊街分展馆)",
    "category": "工坊",
    "latitude": 23.665279,
    "longitude": 116.65052,
    "address": "广东省潮州市湘桥区太平路牌坊街270号-1",
    "description": "潮州市仰中美术馆(牌坊街分展馆)是非遗技艺传承的重要场所，见证着传统手工艺的薪火相传。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 17,
    "name": "东三文化中心",
    "category": "文化馆",
    "latitude": 23.541419,
    "longitude": 116.680392,
    "address": "广东省潮州市潮安区东凤镇东三广德路东二学校东北侧约280米",
    "description": "东三文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 18,
    "name": "金石镇文化中心",
    "category": "文化馆",
    "latitude": 23.524351,
    "longitude": 116.619992,
    "address": "广东省潮州市潮安区金石镇振兴街与金石大道交叉路口往东南约100米(翁厝美来小学北侧约150米)",
    "description": "金石镇文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 19,
    "name": "潮安区文化中心",
    "category": "文化馆",
    "latitude": 23.46065,
    "longitude": 116.680146,
    "address": "广东省潮州市潮安区廉泉街4号",
    "description": "潮安区文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 20,
    "name": "潮侨青文化中心",
    "category": "文化馆",
    "latitude": 23.652616,
    "longitude": 116.66581,
    "address": "广东省潮州市湘桥区桥东街道东山路慧如公园北门小门入口处左侧",
    "description": "潮侨青文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 21,
    "name": "高堂镇文化中心",
    "category": "文化馆",
    "latitude": 23.708609,
    "longitude": 116.944181,
    "address": "广东省潮州市饶平县高堂镇味缘蛋糕店东侧",
    "description": "高堂镇文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 22,
    "name": "潮州美术馆",
    "category": "工坊",
    "latitude": 23.664791,
    "longitude": 116.613623,
    "address": "广东省潮州市湘桥区潮州大道中段潮州市图书馆隔壁",
    "description": "潮州美术馆是非遗技艺传承的重要场所，见证着传统手工艺的薪火相传。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 23,
    "name": "雅藏展览馆",
    "category": "文化馆",
    "latitude": 24.081619,
    "longitude": 116.876492,
    "address": "广东省潮州市饶平县饶洋镇好运连连烟花爆竹销售中心南侧100米",
    "description": "雅藏展览馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 24,
    "name": "古城牌坊街",
    "category": "景点",
    "latitude": 23.655644,
    "longitude": 116.647035,
    "address": "广东省潮州市湘桥区太平街道太平路663号",
    "description": "古城牌坊街是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 25,
    "name": "潮州市广济桥文物旅游景区",
    "category": "景点",
    "latitude": 23.662873,
    "longitude": 116.652731,
    "address": "广东省潮州市湘桥区环城东路广济城门对面",
    "description": "潮州市广济桥文物旅游景区是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 26,
    "name": "广济桥-灯光秀",
    "category": "景点",
    "latitude": 23.662214,
    "longitude": 116.657943,
    "address": "广东省潮州市湘桥区东兴北路与东兴南路交叉口西南方向28米左右",
    "description": "广济桥-灯光秀是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 27,
    "name": "开元寺泰佛殿",
    "category": "景点",
    "latitude": 23.654099,
    "longitude": 116.663452,
    "address": "广东省潮州市湘桥区桥东街道东山路慧如公园公交站",
    "description": "开元寺泰佛殿是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 28,
    "name": "开元寺普同塔院",
    "category": "景点",
    "latitude": 23.651668,
    "longitude": 116.639961,
    "address": "广东省潮州市湘桥区永春南路金丽花园东侧",
    "description": "开元寺普同塔院是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 29,
    "name": "己略黄公祠",
    "category": "景点",
    "latitude": 23.665087,
    "longitude": 116.648241,
    "address": "广东省潮州市湘桥区义安路铁巷2号",
    "description": "己略黄公祠是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 30,
    "name": "潮州古城",
    "category": "景点",
    "latitude": 23.673741,
    "longitude": 116.647942,
    "address": "广东省潮州市湘桥区西马路18号",
    "description": "潮州古城是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 31,
    "name": "潮州古城南",
    "category": "景点",
    "latitude": 23.656512,
    "longitude": 116.645622,
    "address": "广东省潮州市湘桥区下西平路与环城南路交叉口东南方向128米左右",
    "description": "潮州古城南是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 32,
    "name": "韩文公祠",
    "category": "景点",
    "latitude": 23.663596,
    "longitude": 116.659073,
    "address": "广东省潮州市湘桥区东兴北路笔架山麓",
    "description": "韩文公祠是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 33,
    "name": "艺生木雕",
    "category": "景点",
    "latitude": 23.631929,
    "longitude": 116.684375,
    "address": "广东省潮州市湘桥区磷溪镇231省道仙田星光学校西350米",
    "description": "艺生木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 34,
    "name": "潮州木雕(牌坊街店)",
    "category": "景点",
    "latitude": 23.663096,
    "longitude": 116.651214,
    "address": "广东省潮州市湘桥区东门街60号",
    "description": "潮州木雕(牌坊街店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      },
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 35,
    "name": "聚缘木雕坊",
    "category": "景点",
    "latitude": 23.567718,
    "longitude": 116.616467,
    "address": "广东省潮州市潮安区龙湖镇后郭村文体广场招牌斜对面和金路口",
    "description": "聚缘木雕坊是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 36,
    "name": "潮州木雕(凤洲东路店)",
    "category": "景点",
    "latitude": 23.649691,
    "longitude": 116.650453,
    "address": "广东省潮州市湘桥区城西街道凤洲东路凤凰洲公园西南侧",
    "description": "潮州木雕(凤洲东路店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 37,
    "name": "潮州木雕(东山路店)",
    "category": "景点",
    "latitude": 23.659692,
    "longitude": 116.673653,
    "address": "广东省潮州市湘桥区桥东街道桥东东山路卧石瓷艺大厦A幢1号铺面",
    "description": "潮州木雕(东山路店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 38,
    "name": "木雕",
    "category": "景点",
    "latitude": 23.548601,
    "longitude": 116.608739,
    "address": "广东省潮州市潮安区古一大路与大宗祠路交叉口西北方向286米左右",
    "description": "木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 39,
    "name": "卢进文木雕展厅",
    "category": "景点",
    "latitude": 23.679505,
    "longitude": 116.630772,
    "address": "广东省潮州市湘桥区凤新街道永春北路花园工业小区3号2层",
    "description": "卢进文木雕展厅是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 40,
    "name": "黄兴左木雕工作室",
    "category": "工坊",
    "latitude": 23.675294,
    "longitude": 116.642078,
    "address": "广东省潮州市湘桥区北园路美裕园东侧约70米",
    "description": "黄兴左木雕工作室是非遗技艺传承的重要场所，见证着传统手工艺的薪火相传。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 41,
    "name": "潮州东潮木雕",
    "category": "景点",
    "latitude": 23.67679,
    "longitude": 116.641179,
    "address": "广东省潮州市湘桥区北园路与南岩街交叉口东北方向304米左右",
    "description": "潮州东潮木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 42,
    "name": "庆合木雕",
    "category": "景点",
    "latitude": 23.676189,
    "longitude": 116.639792,
    "address": "广东省潮州市湘桥区北美路与春荣东路交叉口东南方向197米左右",
    "description": "庆合木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 43,
    "name": "谢秀华潮绣馆(万达花园店)",
    "category": "景点",
    "latitude": 23.67102,
    "longitude": 116.626308,
    "address": "广东省潮州市湘桥区凤新街道新洋路万达花园35号铺",
    "description": "谢秀华潮绣馆(万达花园店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 44,
    "name": "长乐源潮绣",
    "category": "景点",
    "latitude": 23.661688,
    "longitude": 116.648359,
    "address": "广东省潮州市湘桥区开元广场西南(猷巷)",
    "description": "长乐源潮绣是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      },
      {
        "name": "铁枝木偶戏",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 45,
    "name": "孙庆先潮绣研究所",
    "category": "景点",
    "latitude": 23.662897,
    "longitude": 116.645129,
    "address": "广东省潮州市湘桥区潮州古城开元路183号",
    "description": "孙庆先潮绣研究所是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 46,
    "name": "潮州市艺成潮绣研究院",
    "category": "景点",
    "latitude": 23.668729,
    "longitude": 116.630805,
    "address": "广东省潮州市湘桥区绿榕北路春光三片下工业楼7楼",
    "description": "潮州市艺成潮绣研究院是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 47,
    "name": "中国潮绣艺术陈列馆",
    "category": "景点",
    "latitude": 23.680518,
    "longitude": 116.636492,
    "address": "广东省潮州市湘桥区城西街道兰花二街兴业花园东侧15号",
    "description": "中国潮绣艺术陈列馆是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      },
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 48,
    "name": "潮湟英歌舞体验馆",
    "category": "景点",
    "latitude": 23.669493,
    "longitude": 116.652035,
    "address": "广东省潮州市湘桥区府学旧地文创园",
    "description": "潮湟英歌舞体验馆是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及英歌舞等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 49,
    "name": "英歌舞主题文艺茶馆",
    "category": "茶文化",
    "latitude": 23.670801,
    "longitude": 116.651773,
    "address": "广东省潮州市湘桥区中山路23号",
    "description": "英歌舞主题文艺茶馆是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及英歌舞等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 50,
    "name": "广东潮州潮剧传承保护中心",
    "category": "景点",
    "latitude": 23.662744,
    "longitude": 116.631865,
    "address": "广东省潮州市湘桥区潮新巷十九号院西侧",
    "description": "广东潮州潮剧传承保护中心是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 51,
    "name": "潮州市潮剧团",
    "category": "景点",
    "latitude": 23.670226,
    "longitude": 116.646898,
    "address": "广东省潮州市湘桥区中山路46号",
    "description": "潮州市潮剧团是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 52,
    "name": "春光蔡厝村老人活动中心",
    "category": "景点",
    "latitude": 23.666307,
    "longitude": 116.633648,
    "address": "广东省潮州市湘桥区城西街道仁里街与荔园路交叉口西北150米潮州市同德潮剧社附近",
    "description": "春光蔡厝村老人活动中心是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 53,
    "name": "饶平高堂潮剧团",
    "category": "景点",
    "latitude": 23.708323,
    "longitude": 116.938576,
    "address": "广东省潮州市饶平县站东路",
    "description": "饶平高堂潮剧团是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 54,
    "name": "林悠扬-槚丛工夫茶",
    "category": "茶文化",
    "latitude": 23.679172,
    "longitude": 116.645272,
    "address": "广东省潮州市湘桥区北堤路停车场D区入口",
    "description": "林悠扬-槚丛工夫茶是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 55,
    "name": "向东·凤凰单丛茶·潮州工夫茶",
    "category": "茶文化",
    "latitude": 23.668214,
    "longitude": 116.642431,
    "address": "广东省潮州市湘桥区环城西路旧西门街54号",
    "description": "向东·凤凰单丛茶·潮州工夫茶是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 56,
    "name": "一线流·工夫茶",
    "category": "茶文化",
    "latitude": 23.662875,
    "longitude": 116.607095,
    "address": "广东省潮州市湘桥区绿榕西路199号",
    "description": "一线流·工夫茶是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 57,
    "name": "六顺茶馆·工夫茶体验馆(西湖店)",
    "category": "茶文化",
    "latitude": 23.672551,
    "longitude": 116.643428,
    "address": "广东省潮州市湘桥区西湖公园内",
    "description": "六顺茶馆·工夫茶体验馆(西湖店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 58,
    "name": "孟臣·凤凰单丛茶·潮汕功夫茶",
    "category": "茶文化",
    "latitude": 23.669584,
    "longitude": 116.645552,
    "address": "广东省潮州市湘桥区中山路68号",
    "description": "孟臣·凤凰单丛茶·潮汕功夫茶是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 59,
    "name": "孟若斋潮州工夫茶非遗体验馆",
    "category": "茶文化",
    "latitude": 23.670037,
    "longitude": 116.644231,
    "address": "广东省潮州市湘桥区中山路98号西湖对面",
    "description": "孟若斋潮州工夫茶非遗体验馆是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      },
      {
        "name": "抽纱",
        "type": "传统美术",
        "status": "省级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 60,
    "name": "明云嵌瓷",
    "category": "景点",
    "latitude": 23.591103,
    "longitude": 116.626792,
    "address": "广东省潮州市潮安区浮洋镇东巷村西和区",
    "description": "明云嵌瓷是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及嵌瓷等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "嵌瓷",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 61,
    "name": "潮州市抽纱公司",
    "category": "景点",
    "latitude": 23.669212,
    "longitude": 116.643424,
    "address": "广东省潮州市湘桥区环城西路104号",
    "description": "潮州市抽纱公司是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及抽纱等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "抽纱",
        "type": "传统美术",
        "status": "省级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 62,
    "name": "内坑抽纱场-东南门",
    "category": "景点",
    "latitude": 23.613323,
    "longitude": 116.705493,
    "address": "广东省潮州市湘桥区内坑抽纱场",
    "description": "内坑抽纱场-东南门是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及抽纱等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "抽纱",
        "type": "传统美术",
        "status": "省级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 63,
    "name": "新安街抽纱宿舍",
    "category": "景点",
    "latitude": 23.662197,
    "longitude": 116.634258,
    "address": "广东省潮州市湘桥区新乐园(新安街)",
    "description": "新安街抽纱宿舍是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及抽纱等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "抽纱",
        "type": "传统美术",
        "status": "省级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 64,
    "name": "砂锅粥(原小公园)",
    "category": "美食",
    "latitude": 23.674098,
    "longitude": 117.002489,
    "address": "广东省潮州市饶平县汕汾路278号之一",
    "description": "砂锅粥(原小公园)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 65,
    "name": "联饶镇洋东村小公园",
    "category": "景点",
    "latitude": 23.736117,
    "longitude": 116.992765,
    "address": "广东省潮州市饶平县洋东村小公园",
    "description": "联饶镇洋东村小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 66,
    "name": "光明小公园",
    "category": "景点",
    "latitude": 23.662452,
    "longitude": 116.629768,
    "address": "广东省潮州市湘桥区城西街道光明街潮枫楼西侧",
    "description": "光明小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 67,
    "name": "廖厝村墩后小公园",
    "category": "景点",
    "latitude": 23.516752,
    "longitude": 116.627382,
    "address": "广东省潮州市潮安区金石镇上官路快乐幼儿北侧约90米",
    "description": "廖厝村墩后小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 68,
    "name": "溁东小公园",
    "category": "景点",
    "latitude": 24.037125,
    "longitude": 116.851541,
    "address": "广东省潮州市饶平县新丰大道与金丰路交叉口正北方向151米左右",
    "description": "溁东小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 69,
    "name": "和平聚宝宫小公园",
    "category": "景点",
    "latitude": 23.51067,
    "longitude": 116.639982,
    "address": "广东省潮州市潮安区大路顶路与宫前外路交叉口正南方向141米左右",
    "description": "和平聚宝宫小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 70,
    "name": "谢渡小公园",
    "category": "景点",
    "latitude": 23.550838,
    "longitude": 116.677912,
    "address": "广东省潮州市潮安区江东镇纯香饼食南侧190米",
    "description": "谢渡小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 71,
    "name": "神墨教育(小公园校区)",
    "category": "景点",
    "latitude": 23.668989,
    "longitude": 117.002331,
    "address": "广东省潮州市饶平县中山路与大衙路交叉口正北方向87米左右",
    "description": "神墨教育(小公园校区)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 72,
    "name": "乔林小公园",
    "category": "景点",
    "latitude": 23.451693,
    "longitude": 116.693527,
    "address": "广东省潮州市潮安区庵埠镇乔林新兴路2-1号",
    "description": "乔林小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 73,
    "name": "非遗·爱西干面(小公园总店)",
    "category": "美食",
    "latitude": 23.353964,
    "longitude": 116.674624,
    "address": "广东省汕头市金平区小公园街道国平路1号(南粤大厦对面)",
    "description": "非遗·爱西干面(小公园总店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 74,
    "name": "臻宝博物馆",
    "category": "博物馆",
    "latitude": 23.321645,
    "longitude": 116.714373,
    "address": "广东省汕头市濠江区潮宏基广场(南滨路南150米)",
    "description": "臻宝博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 75,
    "name": "潮阳博物馆",
    "category": "博物馆",
    "latitude": 23.259949,
    "longitude": 116.602503,
    "address": "广东省汕头市潮阳区中华路87号文光塔旁",
    "description": "潮阳博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 76,
    "name": "汕头市博物馆",
    "category": "博物馆",
    "latitude": 23.362609,
    "longitude": 116.681099,
    "address": "广东省汕头市金平区中山公园西北角(联韩花园对面)",
    "description": "汕头市博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 77,
    "name": "南澳总兵博物馆",
    "category": "博物馆",
    "latitude": 23.452128,
    "longitude": 117.10201,
    "address": "广东省汕头市南澳县深澳镇南澳岛生态旅游区(东北角)",
    "description": "南澳总兵博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 78,
    "name": "南澳县海防史博物馆",
    "category": "博物馆",
    "latitude": 23.425053,
    "longitude": 117.023941,
    "address": "广东省汕头市南澳县瑞祥路与中兴路交叉路口西南侧(汕头南澳岛旅游区)",
    "description": "南澳县海防史博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 79,
    "name": "潮汕华侨历史博物馆",
    "category": "博物馆",
    "latitude": 23.321545,
    "longitude": 116.715636,
    "address": "广东省汕头市濠江区礐石街道南滨路潮汕历史文化博览中心3-4层",
    "description": "潮汕华侨历史博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 80,
    "name": "郑正秋蔡楚生电影博物馆",
    "category": "博物馆",
    "latitude": 23.354296,
    "longitude": 116.673058,
    "address": "广东省汕头市金平区潮籍电影名人史迹馆",
    "description": "郑正秋蔡楚生电影博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 81,
    "name": "汕头工业博物馆",
    "category": "博物馆",
    "latitude": 23.394268,
    "longitude": 116.695499,
    "address": "广东省汕头市金平区护堤路168号公元厂科研楼一层",
    "description": "汕头工业博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 82,
    "name": "澄海博物馆",
    "category": "博物馆",
    "latitude": 23.45923,
    "longitude": 116.775127,
    "address": "广东省汕头市澄海区东港路人民公园附近(北门)",
    "description": "澄海博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 83,
    "name": "汕头市濠江区博物馆",
    "category": "博物馆",
    "latitude": 23.286407,
    "longitude": 116.730916,
    "address": "广东省汕头市濠江区达濠街道濠洲路楠天酒店(汕头濠江店)北侧约160米",
    "description": "汕头市濠江区博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 84,
    "name": "汕头市文化馆",
    "category": "文化馆",
    "latitude": 23.355759,
    "longitude": 116.682521,
    "address": "广东省汕头市金平区外马路149号",
    "description": "汕头市文化馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 85,
    "name": "龙湖区文化馆",
    "category": "文化馆",
    "latitude": 23.373017,
    "longitude": 116.715579,
    "address": "广东省汕头市龙湖区金霞街道大北山路4号翰苑F1层",
    "description": "龙湖区文化馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 86,
    "name": "澄海区文化馆",
    "category": "文化馆",
    "latitude": 23.46545,
    "longitude": 116.772596,
    "address": "广东省汕头市澄海区文化路1号",
    "description": "澄海区文化馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 87,
    "name": "汕头市潮汕工夫茶文化展览馆",
    "category": "文化馆",
    "latitude": 23.362891,
    "longitude": 116.683345,
    "address": "广东省汕头市金平区展览馆路中山公园",
    "description": "汕头市潮汕工夫茶文化展览馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 88,
    "name": "金蛇非遗文化馆",
    "category": "文化馆",
    "latitude": 23.350936,
    "longitude": 116.670558,
    "address": "广东省汕头市金平区商平路58号",
    "description": "金蛇非遗文化馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 89,
    "name": "映霞苑文化馆",
    "category": "文化馆",
    "latitude": 23.369793,
    "longitude": 116.722107,
    "address": "广东省汕头市龙湖区环碧西街环碧金珠园7栋101",
    "description": "映霞苑文化馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 90,
    "name": "大沙沟传统民俗文化中心",
    "category": "文化馆",
    "latitude": 23.434778,
    "longitude": 116.804235,
    "address": "广东省汕头市澄海区凤翔街道莱美路",
    "description": "大沙沟传统民俗文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 91,
    "name": "清雅文化中心",
    "category": "文化馆",
    "latitude": 23.387835,
    "longitude": 116.72993,
    "address": "广东省汕头市龙湖区嵩山北路潮人创客创意园B幢7楼",
    "description": "清雅文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 92,
    "name": "华联体育文化中心",
    "category": "文化馆",
    "latitude": 23.444156,
    "longitude": 116.793822,
    "address": "广东省汕头市澄海区莱美路白沙片5号",
    "description": "华联体育文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 93,
    "name": "侨批文化馆",
    "category": "文化馆",
    "latitude": 23.352831,
    "longitude": 116.674441,
    "address": "广东省汕头市金平区外马路18号",
    "description": "侨批文化馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。涉及侨批档案等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "侨批档案",
        "type": "民间文学",
        "status": "世界记忆遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 94,
    "name": "岭东美术馆",
    "category": "工坊",
    "latitude": 23.362532,
    "longitude": 116.745802,
    "address": "广东省汕头市龙湖区丰泽东街长城花园(黄山路)西侧约40米处艺苑大厦三楼",
    "description": "岭东美术馆是非遗技艺传承的重要场所，见证着传统手工艺的薪火相传。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 95,
    "name": "澄海韩文公祠",
    "category": "景点",
    "latitude": 23.576829,
    "longitude": 116.83151,
    "address": "广东省汕头市澄海区S335与樟林中山路交叉口东北方向247米左右",
    "description": "澄海韩文公祠是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 96,
    "name": "海江木雕",
    "category": "景点",
    "latitude": 23.366593,
    "longitude": 116.711245,
    "address": "广东省汕头市金平区金砂东路89号2栋104号",
    "description": "海江木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      },
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 97,
    "name": "新典雅装饰木雕",
    "category": "景点",
    "latitude": 23.366221,
    "longitude": 116.723459,
    "address": "广东省汕头市龙湖区金砂东路110号金讯大厦104铺",
    "description": "新典雅装饰木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 98,
    "name": "广泓木雕",
    "category": "景点",
    "latitude": 23.354817,
    "longitude": 116.681269,
    "address": "广东省汕头市金平区小公园街道同益路10号-102",
    "description": "广泓木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 99,
    "name": "德兴木雕",
    "category": "景点",
    "latitude": 23.467287,
    "longitude": 116.77241,
    "address": "广东省汕头市澄海区环城北路健儿乐幼儿园西侧约70米",
    "description": "德兴木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 100,
    "name": "阿彬木雕",
    "category": "景点",
    "latitude": 23.28833,
    "longitude": 116.326956,
    "address": "广东省汕头市潮南区陈店镇溪北村",
    "description": "阿彬木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 101,
    "name": "拓新木雕",
    "category": "景点",
    "latitude": 23.450752,
    "longitude": 116.380616,
    "address": "广东省汕头市潮阳区花园路",
    "description": "拓新木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 102,
    "name": "忠阳木雕(木雕金漆神佛像)",
    "category": "景点",
    "latitude": 23.20925,
    "longitude": 116.476934,
    "address": "广东省汕头市潮阳区和平镇S237和新石化加油站西北侧约90米",
    "description": "忠阳木雕(木雕金漆神佛像)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 103,
    "name": "细致木雕",
    "category": "景点",
    "latitude": 23.258428,
    "longitude": 116.608255,
    "address": "广东省汕头市潮阳区东山大道与严东中巷交叉口正西方向42米左右",
    "description": "细致木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 104,
    "name": "慈顺潮绣",
    "category": "景点",
    "latitude": 23.204157,
    "longitude": 116.6347,
    "address": "广东省汕头市潮阳区海门镇大埠圆临街铺面10号铺",
    "description": "慈顺潮绣是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 105,
    "name": "凤顺潮绣",
    "category": "景点",
    "latitude": 23.227011,
    "longitude": 116.62429,
    "address": "广东省汕头市潮阳区城南街道潮海路3巷",
    "description": "凤顺潮绣是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 106,
    "name": "华盛潮绣",
    "category": "景点",
    "latitude": 23.251233,
    "longitude": 116.607575,
    "address": "广东省汕头市潮阳区东山大道与新华路交叉口西南方向121米左右",
    "description": "华盛潮绣是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 107,
    "name": "濠兴潮绣",
    "category": "景点",
    "latitude": 23.267841,
    "longitude": 116.721333,
    "address": "广东省汕头市濠江区达南路95号恒大金碧御景湾影城36栋120商铺",
    "description": "濠兴潮绣是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 108,
    "name": "兴顺旺潮绣",
    "category": "景点",
    "latitude": 23.234451,
    "longitude": 116.313578,
    "address": "广东省汕头市潮南区仙城镇陈仙公路402号",
    "description": "兴顺旺潮绣是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 109,
    "name": "馨兴潮绣",
    "category": "景点",
    "latitude": 23.237739,
    "longitude": 116.406531,
    "address": "广东省汕头市潮南区峡山街道金光南路86号",
    "description": "馨兴潮绣是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 110,
    "name": "杨廷辉潮绣工艺社",
    "category": "景点",
    "latitude": 23.323189,
    "longitude": 116.338089,
    "address": "广东省汕头市潮阳区贵屿镇南安村南通路106-108号",
    "description": "杨廷辉潮绣工艺社是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 111,
    "name": "东艺潮绣",
    "category": "景点",
    "latitude": 23.255634,
    "longitude": 116.525327,
    "address": "广东省汕头市潮阳区金浦街道梅西村林八港路上伯公镇盛楼一楼1号",
    "description": "东艺潮绣是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 112,
    "name": "府城潮绣文化传媒有限公司",
    "category": "景点",
    "latitude": 23.266486,
    "longitude": 116.605288,
    "address": "广东省汕头市潮阳区城北一路235号",
    "description": "府城潮绣文化传媒有限公司是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 113,
    "name": "潮绣工艺",
    "category": "景点",
    "latitude": 23.437281,
    "longitude": 116.460658,
    "address": "广东省汕头市潮阳区关埠镇关金路港底路段109号附近",
    "description": "潮绣工艺是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 114,
    "name": "英歌舞",
    "category": "景点",
    "latitude": 23.2511,
    "longitude": 116.529528,
    "address": "广东省汕头市潮阳区林八港路与金梅路交叉口东南方向73米左右",
    "description": "英歌舞是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及英歌舞等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 115,
    "name": "潮汕英歌舞主题茶馆",
    "category": "茶文化",
    "latitude": 23.355408,
    "longitude": 116.673337,
    "address": "广东省汕头市金平区升平路与同平路交叉口正东方向53米左右",
    "description": "潮汕英歌舞主题茶馆是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及英歌舞等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      },
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 116,
    "name": "英歌舞展示长廊",
    "category": "景点",
    "latitude": 23.329314,
    "longitude": 116.780952,
    "address": "广东省汕头市龙湖区阿里山路明园广场·海湾壹号T2塔楼东北侧约270米",
    "description": "英歌舞展示长廊是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及英歌舞等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 117,
    "name": "上底村英歌舞训练基地",
    "category": "景点",
    "latitude": 23.460882,
    "longitude": 116.446875,
    "address": "广东省汕头市潮阳区关埠镇桥头小学西侧约240米",
    "description": "上底村英歌舞训练基地是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及英歌舞等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 118,
    "name": "东池英歌舞旅拍",
    "category": "景点",
    "latitude": 23.349925,
    "longitude": 116.668666,
    "address": "广东省汕头市金平区海平路12号二楼",
    "description": "东池英歌舞旅拍是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及英歌舞等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 119,
    "name": "旗韵潮汕特色英歌舞旅拍(小公园店)",
    "category": "景点",
    "latitude": 23.356559,
    "longitude": 116.673211,
    "address": "广东省汕头市金平区旧公园左巷3号",
    "description": "旗韵潮汕特色英歌舞旅拍(小公园店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及英歌舞等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 120,
    "name": "岗背乡众英歌舞训练基地",
    "category": "景点",
    "latitude": 23.266528,
    "longitude": 116.686195,
    "address": "广东省汕头市濠江区玉新街道岗背村",
    "description": "岗背乡众英歌舞训练基地是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及英歌舞等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 121,
    "name": "潮南英歌舞文化保护研习中心",
    "category": "景点",
    "latitude": 23.234283,
    "longitude": 116.395014,
    "address": "广东省汕头市潮南区长晖制衣北50米(金光南路北)",
    "description": "潮南英歌舞文化保护研习中心是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及英歌舞等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 122,
    "name": "玉一英歌舞总部基地",
    "category": "景点",
    "latitude": 23.427993,
    "longitude": 116.497518,
    "address": "广东省汕头市潮阳区关埠镇玉一村英歌舞训练基地888",
    "description": "玉一英歌舞总部基地是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及英歌舞等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 123,
    "name": "潮阳英歌舞服务区(揭惠高速惠来方向)",
    "category": "景点",
    "latitude": 23.304042,
    "longitude": 116.381906,
    "address": "广东省汕头市潮阳区",
    "description": "潮阳英歌舞服务区(揭惠高速惠来方向)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及英歌舞等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 124,
    "name": "潮剧艺术博物馆",
    "category": "博物馆",
    "latitude": 23.377646,
    "longitude": 116.68328,
    "address": "广东省汕头市金平区潮州路与金湖路交叉口正北方向199米左右",
    "description": "潮剧艺术博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 125,
    "name": "汕头市潮阳区潮剧保护研习中心",
    "category": "景点",
    "latitude": 23.256074,
    "longitude": 116.588366,
    "address": "广东省汕头市潮阳区城西三路双金园",
    "description": "汕头市潮阳区潮剧保护研习中心是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 126,
    "name": "澄海潮剧团",
    "category": "景点",
    "latitude": 23.469479,
    "longitude": 116.777567,
    "address": "广东省汕头市澄海区凤翔街道华兴路澄海北秀中学西南侧约40米",
    "description": "澄海潮剧团是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 127,
    "name": "澄希艺术中心(潮剧)",
    "category": "景点",
    "latitude": 23.562666,
    "longitude": 116.818159,
    "address": "广东省汕头市澄海区文化路11栋",
    "description": "澄希艺术中心(潮剧)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 128,
    "name": "潮汕工夫茶",
    "category": "茶文化",
    "latitude": 23.359547,
    "longitude": 116.692304,
    "address": "广东省汕头市金平区春梅街与黄岗路交叉口正东方向11米左右",
    "description": "潮汕工夫茶是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 129,
    "name": "茶汕·新潮汕工夫茶(峡山店)",
    "category": "茶文化",
    "latitude": 23.255248,
    "longitude": 116.417006,
    "address": "广东省汕头市潮南区广祥路269号",
    "description": "茶汕·新潮汕工夫茶(峡山店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 130,
    "name": "茶汕·新潮汕工夫茶(润街店)",
    "category": "茶文化",
    "latitude": 23.363648,
    "longitude": 116.718681,
    "address": "广东省汕头市龙湖区万象城幸福里雅居6栋114号",
    "description": "茶汕·新潮汕工夫茶(润街店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 131,
    "name": "顺鲤·潮汕工夫茶店(万象城店)",
    "category": "茶文化",
    "latitude": 23.365471,
    "longitude": 116.714619,
    "address": "广东省汕头市金平区东方街道金环花园7栋104号",
    "description": "顺鲤·潮汕工夫茶店(万象城店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 132,
    "name": "和德元工夫茶体验馆(金叶店)",
    "category": "茶文化",
    "latitude": 23.258751,
    "longitude": 116.594371,
    "address": "广东省汕头市潮阳区文光街道棉西大道金叶大厦首层沿街商铺",
    "description": "和德元工夫茶体验馆(金叶店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 133,
    "name": "功夫茶",
    "category": "茶文化",
    "latitude": 23.359115,
    "longitude": 116.694045,
    "address": "广东省汕头市金平区中山中路与中山路交叉口东北方向45米左右",
    "description": "功夫茶是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 134,
    "name": "汕头市潮汕工夫茶研究所",
    "category": "茶文化",
    "latitude": 23.376525,
    "longitude": 116.754603,
    "address": "广东省汕头市龙湖区新津街道泰山南路南方商贸广场B区40号",
    "description": "汕头市潮汕工夫茶研究所是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 135,
    "name": "大寮嵌瓷工艺社",
    "category": "景点",
    "latitude": 23.199897,
    "longitude": 116.500395,
    "address": "广东省汕头市潮阳区滨河路大寮小学校东侧约60米",
    "description": "大寮嵌瓷工艺社是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及嵌瓷等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "嵌瓷",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 136,
    "name": "肖娟丽剪纸(府前庄店)",
    "category": "景点",
    "latitude": 23.262713,
    "longitude": 116.601101,
    "address": "广东省汕头市潮阳区文光街道府前庄南门旁",
    "description": "肖娟丽剪纸(府前庄店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及剪纸（广东剪纸）等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "剪纸（广东剪纸）",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 137,
    "name": "木偶人",
    "category": "景点",
    "latitude": 23.343764,
    "longitude": 116.419868,
    "address": "广东省汕头市潮阳区谷贵路与饶中路交叉口正东方向256米左右",
    "description": "木偶人是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及铁枝木偶戏等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "铁枝木偶戏",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 138,
    "name": "木偶士多店",
    "category": "景点",
    "latitude": 23.233271,
    "longitude": 116.387427,
    "address": "广东省汕头市潮南区峡山街道金光南路与宏裕路交叉口西北480米",
    "description": "木偶士多店是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及铁枝木偶戏等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "铁枝木偶戏",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 139,
    "name": "老玉春香木偶剧团",
    "category": "景点",
    "latitude": 23.568309,
    "longitude": 116.738296,
    "address": "广东省汕头市澄海区隆都镇河墘东片横巷五号",
    "description": "老玉春香木偶剧团是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及铁枝木偶戏等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "铁枝木偶戏",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 140,
    "name": "老醉香园木偶团",
    "category": "景点",
    "latitude": 23.59341,
    "longitude": 116.725303,
    "address": "广东省汕头市澄海区侯邦华侨学校(潮汕环线高速南300米)",
    "description": "老醉香园木偶团是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及铁枝木偶戏等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "铁枝木偶戏",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 141,
    "name": "抽纱大厦",
    "category": "景点",
    "latitude": 23.351678,
    "longitude": 116.695557,
    "address": "广东省汕头市金平区石炮台街道海滨路16号",
    "description": "抽纱大厦是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及抽纱等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "抽纱",
        "type": "传统美术",
        "status": "省级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 142,
    "name": "汕头抽纱(大悦花园店)",
    "category": "景点",
    "latitude": 23.381694,
    "longitude": 116.729916,
    "address": "广东省汕头市龙湖区紫茵东街与衡山路交叉口东北方向235米左右",
    "description": "汕头抽纱(大悦花园店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及抽纱等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "抽纱",
        "type": "传统美术",
        "status": "省级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 143,
    "name": "花咖",
    "category": "景点",
    "latitude": 23.378792,
    "longitude": 116.729104,
    "address": "广东省汕头市龙湖区抽纱公寓(长江路北)",
    "description": "花咖是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及抽纱等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "抽纱",
        "type": "传统美术",
        "status": "省级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 144,
    "name": "小公园街道",
    "category": "景点",
    "latitude": 23.357574,
    "longitude": 116.68374,
    "address": "广东省汕头市金平区",
    "description": "小公园街道是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 145,
    "name": "老妈宫戏台",
    "category": "景点",
    "latitude": 23.354618,
    "longitude": 116.675303,
    "address": "广东省汕头市金平区升平路与外马路交叉口正西方向59米左右",
    "description": "老妈宫戏台是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 146,
    "name": "珠浦老妈宫",
    "category": "景点",
    "latitude": 23.295228,
    "longitude": 116.694432,
    "address": "广东省汕头市濠江区文化广场路与联泰路交叉口正北方向360米左右",
    "description": "珠浦老妈宫是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 147,
    "name": "老妈宫",
    "category": "景点",
    "latitude": 23.408376,
    "longitude": 116.708361,
    "address": "广东省汕头市龙湖区南环东街与南环西街交叉口正南方向284米左右",
    "description": "老妈宫是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 148,
    "name": "西胪莲藕汤老妈宫粽球(亭脚路店)",
    "category": "美食",
    "latitude": 23.258854,
    "longitude": 116.600736,
    "address": "广东省汕头市潮阳区文光街道亭脚路罗汉松住宅区A2幢首层14号铺(工商银行隔壁)",
    "description": "西胪莲藕汤老妈宫粽球(亭脚路店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 149,
    "name": "陈慈黉故居",
    "category": "景点",
    "latitude": 23.567625,
    "longitude": 116.746167,
    "address": "广东省汕头市澄海区隆都镇前美村竹宅路",
    "description": "陈慈黉故居是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 150,
    "name": "林少潮非遗木雕馆",
    "category": "景点",
    "latitude": 23.536113,
    "longitude": 116.353251,
    "address": "广东省揭阳市榕城区思贤路27号林少潮木雕工作室",
    "description": "林少潮非遗木雕馆是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 151,
    "name": "揭阳博物馆",
    "category": "博物馆",
    "latitude": 23.497103,
    "longitude": 116.434366,
    "address": "广东省揭阳市榕城区渔湖京冈文化广场内",
    "description": "揭阳博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 152,
    "name": "百兰山馆-榕城区博物馆",
    "category": "博物馆",
    "latitude": 23.532761,
    "longitude": 116.355257,
    "address": "广东省揭阳市榕城区观音仔街百兰山馆内",
    "description": "百兰山馆-榕城区博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 153,
    "name": "普宁市博物馆",
    "category": "博物馆",
    "latitude": 23.294565,
    "longitude": 116.157556,
    "address": "广东省揭阳市普宁市流沙西街道培英园社区赵厝寮路",
    "description": "普宁市博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 154,
    "name": "普宁市庄世平博物馆",
    "category": "博物馆",
    "latitude": 23.296273,
    "longitude": 116.140824,
    "address": "广东省揭阳市普宁市流沙大道西普宁华侨中学内",
    "description": "普宁市庄世平博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 155,
    "name": "岐山学校艺术博物馆",
    "category": "博物馆",
    "latitude": 23.563662,
    "longitude": 116.379495,
    "address": "广东省揭阳市榕城区东升街道岐山学校附近",
    "description": "岐山学校艺术博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 156,
    "name": "广东省揭阳市钱坑木雕博物馆",
    "category": "博物馆",
    "latitude": 23.377592,
    "longitude": 115.99641,
    "address": "广东省揭阳市揭西县钱坑镇钱南小学东侧约40米",
    "description": "广东省揭阳市钱坑木雕博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 157,
    "name": "惠来县博物馆",
    "category": "博物馆",
    "latitude": 23.024675,
    "longitude": 116.29736,
    "address": "广东省揭阳市惠来县文化广场内综合楼四楼",
    "description": "惠来县博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 158,
    "name": "聚鲶工业博物馆",
    "category": "博物馆",
    "latitude": 23.612586,
    "longitude": 116.502793,
    "address": "广东省揭阳市揭东区中德金属生态城创新A区5栋",
    "description": "聚鲶工业博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 159,
    "name": "揭阳市揭东区博物馆",
    "category": "博物馆",
    "latitude": 23.579519,
    "longitude": 116.428063,
    "address": "广东省揭阳市揭东区丹凤路揭东区人民广场对面",
    "description": "揭阳市揭东区博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 160,
    "name": "仙美文化广场-蔡翘院士博物馆",
    "category": "博物馆",
    "latitude": 23.61473,
    "longitude": 116.299815,
    "address": "广东省揭阳市揭东区G206与X115交叉口正南方向33米左右",
    "description": "仙美文化广场-蔡翘院士博物馆是展示潮汕地区历史文化与非物质文化遗产的重要场所。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 161,
    "name": "利泰文化馆",
    "category": "文化馆",
    "latitude": 23.259529,
    "longitude": 116.158187,
    "address": "广东省揭阳市普宁市大南山街道利泰大道利泰飞鹅岭农业公园",
    "description": "利泰文化馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 162,
    "name": "孙畔风雨圣者文化中心",
    "category": "文化馆",
    "latitude": 23.543285,
    "longitude": 116.519227,
    "address": "广东省揭阳市榕城区登岗镇孙畔大道南侧1号(S20东)",
    "description": "孙畔风雨圣者文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 163,
    "name": "溪洋村文化宫",
    "category": "文化馆",
    "latitude": 23.004275,
    "longitude": 116.299974,
    "address": "广东省揭阳市惠来县华湖镇南门大街玩玩幼儿园东南侧约260米",
    "description": "溪洋村文化宫是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 164,
    "name": "优生活羊乳品牌文化馆",
    "category": "文化馆",
    "latitude": 23.542143,
    "longitude": 116.38114,
    "address": "广东省揭阳市榕城区榕华街道东三路星河城小区111号",
    "description": "优生活羊乳品牌文化馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 165,
    "name": "普宁青梅文化中心",
    "category": "文化馆",
    "latitude": 23.278992,
    "longitude": 116.16351,
    "address": "广东省揭阳市普宁市流沙西街道普宁大道与玉华南路交叉口西南角",
    "description": "普宁青梅文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 166,
    "name": "周恩来同志革命活动展览馆",
    "category": "文化馆",
    "latitude": 23.535629,
    "longitude": 116.355935,
    "address": "广东省揭阳市榕城区韩祠路7号",
    "description": "周恩来同志革命活动展览馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 167,
    "name": "上寮老人文化中心",
    "category": "文化馆",
    "latitude": 23.303221,
    "longitude": 116.142972,
    "address": "广东省揭阳市普宁市池尾街道福宁路与长春路交叉路口往东约50米(池尾街道美德幼儿园西北侧约50米)",
    "description": "上寮老人文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 168,
    "name": "员东文化中心",
    "category": "文化馆",
    "latitude": 23.406278,
    "longitude": 115.898156,
    "address": "广东省揭阳市揭西县坪上镇员埔大道",
    "description": "员东文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 169,
    "name": "埔田镇文化中心广场",
    "category": "文化馆",
    "latitude": 23.622809,
    "longitude": 116.388636,
    "address": "广东省揭阳市揭东区埔田镇埔田村党群服务中心西北",
    "description": "埔田镇文化中心广场是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 170,
    "name": "皇墩村文化中心",
    "category": "文化馆",
    "latitude": 23.460259,
    "longitude": 115.829276,
    "address": "广东省揭阳市揭西县河婆街道温泉北路与西门大坑路交叉口北60米",
    "description": "皇墩村文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 171,
    "name": "青潭岭文化中心",
    "category": "文化馆",
    "latitude": 23.453422,
    "longitude": 116.025805,
    "address": "广东省揭阳市揭西县文化路与环村路交叉口东南方向17米左右",
    "description": "青潭岭文化中心是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 172,
    "name": "揭阳市德宝斋展览馆",
    "category": "文化馆",
    "latitude": 23.534258,
    "longitude": 116.355911,
    "address": "广东省揭阳市榕城区中山街道学宫广场商铺东区前栋108、109、201-216号",
    "description": "揭阳市德宝斋展览馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 173,
    "name": "揭阳市文化馆",
    "category": "文化馆",
    "latitude": 23.494383,
    "longitude": 116.433314,
    "address": "广东省揭阳市榕城区吉祥路",
    "description": "揭阳市文化馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 174,
    "name": "大南山革命斗争历史展览馆",
    "category": "文化馆",
    "latitude": 23.265582,
    "longitude": 116.165901,
    "address": "广东省揭阳市普宁市大南山街道陂沟村向东片0001号",
    "description": "大南山革命斗争历史展览馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 175,
    "name": "港文化馆",
    "category": "文化馆",
    "latitude": 23.608969,
    "longitude": 116.300527,
    "address": "广东省揭阳市揭东区新亨镇电子商务园N区N3-N4",
    "description": "港文化馆是当地群众文化活动的重要阵地，常年举办非遗展演和传承活动。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 176,
    "name": "揭阳市西湖美术馆",
    "category": "工坊",
    "latitude": 23.533741,
    "longitude": 116.344836,
    "address": "广东省揭阳市榕城区西环城路1号榕江西湖(东南角)",
    "description": "揭阳市西湖美术馆是非遗技艺传承的重要场所，见证着传统手工艺的薪火相传。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 177,
    "name": "木雕茶具",
    "category": "景点",
    "latitude": 23.355268,
    "longitude": 116.038234,
    "address": "广东省揭阳市普宁市",
    "description": "木雕茶具是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 178,
    "name": "林业木雕",
    "category": "景点",
    "latitude": 23.379668,
    "longitude": 115.996568,
    "address": "广东省揭阳市揭西县钱池路198号",
    "description": "林业木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 179,
    "name": "木雕日记",
    "category": "景点",
    "latitude": 23.004122,
    "longitude": 116.279347,
    "address": "广东省揭阳市惠来县寨外一巷1号",
    "description": "木雕日记是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 180,
    "name": "华杰木雕",
    "category": "景点",
    "latitude": 23.028416,
    "longitude": 116.343234,
    "address": "广东省揭阳市惠来县华湖镇G228标业玻璃西侧约210米",
    "description": "华杰木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 181,
    "name": "旺盛木雕文玩店",
    "category": "景点",
    "latitude": 23.337941,
    "longitude": 116.099284,
    "address": "广东省揭阳市普宁市梅塘镇238国道",
    "description": "旺盛木雕文玩店是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 182,
    "name": "缘木雕工艺坊",
    "category": "景点",
    "latitude": 23.289053,
    "longitude": 116.183042,
    "address": "广东省揭阳市普宁市后坛村老人活动中心(文竹南路东)",
    "description": "缘木雕工艺坊是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 183,
    "name": "华丽美木雕工艺",
    "category": "景点",
    "latitude": 23.502445,
    "longitude": 116.066103,
    "address": "广东省揭阳市揭西县京溪园镇上陇京塔路中段",
    "description": "华丽美木雕工艺是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 184,
    "name": "洪艺木雕",
    "category": "景点",
    "latitude": 23.29202,
    "longitude": 116.204275,
    "address": "广东省揭阳市普宁市普宁现代医院对面",
    "description": "洪艺木雕是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 185,
    "name": "陈泽铭木雕工作室",
    "category": "工坊",
    "latitude": 23.243271,
    "longitude": 116.257703,
    "address": "广东省揭阳市普宁市军埠镇新厝村普宁大道南侧250米",
    "description": "陈泽铭木雕工作室是非遗技艺传承的重要场所，见证着传统手工艺的薪火相传。涉及潮州木雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州木雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 186,
    "name": "佳艺潮绣坊",
    "category": "景点",
    "latitude": 23.046866,
    "longitude": 116.293163,
    "address": "广东省揭阳市惠来县傍山路与坪新路交叉口正北方向125米左右",
    "description": "佳艺潮绣坊是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 187,
    "name": "金盛兴潮绣",
    "category": "景点",
    "latitude": 23.527591,
    "longitude": 116.502359,
    "address": "广东省揭阳市榕城区",
    "description": "金盛兴潮绣是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮绣等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮绣",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 188,
    "name": "石鸟头英歌室",
    "category": "景点",
    "latitude": 23.340316,
    "longitude": 116.123401,
    "address": "广东省揭阳市普宁市华德楼东北50米(侨光路北)",
    "description": "石鸟头英歌室是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及英歌舞等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "英歌舞",
        "type": "传统舞蹈",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 189,
    "name": "武视相馆·潮剧曲谱联络点",
    "category": "景点",
    "latitude": 23.498676,
    "longitude": 116.348496,
    "address": "广东省揭阳市榕城区仙马路与篮兜商业街交叉口东340米",
    "description": "武视相馆·潮剧曲谱联络点是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 190,
    "name": "广东省揭阳市潮剧一团",
    "category": "景点",
    "latitude": 23.514938,
    "longitude": 116.361456,
    "address": "广东省揭阳市榕城区仙桥街道榕池路龙康桥9号",
    "description": "广东省揭阳市潮剧一团是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 191,
    "name": "潮剧唱唸培训",
    "category": "景点",
    "latitude": 23.554462,
    "longitude": 116.382489,
    "address": "广东省揭阳市榕城区东升街道新河路东东雅园b区7栋61号",
    "description": "潮剧唱唸培训是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 192,
    "name": "揭阳市潮剧团",
    "category": "景点",
    "latitude": 23.536793,
    "longitude": 116.360598,
    "address": "广东省揭阳市榕城区榕华街道新兴北路榕江公园西侧约30米",
    "description": "揭阳市潮剧团是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 193,
    "name": "广东小梨花潮剧团",
    "category": "景点",
    "latitude": 23.523682,
    "longitude": 116.440185,
    "address": "广东省揭阳市榕城区渔湖街道望江北路7号",
    "description": "广东小梨花潮剧团是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 194,
    "name": "揭阳市潮剧文化促进会",
    "category": "景点",
    "latitude": 23.536866,
    "longitude": 116.398375,
    "address": "广东省揭阳市榕城区进贤门大道南围十巷46号",
    "description": "揭阳市潮剧文化促进会是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 195,
    "name": "惠来县馨韵潮剧演出有限公司",
    "category": "景点",
    "latitude": 23.028427,
    "longitude": 116.287834,
    "address": "广东省揭阳市惠来县惠城镇南门西路156号(电器厂旁)",
    "description": "惠来县馨韵潮剧演出有限公司是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮剧等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮剧",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 196,
    "name": "茶榆·潮汕工夫茶驿站",
    "category": "茶文化",
    "latitude": 23.5388,
    "longitude": 116.524417,
    "address": "广东省揭阳市榕城区登岗镇登峰路桥头3号",
    "description": "茶榆·潮汕工夫茶驿站是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 197,
    "name": "潮汕工夫茶",
    "category": "茶文化",
    "latitude": 23.020316,
    "longitude": 116.282504,
    "address": "广东省揭阳市惠来县南环一路与庆平路交叉口正南方向143米左右",
    "description": "潮汕工夫茶是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 198,
    "name": "念茶记工夫茶(滨江尚都店)",
    "category": "茶文化",
    "latitude": 23.556408,
    "longitude": 116.389224,
    "address": "广东省揭阳市榕城区东升街道东升路与临江北路交叉口滨江尚都停车场出入口17号铺",
    "description": "念茶记工夫茶(滨江尚都店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 199,
    "name": "工夫茶行(惠来周田杭美乡综合市场店)",
    "category": "茶文化",
    "latitude": 22.980334,
    "longitude": 116.471221,
    "address": "广东省揭阳市惠来县周田镇杭美综合市场大门右侧",
    "description": "工夫茶行(惠来周田杭美乡综合市场店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及潮州工夫茶艺等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "潮州工夫茶艺",
        "type": "民俗",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 200,
    "name": "赤华园嵌瓷艺术",
    "category": "景点",
    "latitude": 23.292677,
    "longitude": 116.161287,
    "address": "广东省揭阳市普宁市河滨南路与赤华南路交叉口正东方向134米左右",
    "description": "赤华园嵌瓷艺术是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及嵌瓷等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "嵌瓷",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 201,
    "name": "金艺木偶服饰工艺制作中心",
    "category": "景点",
    "latitude": 23.537979,
    "longitude": 116.459865,
    "address": "广东省揭阳市榕城区炮台镇揭东大道西南侧",
    "description": "金艺木偶服饰工艺制作中心是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及铁枝木偶戏等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "铁枝木偶戏",
        "type": "传统戏剧",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 202,
    "name": "抽纱宿舍",
    "category": "景点",
    "latitude": 23.535161,
    "longitude": 116.36885,
    "address": "广东省揭阳市榕城区巷畔大道揭阳市中医院北侧约90米",
    "description": "抽纱宿舍是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及抽纱等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "抽纱",
        "type": "传统美术",
        "status": "省级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 203,
    "name": "刘厝抽纱后一巷",
    "category": "景点",
    "latitude": 23.540859,
    "longitude": 116.460925,
    "address": "广东省揭阳市榕城区",
    "description": "刘厝抽纱后一巷是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及抽纱等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "抽纱",
        "type": "传统美术",
        "status": "省级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 204,
    "name": "潮下小公园",
    "category": "景点",
    "latitude": 23.519227,
    "longitude": 116.32766,
    "address": "广东省揭阳市榕城区分渠路与潮兴里一巷交叉口东南方向89米左右",
    "description": "潮下小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 205,
    "name": "小洋四小公园",
    "category": "景点",
    "latitude": 23.528046,
    "longitude": 116.523346,
    "address": "广东省揭阳市榕城区大洋南路与大洋新乡南路交叉口正东方向398米左右",
    "description": "小洋四小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 206,
    "name": "新寨村小公园",
    "category": "景点",
    "latitude": 23.596243,
    "longitude": 116.515156,
    "address": "广东省揭阳市揭东区新寨村",
    "description": "新寨村小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 207,
    "name": "桂岭鸟围凤林小公园",
    "category": "景点",
    "latitude": 23.593561,
    "longitude": 116.261374,
    "address": "广东省揭阳市揭东区桂岭镇鸟围村天主堂西北侧190米",
    "description": "桂岭鸟围凤林小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 208,
    "name": "湿地小公园",
    "category": "景点",
    "latitude": 23.297667,
    "longitude": 116.282828,
    "address": "广东省揭阳市普宁市占陇镇南德楼西北侧260米",
    "description": "湿地小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 209,
    "name": "古寨小公园",
    "category": "景点",
    "latitude": 23.527288,
    "longitude": 116.34639,
    "address": "广东省揭阳市榕城区望江南路南",
    "description": "古寨小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 210,
    "name": "新永安里小公园",
    "category": "景点",
    "latitude": 23.554491,
    "longitude": 116.200273,
    "address": "广东省揭阳市揭东区塔瑞路与玉塔路交叉口正西方向107米左右",
    "description": "新永安里小公园是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 211,
    "name": "揭阳楼广场",
    "category": "景点",
    "latitude": 23.56591,
    "longitude": 116.393011,
    "address": "广东省揭阳市榕城区沿江中路193号正东方向190米",
    "description": "揭阳楼广场是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 212,
    "name": "DM COFFEE(揭阳楼店)",
    "category": "景点",
    "latitude": 23.554679,
    "longitude": 116.390041,
    "address": "广东省揭阳市榕城区东升街道临江北路丽枫酒店附近",
    "description": "DM COFFEE(揭阳楼店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 213,
    "name": "揭阳楼广场跑步路线",
    "category": "景点",
    "latitude": 23.564598,
    "longitude": 116.393241,
    "address": "广东省揭阳市榕城区(起点所在区县)",
    "description": "揭阳楼广场跑步路线是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 214,
    "name": "进贤门大桥",
    "category": "景点",
    "latitude": 23.559456,
    "longitude": 116.425049,
    "address": "广东省揭阳市榕城区",
    "description": "进贤门大桥是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 215,
    "name": "榕华大道进贤门市场西场",
    "category": "景点",
    "latitude": 23.533401,
    "longitude": 116.363495,
    "address": "广东省揭阳市榕城区义和路与榕华大道交叉口正北方向107米左右",
    "description": "榕华大道进贤门市场西场是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 216,
    "name": "进贤门派出所",
    "category": "景点",
    "latitude": 23.53754,
    "longitude": 116.357351,
    "address": "广东省揭阳市榕城区东环城路30号",
    "description": "进贤门派出所是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 217,
    "name": "进贤门市场主座",
    "category": "景点",
    "latitude": 23.53422,
    "longitude": 116.364727,
    "address": "广东省揭阳市榕城区新兴南路22-23号",
    "description": "进贤门市场主座是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 218,
    "name": "米西米西寿司(进贤门店)",
    "category": "景点",
    "latitude": 23.535319,
    "longitude": 116.359643,
    "address": "广东省揭阳市榕城区榕华街道新兴北路口揭阳市区糖业烟酒有限公司办公楼一楼南面",
    "description": "米西米西寿司(进贤门店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 219,
    "name": "阳美玉都",
    "category": "景点",
    "latitude": 23.558775,
    "longitude": 116.318612,
    "address": "广东省揭阳市揭东区阳美路",
    "description": "阳美玉都是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及阳美翡翠玉雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "阳美翡翠玉雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 220,
    "name": "镛汇·阳美玉都广场",
    "category": "景点",
    "latitude": 23.559215,
    "longitude": 116.314556,
    "address": "广东省揭阳市揭东区玉都广场路与玉龙街交叉口正西方向209米左右",
    "description": "镛汇·阳美玉都广场是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及阳美翡翠玉雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "阳美翡翠玉雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 221,
    "name": "阳美玉·都壹号",
    "category": "景点",
    "latitude": 23.556059,
    "longitude": 116.311745,
    "address": "广东省揭阳市揭东区磐东街道酒店路富豪公寓",
    "description": "阳美玉·都壹号是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。",
    "images": [],
    "heritageItems": []
  },
  {
    "id": 222,
    "name": "阳美玉都老玉街",
    "category": "景点",
    "latitude": 23.560852,
    "longitude": 116.318287,
    "address": "广东省揭阳市揭东区普宁水果店(老玉街)",
    "description": "阳美玉都老玉街是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及阳美翡翠玉雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "阳美翡翠玉雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 223,
    "name": "揭阳泊屿美宿(揭阳阳美玉都店)",
    "category": "景点",
    "latitude": 23.546366,
    "longitude": 116.304783,
    "address": "广东省揭阳市揭东区磐东街道河中村江华路前沟桥头南侧1号一至五层",
    "description": "揭阳泊屿美宿(揭阳阳美玉都店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及阳美翡翠玉雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "阳美翡翠玉雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 224,
    "name": "阳美玉都-大门",
    "category": "景点",
    "latitude": 23.558396,
    "longitude": 116.319624,
    "address": "广东省揭阳市揭东区阳美玉都旅游景区",
    "description": "阳美玉都-大门是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及阳美翡翠玉雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "阳美翡翠玉雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 225,
    "name": "栖海·美宿(揭东阳美玉都店)",
    "category": "景点",
    "latitude": 23.544234,
    "longitude": 116.30645,
    "address": "广东省揭阳市揭东区磐东街道镇南路北东段2号",
    "description": "栖海·美宿(揭东阳美玉都店)是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及阳美翡翠玉雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "阳美翡翠玉雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  },
  {
    "id": 226,
    "name": "阳美玉都景区游客中心",
    "category": "景点",
    "latitude": 23.554394,
    "longitude": 116.311176,
    "address": "广东省揭阳市揭东区磐兴大道与西关路交叉口正北方向395米左右",
    "description": "阳美玉都景区游客中心是潮汕地区具有深厚文化底蕴的历史名胜，承载着丰富的非遗文化记忆。涉及阳美翡翠玉雕等非遗项目。",
    "images": [],
    "heritageItems": [
      {
        "name": "阳美翡翠玉雕",
        "type": "传统美术",
        "status": "国家级非物质文化遗产",
        "content": ""
      }
    ]
  }
];
  }
})
