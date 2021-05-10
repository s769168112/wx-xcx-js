// pages/surgery-detail/surgery-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageResData:{},
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
    tabsIndex:0,
    playStatus:false, // 是否在播放中
  },
  userFavorites: function () {
    const api = require("../../api/user/user.service").UserHttpService.prototype
    let params = {
      type: 1,
      id: this.data.pageResData.id
    }
    this.data.pageResData.isCollect = !this.data.pageResData.isCollect
    this.setData({
      pageResData:this.data.pageResData
    })
    if(this.data.pageResData.isCollect){
      api.userFavoritesCancel(params).then(res => {
        console.log('收藏结果', res)
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
      })
    } else {
      api.userFavorites(params).then(res => {
        console.log('收藏结果', res)
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 2000
        })
      })
    }
  },
  userShare: function () {
    const api = require("../../api/user/user.service").UserHttpService.prototype
    let params = {
      type: 1,
      id: this.data.pageResData.id
    }
    api.userShare(params).then(res => {
      console.log('分享结果', res)
      wx.showToast({
        title: res.data.msg,
        icon: 'none',
        duration: 2000
      })
    })
  },
  // 切换tab
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

  toPlayVideo:function(){
    let video = wx.createVideoContext('video')
    if(this.data.playStatus){
      video.pause()
    } else {
      video.play()
    }
    
    this.setData({
      playStatus:this.data.playStatus?false:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const api = require("../../api/surgery/surgery.service").SurgeryHttpService.prototype
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
        tabsList:this.data.tabsList,
        pageResData:res
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