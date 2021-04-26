// pages/disease-detail/disease-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    evaluation:[
      {
        title:'胃炎自测量表',
        content:'用于评测是否患有胃炎',
        type:'教师评',
        count:10,
        cover:'https://org.modao.cc/uploads4/images/5910/59107329/v2_qlvtvk.png'
      }
    ]
  },

  toGuide:function() {
    wx.navigateTo({
      url: '../disease-guide/disease-guide',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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