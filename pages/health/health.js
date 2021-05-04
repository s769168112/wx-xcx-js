// pages/health/health.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    knowledge:[
      {
        title:'冬天如何保持手脚温热',
        content:'冬季来临，容易受冷的地方还是属于手和脚了。冬季需要做事和写字就会露出手来来，这样就会冷冻无……',
        cover:'https://i0.hdslb.com/bfs/live/481f1ac31cf2a2767746118cfb403f1874fb6d82.jpg@320w_330h_1c_100q.webp'
      }]
  },

  // 去手术全解页面
  toSurgery:() => {
    wx.navigateTo({
      url:'/pages/surgery/surgery'
    })
  },
  // 去疾病百科页面
  toDisease:() => {
    wx.navigateTo({
      url:'/pages/disease/disease'
    })
  },
  toHealthLore:() => {
    wx.navigateTo({
      url:'/pages/health-lore/health-lore'
    })
  },
  // 去健康知识详情页
  toHealthDetail:(e)=> {
    let {id} = e.currentTarget.dataset.item
    wx.navigateTo({
      url:`/pages/health-detail/health-detail?id=${id}`
    })
  },
  // 去健康测试
  toHealthExam:function(e){
    wx.navigateTo({
      url:`/pages/health-exam/health-exam`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const api = require("../../api/health/health.service").HealthHttpService.prototype
    let params = {
      pageIndex:1,
      pageSize:5
    }
    api.getHealthLoreListData(params).then(res => {
      console.log('数据列表',res)
      this.setData({
        knowledge:res.dataList
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