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
    if (!wx.cloud) {
      this.setData({ loading: false, articles: [] })
      if (callback) callback()
      return
    }

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
        // 集合不存在时静默处理，显示空状态
        this.setData({ loading: false, articles: [] })
        if (callback) callback()
      })
  },

  openArticle(e) {
    const url = e.currentTarget.dataset.url
    // 使用 copyFile 方案：直接复制链接到剪贴板，提示用户在微信中打开
    // 或者使用 web-view 打开（需配置业务域名）
    wx.setClipboardData({
      data: url,
      success() {
        wx.showToast({
          title: '链接已复制，可在浏览器中打开',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
})
