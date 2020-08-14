// miniprogram/pages/index/index.js
const app = getApp()
const github = require('../../api/github.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{
      trends:[]
    }
  },
  onSearch: function (value) {
    console.log(value,"++++++++++++");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.startPullDownRefresh({})
  },
  onPullDownRefresh: function () {
    this.reloadData()
  },
  reloadData: function () {
    // 数据 wx.request  collection.get
    // 到api模块去做
    github.trendings().then(data => {
      
      console.log(data);
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