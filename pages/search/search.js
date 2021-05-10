// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    searchRes: [],
    searchDisplayRes:[],//输入框显示用
    isFocus:false,
    urlType:[
      {
        type:0,
        url:'/pages/health-detail/health-detail'
      },
      {
        type:1,
        url:'/pages/surgery-detail/surgery-detail'
      },
      {
        type:2,
        url:'/pages/disease-detail/disease-detail'
      },
      {
        type:3,
        url:'/pages/disease-qa/disease-qa'
      },
    ],
    searchText:'',
    page:1,
  },
  inputChange:function(e){
    
    this.setData({
      searchText:e.detail.value
    })
    this.searchChange()
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
  searchChange:function(){
    const api = require("../../api/other/other.service").OtherHttpService.prototype
    let params = {
      pageIndex:this.data.page,
      pageSize:20,
      search:this.data.searchText
    }
    api.getSearchData(params).then(res => {
      console.log('搜索结果',res)
      let str = this.data.searchText
      res.dataList.forEach(ele => {
        ele.title = ele.title.replace(new RegExp(str,'g'), `<span style="color:rgba(242, 10, 10, 0.68)">${this.data.searchText}</span>`)
      });
      this.setData({
        searchDisplayRes:res.dataList
      })
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
  // 去其他各种页面
  toOtherPage:function(e) {
    let item = e.currentTarget.dataset.item
    let url = this.data.urlType.filter(ele => {
      return item.type == ele.type
    })
    console.log('url',url,item)
    wx.navigateTo({
      url: `${url[0].url}?id=${item.id}`,
    })
  },

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