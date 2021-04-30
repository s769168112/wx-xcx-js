// pages/disease-guide/disease-guide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    surgeryList:[
      {
        cover:'https://i0.hdslb.com/bfs/live/481f1ac31cf2a2767746118cfb403f1874fb6d82.jpg@320w_330h_1c_100q.webp',
        title:'经皮肾穿刺碎术',
        status:0,
        tip:'创口小、风险低、回复快'
      },
      {
        cover:'https://i0.hdslb.com/bfs/live/481f1ac31cf2a2767746118cfb403f1874fb6d82.jpg@320w_330h_1c_100q.webp',
        title:'经皮肾穿刺碎术',
        status:1,
        tip:'创口小、风险低、回复快'
      },
    ],
    pageResData:{},
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const api = require("../../api/disease/disease.service").DiseaseHttpService.prototype
    console.log('疾病详情',options)
    api.getDiseaseDetailData(options.id).then(res => {
      console.log('获取疾病详情',res)
      this.setData({
        pageResData:res,
        id:options.id
      })
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