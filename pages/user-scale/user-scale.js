// pages/user-scale/user-scale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scaleList:[],
    pageIndex: 1,
    pageSize: 10,
  },

  // 去结果页
  toDetail(e){
    let item = e.id ? e : e.currentTarget.dataset.item
    wx.navigateTo({
      url:`/pages/scale-result/scale-result?answerId=${item.id}`
    })
  },
  // 展开结果
  viewDetail(e){
    let {item,index} = e.currentTarget.dataset
      if(item.answerList.length == 1) {
        return this.toDetail(item.answerList[0])
    }

    if(item.showMore){
      this.data.scaleList[index].showMore = false
      this.data.scaleList[index].scaleHeight = 0
    } else {
      this.data.scaleList[index].showMore = true
      this.data.scaleList[index].scaleHeight = item.answerList.length * 68
    }
    // 计算动画高度
    this.setData({
      scaleList:this.data.scaleList
    })
  },
  // 获取我的量表
  getScaleRecord(){
    const api = require("../../api/user/user.service").UserHttpService.prototype
    api.userScaleRecord().then(res => {
      console.log('获取量表记录',res)
      res.forEach(item => {
        item.showMore = false
        item.scaleHeight = 0
      })
      this.setData({
        scaleList:res
      })
    })
  },
  // 滚动到底部
  scrollBtm(){
    console.log('已经滚动到底部了')

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getScaleRecord()
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