// pages/scale-result/scale-result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    surgeryVideoList:[
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
    ]
  },
  // 获取量表结果页
  getScaleResult(){
    const api = require("../../api/scale/scale.service").ScaleHttpService.prototype
    let params = {
      answerId:10208
    }
    api.getScaleResult(params).then(res => {
      console.log('量表结果',res)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getScaleResult()
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