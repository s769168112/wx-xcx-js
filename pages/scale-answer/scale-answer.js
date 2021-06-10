// pages/scale-answer/scale-answer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageRes: '',
    id: '',
    curIndex: 0, // 当前题目
    scaleIndex: 0, // 浏览过的题目
    answerIdList: [],
    error: ''
  },
  // 提交量表
  commitScale() {
    const api = require("../../api/scale/scale.service").ScaleHttpService.prototype
    let params = {
      answerId:this.data.pageRes.answerId
    }
    api.commitScale(params).then(res => {
      wx.redirectTo({
        url:`/pages/scale-result/scale-result?answerId=${this.data.pageRes.answerId}`
      })
    })
  },
  // 提交每题答案
  commitAnswer() {
    const api = require("../../api/scale/scale.service").ScaleHttpService.prototype

    let params = {
      answerId: this.data.pageRes.answerId,
      subjectId: this.data.pageRes.subjectList[this.data.curIndex].id,
      optionIds: this.data.answerIdList[this.data.curIndex]
    }
    // return console.log(params)
    try {
      api.commitAnswer(params).then(res => {
        console.log('提交题目！', res)
        if (res.data.code != 0) {
          this.setData({
            error: '网络错误，请重试'
          })
          if (this.data.pageRes.subjectList.length - 1 != this.data.curIndex) {
            this.preScale()
          }
        }
      })
    } catch (error) {

      this.preScale()
    }

  },

  // 上一题
  preScale() {
    if (this.data.curIndex == 0) return wx.navigateBack();
    this.setData({
      curIndex: this.data.curIndex - 1,
    })
  },
  // 点击选项
  addAnswer: function (e) {
    console.log(this.data.answerIdList)
    let { item, index } = e.currentTarget.dataset

    let sIndex = this.data.scaleIndex
    let cIndex = this.data.curIndex
    let pagedata = this.data.pageRes
    let ansList = this.data.answerIdList


    if (ansList[cIndex]) {
      if (item.type == 1) { //单选
        ansList[cIndex] = [item.id]
      } else {
        let i = ansList[cIndex].indexOf(item.id)
        i == -1 ? ansList[cIndex].push(item.id) : ansList[cIndex].splice(i, 1)
      }
    } else {
      ansList[cIndex] = []
      ansList[cIndex].push(item.id)
    }

    // 判断单双选
    if (item.type == 1) {
      // 刷新数据
      // 单选,循环改变状态
      for (let ele of pagedata.subjectList[cIndex].optionList) {
        ele.isSelected = false
      }
      item.isSelected = true
      pagedata.subjectList[cIndex].optionList[index] = item
      this.setData({
        pageRes: pagedata,
        answerIdList: ansList
      })
      // 提交每题答案
      this.commitAnswer()
      // 最后一题
      if (cIndex == pagedata.subjectList.length - 1) {
        this.setData({
          scaleIndex: sIndex > cIndex ? sIndex : sIndex + 1
        })
        return console.log('到底啦~')
      }
      this.nextQuest()
    } else {
      // 刷新数据
      item.isSelected = item.isSelected ? false : true
      pagedata.subjectList[cIndex].optionList[index] = item
      this.setData({
        pageRes: pagedata,
        answerIdList: ansList
      })
      // 提交每题答案
      // this.commitAnswer()
    }
  },
  nextQuest() {
    let sIndex = this.data.scaleIndex
    let cIndex = this.data.curIndex
    if(this.data.pageRes.subjectList[cIndex].type == 2) {
      // 提交每题答案
      this.commitAnswer()
    }
    this.setData({
      curIndex: cIndex + 1,
      scaleIndex: sIndex > cIndex ? sIndex : sIndex + 1
    })
    
  },
  // 获取量表题目
  getScaleTitle: function (options) {
    const api = require("../../api/scale/scale.service").ScaleHttpService.prototype
    let params = {
      id: options.id || 29,
      answerId: options.answerId || ''
    }
    api.getScaleTitle(params).then(res => {
      console.log('量表题目', res)
      this.setData({
        pageRes: res,
        id: options.id
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getScaleTitle(options)
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