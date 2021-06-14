// pages/user-article/user-article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userArticleList: [],
    pageIndex: 1,
    pageSize: 10,
    noData: false
  },
  // 滚动到底部触发
  scrollBtm:function(){
    if(this.data.noData) return false;
    this.setData({
      pageIndex:(pageIndex + 1)
    })
    this.getUserArticleListData()
  },

  // 去文章详情页
  toArticleDetail:function(e){
    let {id} = e.currentTarget.dataset.item
    wx.navigateTo({
      url:`/pages/health-detail/health-detail?id=${id}`
    })
  },

  getUserArticleListData: function () {
    const api = require("../../api/user/user.service").UserHttpService.prototype
    let params = {
      pageIndex: this.data.pageIndex,
      pageSize: this.data.pageSize,
    }
    api.getUserArticleListData(params).then(res => {
      console.log('获取收藏的文章列表', res)
      this.setData({
        userArticleList:res.dataList,
        noData:res.totalPage > this.data.pageIndex?false:true
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserArticleListData()
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