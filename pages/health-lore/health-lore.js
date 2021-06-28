// pages/health-lore/health-lore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: '',
        name: '全部',
        isSelected: true
      }
    ],
    loreList:[], // 健康知识列表数据
    pageIndex:1,
    pageSize:10,
    noData:false, // 是否已经没有数据了
    labelId:'',
    searchResList:[],//搜索结果
    isFocus:false,
    searchText:''
  },
  // 输入框部分
  inputChange:function(e){
    
    this.setData({
      searchText:e.detail.value
    })
    this.searchHealthLoreListData()
    
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

  // 滚动到底部
  scrollBtm:function() {
    if(this.data.noData) return false;
    this.getHealthLoreListData()
  },

  // 切换选项卡
  selectedTab: function (e) {
    let {index,tab} = e.currentTarget.dataset
    for (let item of this.data.tabs) {
      item.isSelected = false
    }
    this.data.tabs[index].isSelected = true
    this.setData({
      tabs: this.data.tabs,
      labelId:tab.id
    })
    this.getHealthLoreListData()
  },
  // 去详情页
  toHealthDetail:function(e){
    let {id} = e.currentTarget.dataset.item
    wx.navigateTo({
      url:`/pages/health-detail/health-detail?id=${id}`
    })
  },
  // 搜索下拉框数据
  searchHealthLoreListData:function() {
    const api = require("../../api/health/health.service").HealthHttpService.prototype
    let params = {
      pageIndex:1,
      pageSize:100,
      search:this.data.searchText
    }
    api.getHealthLoreListData(params).then(res => {
      console.log('搜索数据列表',res)
      let str = this.data.searchText
      res.dataList.forEach(ele => {
        ele.title = ele.title.replace(new RegExp(str,'g'), `<span style="color:rgba(242, 10, 10, 0.68)">${this.data.searchText}</span>`)
      });
      this.setData({
        searchResList:res.dataList
      })
    })
  },
  // 初始获取
  getHealthLoreListData:function() {
    const api = require("../../api/health/health.service").HealthHttpService.prototype
    let params = {
      pageIndex:this.data.pageIndex,
      pageSize:this.data.pageSize,
      label:this.data.labelId
    }
    api.getHealthLoreListData(params).then(res => {
      console.log('数据列表',res)
      this.setData({
        loreList:res.dataList,
        noData:res.totalPage > this.data.pageIndex?false:true
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const api = require("../../api/health/health.service").HealthHttpService.prototype
    api.getTipsLabel().then(res => {
      console.log('标签',res)
      for(let item of res){
        item.isSelected = false
        this.data.tabs.push(item)
      }
      this.setData({
        tabs:this.data.tabs
      })
    })
    this.getHealthLoreListData()
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