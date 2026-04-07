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
