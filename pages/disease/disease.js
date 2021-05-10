// pages/disease/disease.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    departmentList: [],
    searchResList:[],//搜索结果
    isFocus:false,
    searchText:''
  },
  toDetail:function(e){
    let {item} = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/disease-detail/disease-detail?id=${item.id}`,
    })
  },
  inputChange:function(e){
    
    this.setData({
      searchText:e.detail.value
    })
    this.getDiseaseMedicalData()
  },
  inputFocus:function(){
    this.setData({
      isFocus:true
    })
  },
  inputBlur:function(e){
    if(this.data.searchText == '') {
      setTimeout(() => {
        this.setData({
          searchResList:[]
        })
       }, 500);
    }
    this.setData({
      isFocus:false
    })
  },
   // 搜索疾病
   getDiseaseMedicalData:function(){
     if(this.data.searchText == '') return
    const api = require("../../api/disease/disease.service").DiseaseHttpService.prototype
    let params = {
      search:this.data.searchText
    }
    api.getDiseaseMedicalData(params).then(res => {
      console.log('科室疾病列表',res)
      let str = this.data.searchText
      res.forEach(ele => {
        ele.title = ele.title.replace(new RegExp(str,'g'), `<span style="color:rgba(242, 10, 10, 0.68)">${this.data.searchText}</span>`)
      });
      this.setData({
        searchResList:res
      })
    })
  },
   /**
   * 去科室二级页面
   */
  toDepartment:function (e) {
    let item = e.currentTarget.dataset.item
    wx.redirectTo({
      url: `../../pages/disease-department/disease-department?id=${item.id}&title=${item.name}`,
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