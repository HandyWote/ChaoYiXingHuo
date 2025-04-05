// miniprogram/pages/index/index.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
      markers: [],
      latitude: 23.661800,  // 潮州市中心坐标
      longitude: 116.622900,
      selectedHeritage: null,
      showInfo: false,  // 控制底部信息卡片动画
      mapLoadComplete: false,  // 地图加载完成状态
      showList: false,  // 控制右侧列表显示
      showSearch: false,  // 控制搜索框显示
      searchKeyword: '',  // 搜索关键词
      filteredHeritageList: [],  // 经过筛选的非遗列表
      controlsHidden: false  // 控制按钮是否隐藏
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      this.loadHeritagePoints()
      this.getCurrentLocation()
      
      // 初始化地图上下文
      this.mapCtx = wx.createMapContext('myMap')
      
      // 添加地图加载完成动画效果
      setTimeout(() => {
        this.setData({
          mapLoadComplete: true
        })
      }, 500)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
      // 地图组件初始化完成后重新加载标记
      setTimeout(() => {
        this.loadHeritagePoints()
      }, 300)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
      // 每次显示页面时重新加载数据
      this.loadHeritagePoints()
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    // 加载非遗点位数据
    loadHeritagePoints() {
      const heritagePoints = app.globalData.heritagePoints || []
      
      // 将非遗点转换为地图标记，优化SVG使用
      const markers = heritagePoints.map(point => ({
        id: point.id,
        latitude: point.latitude,
        longitude: point.longitude,
        name: point.name,
        iconPath: '/assets/icons/marker.svg',  // 保留使用SVG
        width: 35,  // 增大尺寸以确保可见
        height: 35,
        anchor: {x: 0.5, y: 0.9}, // 锚点位于图标底部中心偏上
        zIndex: 1, // 确保标记有适当的层级
        callout: {
          content: point.name,
          color: '#a85418',
          fontSize: 14,
          borderWidth: 1,
          borderColor: '#a85418',
          borderRadius: 5,
          padding: 8,
          display: 'BYCLICK'
        }
      }))
      
      // 使用nextTick确保地图加载完成后再设置标记
      setTimeout(() => {
        this.setData({ markers })
      }, 200)
    },
    
    // 获取用户当前位置
    getCurrentLocation() {
      wx.getLocation({
        type: 'gcj02',
        success: (res) => {
          // 定义潮汕地区的经纬度范围（潮州、汕头、揭阳大致范围）
          const chaoShanRegion = {
            minLat: 23.0, // 潮汕地区最南端纬度
            maxLat: 24.0, // 潮汕地区最北端纬度
            minLng: 116.0, // 潮汕地区最西端经度
            maxLng: 117.2  // 潮汕地区最东端经度
          }
          
          // 判断用户是否在潮汕地区
          const isInChaoShanRegion = 
            res.latitude >= chaoShanRegion.minLat && 
            res.latitude <= chaoShanRegion.maxLat && 
            res.longitude >= chaoShanRegion.minLng && 
            res.longitude <= chaoShanRegion.maxLng
          
          if (isInChaoShanRegion) {
            // 用户在潮汕地区，更新地图位置到用户当前位置
            this.setData({
              latitude: res.latitude,
              longitude: res.longitude
            })
            // 移动地图到用户位置
            this.mapCtx = this.mapCtx || wx.createMapContext('myMap')
            this.mapCtx.moveToLocation()
          } else {
            // 用户不在潮汕地区，显示提示并保持地图在潮州市中心
            wx.showToast({
              title: '您当前不在潮汕地区',
              icon: 'none',
              duration: 2000
            })
          }
        },
        fail: () => {
          // 默认显示潮州市区位置
          wx.showToast({
            title: '无法获取位置，显示默认位置',
            icon: 'none'
          })
        }
      })
    },
    
    // 点击地图标记
    markertap(e) {
      const markerId = e.markerId
      const heritagePoints = app.globalData.heritagePoints
      const heritage = heritagePoints.find(item => item.id === markerId)
      
      if (heritage) {
        // 添加动画效果，先隐藏再显示
        this.setData({
          showInfo: false
        })
        
        // 确保地图上下文存在
        this.mapCtx = this.mapCtx || wx.createMapContext('myMap')
        
        // 地图中心移动到所选标记位置
        this.mapCtx.includePoints({
          points: [{
            latitude: heritage.latitude,
            longitude: heritage.longitude
          }],
          padding: [60, 60, 200, 60] // 上右下左内边距，预留底部信息卡片空间
        })
        
        // 短暂延迟后显示信息
        setTimeout(() => {
          this.setData({
            selectedHeritage: heritage,
            showInfo: true
          })
        }, 300)
      }
    },
    
    // 跳转到详情页
    goToDetail(e) {
      const id = e.currentTarget.dataset.id
      
      // 添加过渡动画
      wx.showLoading({
        title: '加载中...',
        mask: true
      })
      
      setTimeout(() => {
        wx.hideLoading()
        wx.navigateTo({
          url: `/pages/detail/detail?id=${id}`
        })
      }, 300)
    },

    // 地图触摸事件
    bindTouchMap() {
      // 如果有点击空白地图区域，则隐藏信息面板
      if (this.data.showInfo) {
        this.setData({
          showInfo: false
        })
      }
      // 点击地图时隐藏列表
      if (this.data.showList) {
        this.setData({
          showList: false,
          showSearch: false,
          controlsHidden: false // 恢复控制按钮显示
        })
      }
    },

    // 显示非遗列表
    showHeritageList() {
      const heritagePoints = app.globalData.heritagePoints || []
      // 计算每个非遗点到用户当前位置的距离
      const sortedList = heritagePoints.map(point => {
        const distance = this.calculateDistance(
          this.data.latitude,
          this.data.longitude,
          point.latitude,
          point.longitude
        )
        return { ...point, distance: parseFloat(distance.toFixed(1)) }
      }).sort((a, b) => a.distance - b.distance)

      // 添加按钮动画效果
      wx.createSelectorQuery()
        .select('.map-controls')
        .fields({ dataset: true, size: true, node: true, properties: [] })
        .exec((res) => {
          if (res && res[0]) {
            // 添加class使按钮平滑右移隐藏
            const mapControls = res[0];
            const className = mapControls.className || '';
            if (!className.includes('list-active')) {
              wx.createSelectorQuery()
                .selectAll('.map-controls')
                .fields({ dataset: true, size: true, node: true, properties: [] })
                .exec((res) => {
                  if (res && res[0] && res[0].length > 0) {
                    res[0].forEach(item => {
                      item.node && item.node.setAttribute && item.node.setAttribute('class', 'map-controls controls-visible list-active');
                    });
                  }
                });
            }
          }
        });

      this.setData({
        showList: true,
        filteredHeritageList: sortedList,
        controlsHidden: true // 隐藏控制按钮
      })
    },

    // 隐藏非遗列表（返回按钮点击事件处理）
    hideHeritageList() {
      this.setData({
        showList: false,
        showSearch: false,
        controlsHidden: false // 恢复控制按钮显示
      })
      
      // 恢复控制按钮的显示
      wx.createSelectorQuery()
        .selectAll('.map-controls')
        .fields({ dataset: true, size: true, node: true, properties: [] })
        .exec((res) => {
          if (res && res[0] && res[0].length > 0) {
            res[0].forEach(item => {
              item.node && item.node.setAttribute && item.node.setAttribute('class', 'map-controls controls-visible');
            });
          }
        });
    },

    // 切换搜索框显示状态
    toggleSearch() {
      this.setData({
        showSearch: !this.data.showSearch,
        searchKeyword: ''
      })
      if (!this.data.showSearch) {
        // 关闭搜索时恢复完整列表
        this.showHeritageList()
      }
    },

    // 搜索输入事件处理
    onSearchInput(e) {
      const keyword = e.detail.value.toLowerCase()
      const heritagePoints = app.globalData.heritagePoints || []
      
      const filtered = heritagePoints
        .map(point => {
          const distance = this.calculateDistance(
            this.data.latitude,
            this.data.longitude,
            point.latitude,
            point.longitude
          )
          return { ...point, distance: parseFloat(distance.toFixed(1)) }
        })
        .filter(item => item.name.toLowerCase().includes(keyword))
        .sort((a, b) => a.distance - b.distance)

      this.setData({
        searchKeyword: keyword,
        filteredHeritageList: filtered
      })
    },

    // 计算两点之间的距离（单位：公里）
    calculateDistance(lat1, lon1, lat2, lon2) {
      const R = 6371 // 地球半径（公里）
      const dLat = this.deg2rad(lat2 - lat1)
      const dLon = this.deg2rad(lon2 - lon1)
      const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
      return R * c
    },

    // 角度转弧度
    deg2rad(deg) {
      return deg * (Math.PI/180)
    },

    // 从列表中选择非遗点
    selectHeritage(e) {
      const id = e.currentTarget.dataset.id
      const heritage = this.data.filteredHeritageList.find(item => item.id === id)
      
      if (heritage) {
        this.setData({
          showList: false,
          showSearch: false,
          selectedHeritage: heritage,
          showInfo: true,
          latitude: heritage.latitude,
          longitude: heritage.longitude,
          controlsHidden: false // 恢复控制按钮显示
        })
      }
    },

    // 地图触摸事件
    bindTouchMap() {
      // 如果有点击空白地图区域，则隐藏信息面板
      if (this.data.showInfo) {
        this.setData({
          showInfo: false
        })
      }
    },
    
    // 随机选择一个非遗地点
    randomHeritage() {
      const heritagePoints = app.globalData.heritagePoints || []
      
      // 确保有非遗点数据
      if (heritagePoints.length === 0) {
        wx.showToast({
          title: '暂无非遗数据',
          icon: 'none'
        })
        return
      }
      
      // 随机选择一个非遗点
      const randomIndex = Math.floor(Math.random() * heritagePoints.length)
      const randomHeritage = heritagePoints[randomIndex]
      
      // 添加动画效果，先隐藏信息卡片
      this.setData({
        showInfo: false,
        showList: false,
        showSearch: false,
        controlsHidden: false // 恢复控制按钮显示
      })
      
      // 确保地图上下文存在
      this.mapCtx = this.mapCtx || wx.createMapContext('myMap')
      
      // 显示加载动画
      wx.showLoading({
        title: '正在前往...',
        mask: true
      })
      
      // 地图中心移动到随机选择的非遗点位置
      this.mapCtx.includePoints({
        points: [{
          latitude: randomHeritage.latitude,
          longitude: randomHeritage.longitude
        }],
        padding: [60, 60, 200, 60], // 上右下左内边距，预留底部信息卡片空间
        success: () => {
          // 移动成功后短暂延迟显示信息卡片
          setTimeout(() => {
            wx.hideLoading()
            this.setData({
              selectedHeritage: randomHeritage,
              latitude: randomHeritage.latitude,
              longitude: randomHeritage.longitude,
              showInfo: true
            })
          }, 500)
        },
        fail: () => {
          wx.hideLoading()
          wx.showToast({
            title: '跳转失败，请重试',
            icon: 'none'
          })
        }
      })
    }

})