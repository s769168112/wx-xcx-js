// pages/health-detail/health-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      title: "冬天如何保持手脚温热",
      image: "https://i0.hdslb.com/bfs/live/481f1ac31cf2a2767746118cfb403f1874fb6d82.jpg@320w_330h_1c_100q.webp"
    },
    userDetail: {
      name: '承拓科技团队',
      time: '更新于2020.11.16'
    },
    pageResData: {},
  },
  userFavorites: function () {
    const api = require("../../api/user/user.service").UserHttpService.prototype
    let params = {
      type: 0,
      id: this.data.pageResData.id
    }
    this.data.pageResData.isCollect = !this.data.pageResData.isCollect
    this.setData({
      pageResData:this.data.pageResData
    })
    if(this.data.pageResData.isCollect){
      api.userFavoritesCancel(params).then(res => {
        console.log('收藏结果', res)
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
      })
    } else {
      api.userFavorites(params).then(res => {
        console.log('收藏结果', res)
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
      })
    }
  },
  userShare: function () {
    const api = require("../../api/user/user.service").UserHttpService.prototype
    let params = {
      type: 0,
      id: this.data.pageResData.id
    }
    api.userShare(params).then(res => {
      console.log('分享结果', res)
      wx.showToast({
        title: res.data.msg,
        icon: 'none',
        duration: 2000
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const api = require("../../api/health/health.service").HealthHttpService.prototype
    api.getHealthLoreDetailData(options.id).then(res => {
      console.log('获取文章详情', res)
      this.setData({
        pageResData: res
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})