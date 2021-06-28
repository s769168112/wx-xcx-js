// pages/surgery/surgery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    surgeryList:[],
    searchResList:[],//搜索结果
    isFocus:false,
    searchText:'',
    searchResH:0,
    secondToDate:''
  },
  
  inputChange:function(e){
    this.setData({
      searchText:e.detail.value
    })
    this.searchSurgeryListData()
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
  toDetail:function(e) {
    let item = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `../../pages/surgery-detail/surgery-detail?id=${item.id}`,
    })
  },
  searchSurgeryListData:function(){
    const api = require("../../api/surgery/surgery.service").SurgeryHttpService.prototype
    let params = {
      pageSize:100,
      pageIndex:1,
      search:this.data.searchText
    }
    api.getSurgeryListData(params).then(res => {
      console.log('搜索手术全解',res)
      res.dataList.forEach(ele => {
        ele.title = ele.title.replace(new RegExp(this.data.searchText,'g'), `<span style="color:rgba(242, 10, 10, 0.68)">${this.data.searchText}</span>`)
      });
      this.setData({
        searchResList:res.dataList,
        searchResH:res.dataList.length * 64
      })
    })
  },
  getSurgeryListData:function(){
    const api = require("../../api/surgery/surgery.service").SurgeryHttpService.prototype
    let secondToDate = require("../../utils/util.js").secondToDate
    api.getSurgeryListData().then(res => {
      console.log('获取手术全解',res)
      res.dataList.forEach(ele => {
        ele.videoDuration = secondToDate(ele.videoDuration)
      })
      this.setData({
        surgeryList:res.dataList
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSurgeryListData()
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