//app.js
App({
  onLaunch: function () {
    // 初始化操作
    wx.cloud.init({
      env:"pixinlei-qnfrr",
      traceUser:true
    })
  },
  globalData: {
    userInfo: null
  }
})