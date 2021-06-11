// pages/health-exam/health-exam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openExam: false, // 打开量表筛选
    filterList: [
      {
        id: 1,
        label: '症状自测',
        selected: true,
        children: [
          {
            id: 11,
            label: '全部',
            selected: true,
          },
          {
            id: 12,
            label: '肾内科',
            selected: false,
          },
        ]
      },
      {
        id: 2,
        label: '疾病量表',
        selected: false,
        children: [
          {
            id: 21,
            label: '社会功能与适应能量量表',
            selected: false,
          },
          {
            id: 22,
            label: '社会功能与适应能量量表',
            selected: false,
          }
        ]
      }
    ],
    examList: [], //量表测试列表
    maskShow: false,
    tagList: '', // 量表类型标签
    curTagDetail: {
      oneTag:'',
      oneTagIndex:'',
      twoTag:'',
      twoTagIndex:''
    },
  },

  // 切换选择
  chooseTag(e) {
    let { item, index } = e.currentTarget.dataset
    let curTagDetail = {
      oneTag: item,
      oneTagIndex: index,
      twoTag: item.lowLabel[0],
      twoTagIndex: 0,
    }
    this.data.tagList.forEach(ele => {
      ele.selected = false
      if (ele.id == item.id) {
        ele.selected = true
        ele.lowLabel.forEach(eI => {
          eI.selected = false
        })
        ele.lowLabel[0].selected = true
      }
    })
    this.setData({
      curTagDetail: curTagDetail,
      tagList: this.data.tagList
    })
  },
  // 点击二级tag
  chooseTwoTag(e) {
    let { item, index } = e.currentTarget.dataset
    let curTagDetail = {
      twoTag: item,
      twoTagIndex: index,
    }
    curTagDetail = Object.assign(this.data.curTagDetail, curTagDetail)
    this.data.tagList[this.data.curTagDetail.oneTagIndex].lowLabel.forEach(ele => {
      ele.selected = false
      if (item.id == ele.id) {
        ele.selected = true
      }
    })
    console.log('奇怪',curTagDetail,this.data.tagList)
    this.setData({
      curTagDetail: curTagDetail,
      tagList: this.data.tagList
    })
  },
  // 确认筛选
  confirmTag(){
    this.getExamList()
    this.setData({
      openExam:false,
      maskShow:false
    })
  },
  // 重置
  resetTag(){
    this.getDetailListTag()
  },
  // 打开筛选下拉框
  openFilter: function () {
    if (this.data.maskShow) {
      setTimeout(() => {
        this.setData({
          maskShow: !this.data.maskShow
        })
      }, 300);
    } else {
      this.setData({
        maskShow: !this.data.maskShow
      })
    }
    this.setData({
      openExam: this.data.openExam ? false : true
    })
  },
  // 获取量表测试
  getExamList: function () {
    const api = require("../../api/scale/scale.service").ScaleHttpService.prototype
    let curTag = this.data.curTagDetail
    console.log('curTag',curTag)
    let params = {
      oneLevelLabel: curTag.oneTag.id != 0?curTag.oneTag.id:'',
      twoLevelLabel: curTag.twoTag.id != 0?curTag.twoTag.id:'',
      pageIndex: 1,
      pageSize: 10
    }
    api.getScaleList(params).then(res => {
      console.log('获取量表', res)
      this.setData({
        examList: res.dataList
      })
    })
  },
  // 获取量表标签
  getDetailListTag() {
    const api = require("../../api/scale/scale.service").ScaleHttpService.prototype
    api.getScaleTagList().then(res => {
      console.log('获取一级标签', res)
      res.forEach(item => {
        let obj = {
          id: 0,
          name: '全部',
          supId: item.lowLabel[0] ? item.lowLabel[0].supId : '',
        }
        item.selected = false
        item.lowLabel.unshift(obj)
        item.lowLabel.forEach(ele => {
          ele.selected = false
        })
      })
      let curTagDetail = {
        oneTag: res[0],
        oneTagIndex: 0,
        twoTag: res[0].lowLabel[0],
        twoTagIndex: 0,
      }
      res[0].selected = true
      res[0].lowLabel[0].selected = true
      this.setData({
        tagList: res,
        curTagDetail: curTagDetail
      })
    })
  },
  // 去量表测评介绍页
  toScaleDetail: function (e) {
    let { item } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/scale-introduct/scale-introduct?id=${item.id}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetailListTag()
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