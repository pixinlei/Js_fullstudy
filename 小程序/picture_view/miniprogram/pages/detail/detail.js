// miniprogram/pages/detail/index.js
var app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    href: '',
    title: '',
    pictureList: []
  },
  getList() {
    let that = this
    wx.request({
      url: `${app.globalData.preUrl}/picture/picture`,
      data: {
        href: that.data.href
      },
      success: (result)=>{
        let title = result.data.data[0].title
        let img = result.data.data[0].img.split(',')
        that.setData({
         title,
         pictureList: img 
        })
        console.log(that.data.pictureList);
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    await this.setData({
      href: options.href
    })
    await this.getList()
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