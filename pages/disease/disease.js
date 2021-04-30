// pages/disease/disease.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    departmentList: []
  },
   /**
   * 去科室二级页面
   */
  toDepartment:function (e) {
    let item = e.currentTarget.dataset.item
    wx.redirectTo({
      url: `../../pages/disease-department/disease-department?id=${item.id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const api = require("../../api/disease/disease.service").DiseaseHttpService.prototype
    api.getDepartmentListData().then(res => {
      console.log('获取科室列表',res)
      this.setData({
        departmentList: res
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