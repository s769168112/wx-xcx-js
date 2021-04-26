// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchRes: [],
    searchView: 0,
    boxHeight: 0,
    searchText:'',
    page:1,
  },
  blurSearch:function(e){
    this.setData({
      searchText:e.detail.value
    })
  },
  searchChange:function(e){
    
    const api = require("../../api/other/other.service").OtherHttpService.prototype
    let params = {
      pageIndex:this.data.page,
      pageSize:20,
      search:value,
    }
    api.getSearchData(params).then(res => {
      console.log('搜索结果',res)
    })
  },

  search: function () {
    const api = require("../../api/other/other.service").OtherHttpService.prototype
    let params = {
      pageIndex:this.data.page,
      pageSize:20,
      search:this.data.searchText
    }
    api.getSearchData(params).then(res => {
      console.log('搜索结果',res)
      this.setData({
        searchRes:res.dataList
      })
    })
  },
  // del:function () {
  //   this.data.searchView --
  //   this.setData({
  //     res: [...this.data.searchRes].splice(0, this.data.searchView),
  //     boxHeight: (this.data.res.length - 1) * 60
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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