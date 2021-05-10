// pages/user-video/user-video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    surgeryVideoList: [],
    pageIndex: 1,
    pageSize: 10,
    noData: false
  },

  toVideoDetail: function (e) {
    let { id } = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/surgery-detail/surgery-detail?id=${id}`
    })
  },

  // 获取手术视频
  getSurgeryListData: function () {
    const api = require("../../api/user/user.service").UserHttpService.prototype
    let params = {
      pageIndex: this.data.pageIndex,
      pageSize: this.data.pageSize,
    }
    api.getUserVideoListData(params).then(res => {
      console.log('获取用户收藏视频', res)
      let secondToDate = require("../../utils/util.js").secondToDate
      res.dataList.forEach(ele => {
        ele.videoDuration = secondToDate(ele.videoDuration)
      })
      this.setData({
        surgeryVideoList: [...res.dataList],
        noData: res.totalPage > this.data.pageIndex ? false : true
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSurgeryListData()
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