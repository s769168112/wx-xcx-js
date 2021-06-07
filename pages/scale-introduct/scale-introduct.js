// pages/scale-introduct/scale-introduct.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageRes:'',
    action:0,
    id:''
  },
  actionScale:function(){
    if(this.data.action == 0) {
      this.setData({
        action:1
      })
    } else {
      wx.navigateTo({
        url:`/pages/scale-answer/scale-answer?id=${this.data.id}`
      })
    }
  },
  getScaleTitle:function (options) {
    const api = require("../../api/scale/scale.service").ScaleHttpService.prototype
    let params = {
      id:options.id,
      answerId:''
    }
    api.getScaleTitle(params).then(res => {
      console.log('量表题目',res)
      this.setData({
        pageRes:res,
        id:options.id
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getScaleTitle(options)
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