// miniprogram/pages/detail/detail.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        heritage: null,
        loading: true,
        animationReady: false  // 控制动画状态
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const id = parseInt(options.id)
        this.loadHeritageDetail(id)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        // 页面渲染完成后启动动画
        setTimeout(() => {
            this.setData({
                animationReady: true
            })
        }, 200)
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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
        const heritage = this.data.heritage
        return {
            title: `潮州非遗文化 - ${heritage ? heritage.name : '潮州非遗'}`,
            path: `/pages/detail/detail?id=${heritage ? heritage.id : '1'}`
        }
    },

    // 加载非遗详情
    loadHeritageDetail(id) {
        const heritagePoints = app.globalData.heritagePoints || []
        const heritage = heritagePoints.find(item => item.id === id)
        
        if (heritage) {
            // 设置页面标题
            wx.setNavigationBarTitle({
                title: heritage.name
            })
            
            this.setData({
                heritage,
                loading: false
            })
        } else {
            wx.showToast({
                title: '未找到相关非遗信息',
                icon: 'none'
            })
            
            // 延迟返回
            setTimeout(() => {
                wx.navigateBack()
            }, 1500)
        }
    },
    
    // 返回上一页
    goBack() {
        wx.navigateBack()
    },
    
    // 图片预览
    previewImage(e) {
        const current = e.currentTarget.dataset.src
        const urls = this.data.heritage.images
        
        if (urls && urls.length > 0) {
            wx.previewImage({
                current,
                urls
            })
        }
    },

    // 处理图片加载错误
    handleImageError(e) {
        const heritage = this.data.heritage
        if (heritage) {
            heritage.images[0] = '/assets/icons/default.svg'
            this.setData({
                heritage: heritage
            })
        }
    }
})