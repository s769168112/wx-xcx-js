// pages/user-message/user-message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList:[]
  },
  
  // 获取消息列表
  getMessageList:function(){
    let list = [
      {
        title:'系统通知1',
        time:'11-20',
        message:'感谢您使用本软件，目前软件内容尚未完善，后需将持续更新。'
      },
      {
        title:'系统通知2',
        time:'11-21',
        message:`感谢您使用本软件，目前软件内容尚未完善，后需将持续更新。感谢您使用本软件，目前软件内容尚未完善，后需将持续更新。`
      },
    ]
    this.setData({
      messageList:list
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