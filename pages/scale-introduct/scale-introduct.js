// pages/scale-introduct/scale-introduct.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageRes:'',
    action:0,
    id:'',
    answerId:'',
    goOnAnswer:false,
  },
  actionScale:function(e){
    let { item } = e.currentTarget.dataset;
    
    if(this.data.action == 0) {
      this.setData({
        action:1,
        goOnAnswer:this.data.answerId?true : false
      })
    } else {
      if(item == 1){
        wx.redirectTo({
          url:`/pages/scale-answer/scale-answer?id=${this.data.id}&answerId=${this.data.answerId}`
        })
      } else {
        wx.redirectTo({
          url:`/pages/scale-answer/scale-answer?id=${this.data.id}`
        })
      }
    }
  },
  getScaleDetail:function (options) {
    const api = require("../../api/scale/scale.service").ScaleHttpService.prototype

    api.getScaleDetail(options.id).then(res => {
      this.setData({
        pageRes:res,
        id:res.id,
        answerId:res.answerId,
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getScaleDetail(options)
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