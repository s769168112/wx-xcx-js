// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchRes:[
      {
        id:1,
        label:'肝囊肿'
      },
      {
        id:2,
        label:'脂肪肝'
      },
      {
        id:3,
        label:'消化不良是肝的问题？'
      },
      {
        id:4,
        label:'肝硬化'
      },
      {
        id:5,
        label:'酒精肝'
      },
    ],
    searchTransition:false,
    searchView:null,
  },

  search:function(){
    this.data.searchView = wx.createSelectorQuery()
    this.data.searchView.select('.search-view').fields({size:true},res => {
      console.log('res')
    })
    console.log('aa')
    
    // this.data.searchView.exec(function(){
    //   console.log('aaa')
    // })
    // console.log('节点',this.data.searchView)
    // this.setData({
    //   searchRes: this.data.searchRes.splice(0,this.data.searchRes.length - 1),
    // })
    // search-view
    // console.log('this.data.searchView ',this.data.searchView)
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