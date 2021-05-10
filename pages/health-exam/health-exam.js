// pages/health-exam/health-exam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openExam:false, // 打开量表筛选
    filterList:[
      {
        id:1,
        label:'症状自测',
        selected:true,
        children:[
          {
            id:11,
            label:'全部',
            selected:true,
          },
          {
            id:12,
            label:'肾内科',
            selected:false,
          },
        ]
      },
      {
        id:2,
        label:'疾病量表',
        selected:false,
        children:[
          {
            id:21,
            label:'社会功能与适应能量量表',
            selected:false,
          },
          {
            id:22,
            label:'社会功能与适应能量量表',
            selected:false,
          }
        ]
      }
    ],
    examList:[], //量表测试列表
    maskShow:false,
  },
  // 打开筛选下拉框
  openFilter:function(){
    if(this.data.maskShow) {
      setTimeout(() => {
        this.setData({
          maskShow:!this.data.maskShow
        })
      }, 300);
    } else {
      this.setData({
        maskShow:!this.data.maskShow
      })
    }
    this.setData({
      openExam:this.data.openExam?false:true
    })
  },
  // 获取量表测试
  getExamList:function(){
    let list = [
      {
        cover:'../../assets/image/user.png',
        title:'抑郁自评量表(SDS)',
        content:'抑郁自评量表是一种测量抑郁的工具',
      },
      {
        cover:'../../assets/image/user.png',
        title:'抑郁自评量表(SDS)',
        content:'抑郁自评量表是一种测量抑郁的工具',
      },
    ]
    this.setData({
      examList:list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getExamList()
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