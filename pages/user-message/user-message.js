// pages/user-message/user-message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList:[],
    pageIndex:1,
    pageSize:20,
    
  },
  // 滚动到底部
  scrollBtm(){
    if(this.data.pageIndex > this.data.totalPage){
      return false
    }
    this.setData({
      pageIndex:(this.data.pageIndex + 1)
    })
    this.getMessageList()
  },
  // 获取消息列表
  getMessageList:function(){
    const api = require("../../api/user/user.service").UserHttpService.prototype
    let params = {
      pageIndex:this.data.pageIndex,
      pageSize:this.data.pageSize
    }
    api.userMessage(params).then(res => {
      console.log('消息',res)
      this.setData({
        messageList:res.dataList,
        totalPage:res.totalPage
      })
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMessageList()
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