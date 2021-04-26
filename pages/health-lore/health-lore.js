// pages/health-lore/health-lore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: '全部',
        isSelected: true
      },
      {
        id: 1,
        name: '饮食',
        isSelected: false
      },
      {
        id: 2,
        name: '运动',
        isSelected: false
      },
      {
        id: 3,
        name: '保健',
        isSelected: false
      },
    ],
    list:[
      {
        title:'冬天如何保持手脚温热',
        image:'https://i0.hdslb.com/bfs/live/481f1ac31cf2a2767746118cfb403f1874fb6d82.jpg@320w_330h_1c_100q.webp'
      },
      {
        title:'冬天如何保持手脚温热',
        image:'https://i0.hdslb.com/bfs/live/481f1ac31cf2a2767746118cfb403f1874fb6d82.jpg@320w_330h_1c_100q.webp'
      },
      {
        title:'冬天如何保持手脚温热',
        image:'https://i0.hdslb.com/bfs/live/481f1ac31cf2a2767746118cfb403f1874fb6d82.jpg@320w_330h_1c_100q.webp'
      },
      {
        title:'冬天如何保持手脚温热',
        image:'https://i0.hdslb.com/bfs/live/481f1ac31cf2a2767746118cfb403f1874fb6d82.jpg@320w_330h_1c_100q.webp'
      },
    ]
  },

  selectedTab: function (e) {
    let index = e.currentTarget.dataset.index
    for (let item of this.data.tabs) {
      item.isSelected = false
    }
    this.data.tabs[index].isSelected = true
    this.setData({
      tabs: this.data.tabs
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://47.94.16.114:8080/api/label/getTipsLabel',
      data: {},
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        console.log('获取tab标签',res)
      },
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