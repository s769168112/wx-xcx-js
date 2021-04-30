// pages/disease-department/disease-department.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    departmentLowList:[]
  },

  /** 获取二级科室列表 **/
  getDepartmentLowListData(options){
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDepartmentLowListData(options)
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