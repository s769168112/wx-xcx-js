// pages/disease-department/disease-department.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    departmentLowList:[],
    diseaseList:[],
    pageOptions:{},
    checkedId:'',//顶部选中的标签id
    allDepart:{id:'',title:''},
    title:'',
  },
  // 选择标签
  selectedTab:function(e){
    let {item} = e.currentTarget.dataset
    console.log('选择',item)
    this.setData({
      checkedId:item.id,
      title:item.name || this.data.pageOptions.title
    })
    console.log(this.data.checkedId)
    this.getDiseaseMedicalListData(item.id)
  },
  // 去疾病详情
  toDiseaseDetail:function(e){
    let {item} = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/disease-detail/disease-detail?id=${item.id}`,
    })
  },
  // 获取科室二级列表
  getDepartmentLowListData:function(options){
    console.log('options',options)
    const api = require("../../api/disease/disease.service").DiseaseHttpService.prototype
    let params = {
      label:options.id
    }
    api.getDepartmentLowListData(params).then(res => {
      console.log('科室二级列表',res)
      this.setData({
        departmentLowList:res
      })
    })
  },
 
  // 获取底部疾病列表
  getDiseaseMedicalListData:function(id = ''){
    const api = require("../../api/disease/disease.service").DiseaseHttpService.prototype
    let params = {
      oneLevelLabel:this.data.pageOptions.id,
      twoLevelLabel:id
    }
    api.getDiseaseMedicalListData(params).then(res => {
      console.log('获取疾病列表',res)
      // let list = [...res,...res,...res,...res,...res]
      this.setData({
        diseaseList:res
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pageOptions:options,
      title:options.title
    })
    this.getDepartmentLowListData(options)
    this.getDiseaseMedicalListData()
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