// miniprogram/pages/index2/index2.js
Page({
  // 第一个云函数
  add () {
    wx.cloud.callFunction({
      name:"add",
      data:{
        a:1,
        b:2
      },
      success(res) {
        console.log("请求成功",res);
      },
      fail (err) {
        console.log("请求失败",err);
      }
    })
  },
  getopenid () {
    wx.cloud.callFunction({
      name:"getopenid",
      success (res) {
        console.log("获取openID成功",res);
      },
      fail (err)  {
        console.log("获取openID失败",err);
      }
    })
  },
  // 数据库API获取数据
  shujuku () {
    wx.cloud.database().collection("user").get({
      success (res) {
        console.log("数据库获取成功",res);
      },
      fail (res) {
        console.log("数据库获取失败",res);
      }
    })
  },
  // 云函数获取数据
  yunhanshu () {
    wx.cloud.callFunction({
      name:"getshuju",
      success (res) {
        console.log("云函数获取成功",res);
      },
      fail (res) {
        console.log("云函数获取失败",res);
      }    
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

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