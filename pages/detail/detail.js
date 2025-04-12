// miniprogram/pages/detail/detail.js
// 获取全局应用实例
const app = getApp()

Page({

    /**
     * 页面的初始数据
     * @heritage {Object} 当前显示的非遗项目详情
     * @loading {Boolean} 页面加载状态
     * @animationReady {Boolean} 页面动画准备状态
     */
    data: {
        heritage: null,
        loading: true,
        animationReady: false
    },

    /**
     * 生命周期函数--监听页面加载
     * 根据传入的非遗ID加载详细信息
     */
    onLoad(options) {
        const id = parseInt(options.id)
        this.loadHeritageDetail(id)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     * 延迟启动页面过渡动画
     */
    onReady() {
        setTimeout(() => {
            this.setData({
                animationReady: true
            })
        }, 200)
    },

    /**
     * 用户点击右上角分享
     * 自定义分享标题和路径
     */
    onShareAppMessage() {
        const heritage = this.data.heritage
        return {
            title: `潮州非遗文化 - ${heritage ? heritage.name : '潮州非遗'}`,
            path: `/pages/detail/detail?id=${heritage ? heritage.id : '1'}`
        }
    },

    /**
     * 加载非遗详情信息
     * @param {Number} id 非遗项目ID
     * 从全局数据中查找对应的非遗信息
     * 设置页面标题并更新数据
     */
    loadHeritageDetail(id) {
        const heritagePoints = app.globalData.heritagePoints || []
        const heritage = heritagePoints.find(item => item.id === id)
        
        if (heritage) {
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
            
            setTimeout(() => {
                wx.navigateBack()
            }, 1500)
        }
    },
    
    /**
     * 返回上一页
     * 处理返回按钮点击事件
     */
    goBack() {
        wx.navigateBack()
    },
    
    /**
     * 图片预览功能
     * @param {Object} e 事件对象
     * 支持查看非遗项目的图片集
     */
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

    /**
     * 处理图片加载错误
     * @param {Object} e 事件对象
     * 当图片加载失败时显示默认图片
     */
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