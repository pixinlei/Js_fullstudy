// miniprogram/pages/group/group.js
const db = wx.cloud.database().collection("group")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupData:[]
  },
  // getData() {
  //   wx.cloud.callFunction({
  //     name:'getGroup',
  //     success (res) {
  //       console.log("成功",res);
  //     },
  //     fail (err){
  //       console.log("失败",err);
  //     }
  //   })
  // },
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
    let that = this
    wx.cloud.callFunction({
      name:'getGroup',
      success (res) {
        console.log("成功",res);
        that.setData({
          groupData:res.result
        })
        // console.log(that.data.groupData);
      },
      fail (err){
        console.log("失败",err);
      }
    })
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