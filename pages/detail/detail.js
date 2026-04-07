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
      title: '潮艺星火 - ' + (loc ? loc.name : '潮汕非遗'),
      path: '/pages/detail/detail?id=' + (loc ? loc.id : '1')
    }
  },

  loadDetail(id) {
    const heritagePoints = app.globalData.heritagePoints || []
    const found = heritagePoints.find(item => item.id === id)

    if (found) {
      // 浅拷贝避免直接修改 globalData
      const location = JSON.parse(JSON.stringify(found))
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
