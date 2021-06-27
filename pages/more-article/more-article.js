// pages/more-article/more-article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    relationTipsList:[]
  },
// 获取相关文章
getAboutArticle(options){
  const api = require("../../api/disease/disease.service").DiseaseHttpService.prototype
  let params = {
    medicalId:options.id,
    pageIndex:1,
    pageSize:4
  }
  api.getAboutArticle(params).then(res => {
    console.log('获取相关文章',res)
    res.dataList.forEach(ele => {
      ele.introduction = ele.introduction.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g,'')
    })
    this.setData({
      relationTipsList:res.dataList
    })
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAboutArticle(options)
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