// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchRes: [
      {
        id: 1,
        label: '肝囊肿',
        opacity:1,
      },
      {
        id: 2,
        label: '脂肪肝',
        opacity:1,
      },
      {
        id: 3,
        label: '消化不良是肝的问题？',
        opacity:1,
      },
      {
        id: 4,
        label: '肝硬化',
        opacity:1,
      },
      {
        id: 5,
        label: '酒精肝',
        opacity:1,
      },
    ],
    res: [],
    searchTransition: false,
    searchView: 0,
    boxHeight: 0,

    page:1,
  },

  searchChange:function(e){
    const value = e.detail.value
    const api = require("../../api/other/other.service").OtherHttpService.prototype
    // api.getSurgeryListData().then(res => {
    //   console.log('获取手术全解',res)
    //   this.setData({
    //     surgeryList:res.dataList
    //   })
    // })
    console.log(e)
    let params = {
      pageIndex:this.data.page,
      search:value
    }
    api.getSearchData(params).then(res => {
      console.log('搜索结果',res)
    })
  },

  search: function () {
    this.data.searchView++
    if(this.data.searchView <= this.data.searchRes.length) {
      this.setData({
        res: [...this.data.searchRes].splice(0, this.data.searchView),
        boxHeight: (this.data.res.length + 1) * 60
      })
    }
  },
  del:function () {
    this.data.searchView --
    this.setData({
      res: [...this.data.searchRes].splice(0, this.data.searchView),
      boxHeight: (this.data.res.length - 1) * 60
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