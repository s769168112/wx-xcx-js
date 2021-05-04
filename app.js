// app.js
App({
  onLaunch() {
    console.log('奇怪')
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    token:'Authorization_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiZGF0ZSI6MTYxODQ3NjMwMzk4MywiaWQiOjEsImlhdCI6MTYxODQ3NjMwMywiZXhwIjo5NzExMDE5NjcxNTM0MywibmJmIjoxNjE4NDc2MzAzfQ.QbGwtXiQN5CB2MFaPWqiwtF0_0AAKf9X-c0sSq0Wkro'
  },
})
