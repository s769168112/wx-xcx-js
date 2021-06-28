// pages/user-article/user-article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userArticleList: [],
    pageIndex: 1,
    pageSize: 10,
    noData: false,
    status: 0, // 开启删除状态
    selectedList: [],
  },
  openDetele() {
    this.setData({
      status: 1
    })
  },
  // 删除所选
  deleted() {
    if (!this.data.selectedList.length) {
      this.data.userArticleList.forEach(ele => {
        ele.is_selected = false
      })
      return this.setData({
        status: 0,
        selectedList: [],
        userArticleList: this.data.userArticleList
      })
    } else {
      const api = require("../../api/user/user.service").UserHttpService.prototype
      this.data.selectedList.forEach(ele => {
        let params = {
          type: 0,
          id: ele.id
        }
        api.userFavoritesCancel(params).then(res => {
          console.log('收藏结果', res)
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
          this.getUserArticleListData()
          this.setData({
            status: 0
          })
        })
      })
    }
  },
  selectedAll() {
    console.log('全选')
    this.data.selectedList = []
    this.data.userArticleList.forEach(ele => {
      ele.is_selected = true
      this.data.selectedList.push(ele)
    })
    this.setData({
      selectedList: this.data.selectedList,
      userArticleList: this.data.userArticleList
    })
  },
  // 滚动到底部触发
  scrollBtm: function () {
    if (this.data.noData) return false;
    this.setData({
      pageIndex: (pageIndex + 1)
    })
    this.getUserArticleListData()
  },

  // 去文章详情页
  toArticleDetail: function (e) {
    let { item, index } = e.currentTarget.dataset
    console.log(e.currentTarget.dataset)
    if (this.data.status == 1) {
      if (!item.is_selected) {
        this.data.selectedList.push(item)
      } else {
        this.data.selectedList.splice(index, 1)
      }
      this.data.userArticleList[index].is_selected = !item.is_selected
      this.setData({
        userArticleList: this.data.userArticleList,
        selectedList: this.data.selectedList
      })

    } else {
      wx.navigateTo({
        url: `/pages/health-detail/health-detail?id=${item.id}`
      })
    }
  },

  getUserArticleListData: function () {
    const api = require("../../api/user/user.service").UserHttpService.prototype
    let params = {
      pageIndex: this.data.pageIndex,
      pageSize: this.data.pageSize,
    }
    api.getUserArticleListData(params).then(res => {
      console.log('获取收藏的文章列表', res)
      this.setData({
        userArticleList: res.dataList,
        noData: res.totalPage > this.data.pageIndex ? false : true
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserArticleListData()
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