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
    ],
    pageResData:{},
    relationTipsList:[],
    relationQaList:[],
    id:'' //疾病id
  },
   // 去量表测评介绍页
   toScaleDetail: function (e) {
    let { item } = e.currentTarget.dataset
    // if(item.needBuy == 0) {
    //   return wx.navigateTo({
    //     url: `/pages/scale-buyScale/scale-buyScale?id=${item.id}`,
    //   })
    // }
    wx.navigateTo({
      url: `/pages/scale-introduct/scale-introduct?id=${item.id}`,
    })
  },
  toMoreScale(){
    wx.navigateTo({
      url: `/pages/health-exam/health-exam`,
    })
  },
  toArticle(e){
    let { item} = e.currentTarget.dataset
    console.log(item)
    wx.navigateTo({
      url: `../health-detail/health-detail?id=${item.id}`,
    })
  },
  toMoreArticle(){
    console.log('去更多文章',this.data.pageResData)
    wx.navigateTo({
      url: `/pages/more-article/more-article?id=${this.data.pageResData.id}`,
    })
    
  },
  toQuest(e){
    let { item} = e.currentTarget.dataset
    console.log(item)
    wx.navigateTo({
      url: `/pages/disease-qa/disease-qa?id=${item.id}`,
    })
  },
  toMoreQa(){
    console.log('去更多问答')
    wx.navigateTo({
      url: `/pages/more-qa/more-qa?id=${this.data.pageResData.id}`,
    })
  },
  // 指南
  toGuide:function() {
    wx.navigateTo({
      url: `/pages/disease-guide/disease-guide?id=${this.data.id}`,
    })
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
      this.setData({
        relationTipsList:res.dataList
      })
    })
  },
   // 获取相关问题
  getAboutQa(options){
    const api = require("../../api/disease/disease.service").DiseaseHttpService.prototype
    let params = {
      medicalId:options.id,
      pageIndex:1,
      pageSize:4
    }
    api.getAboutQa(params).then(res => {
      console.log('获取相关问题',res)
      this.setData({
        relationQaList:res.dataList
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取相关文章
    this.getAboutArticle(options)
    // 获取相关问题
    this.getAboutQa(options)
    const api = require("../../api/disease/disease.service").DiseaseHttpService.prototype
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