// pages/scale-result/scale-result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    relationSurgeryList:[
      {
        cover:'',
        videoDuration:'介绍',
        title:'题目'
      },
      {
        cover:'',
        videoDuration:'介绍',
        title:'题目'
      },
      {
        cover:'',
        videoDuration:'介绍',
        title:'题目'
      },
      {
        cover:'',
        videoDuration:'介绍',
        title:'题目'
      },
      {
        cover:'',
        videoDuration:'介绍',
        title:'题目'
      }
    ],
    pageRes:{}
  },
  // 更多测试
  toMoreScale(){
    wx.navigateTo({
      url:`/pages/health-exam/health-exam`
    })
  },
  // 获取量表结果页
  getScaleResult(options){
    const api = require("../../api/scale/scale.service").ScaleHttpService.prototype
    let params = {
      answerId:options.answerId||10224
    }
    api.getScaleResult(params).then(res => {
      console.log('量表结果',res)
      this.setData({
        pageRes:res
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getScaleResult(options)
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