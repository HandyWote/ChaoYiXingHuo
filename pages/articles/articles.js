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
    const url = encodeURIComponent(e.currentTarget.dataset.url)
    wx.navigateTo({
      url: `/pages/webview/webview?url=${url}`
    })
  }
})
