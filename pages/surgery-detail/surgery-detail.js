// pages/surgery-detail/surgery-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userDetail:{
      avatar:'https://i0.hdslb.com/bfs/live/481f1ac31cf2a2767746118cfb403f1874fb6d82.jpg@320w_330h_1c_100q.webp',
      name:'张新',
      content:'主任医师   浙江省第一',
    },
    surgeryTitle:'肝脏移植手术详解',
    tabsList:[
      {
        isSelected:true,
        title:'手术知识',
        content:``
      },
      {
        isSelected:false,
        title:'术前注意',
        content:''
      },
      {
        isSelected:false,
        title:'术后护理',
        content:''
      },
    ],
    tabsIndex:0
  },

  changeTab:function (e) {
    let {index} = {...e.currentTarget.dataset}
    for (let item of this.data.tabsList) {
      item.isSelected = false
    }
    this.data.tabsList[index].isSelected = true
    this.setData({
      tabsList: this.data.tabsList,
      tabsIndex:index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const api = require("../../api/surgery/surgery.service").SurgeryHttpService.prototype
    console.log(options)
    this.setData({
      surId:options.id
    })

    api.getSurgeryDetailData(options.id).then(res => {
      console.log('获取手术全详情',res)
      this.data.tabsList[0].content = res.surgeryTips
      this.data.tabsList[1].content = res.afterSurgeryNursing
      this.data.tabsList[2].content = res.beforeSurgeryCareful
      let arr = [...this.data]
      this.setData({
        tabsList:this.data.tabsList
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