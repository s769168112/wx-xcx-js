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
    goOnAnswer:true,
  },
  actionScale:function(e){
    let { item } = e.currentTarget.dataset;
    if(this.data.action == 0) {
      this.setData({
        action:1
      })
    } else {
      if(item == 0){
        wx.navigateTo({
          url:`/pages/scale-answer/scale-answer?id=${this.data.id}`
        })
      } else {
        wx.navigateTo({
          url:`/pages/scale-answer/scale-answer?id=${this.data.id}&answerId=${this.data.answerId}`
        })
      }
    }
  },
  getScaleDetail:function (options) {
    console.log('op',options)
    const api = require("../../api/scale/scale.service").ScaleHttpService.prototype

    api.getScaleDetail(options.id).then(res => {
      console.log('量表详情',res)
      if(res.answerId) {
        this.data.goOnAnswer = true
      }
      this.setData({
        pageRes:res,
        id:res.id,
        answerId:res.answerId
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