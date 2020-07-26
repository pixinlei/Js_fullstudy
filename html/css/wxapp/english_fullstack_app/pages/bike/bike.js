// pages/bike/bike.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myrandom:[],
    markers: [{
      iconPath: "./resources/point.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    },{
      iconPath: "./resources/light.png",
      id: 1,
      latitude: 23.098994,
      longitude: 113.324520,
      width: 50,
      height: 50
    },{
      iconPath: "./resources/light.png",
      id: 2,
      latitude: 23.099894,
      longitude: data.myrandom,
      width: 50,
      height: 50
    },{
      iconPath: "./resources/light.png",
      id: 3,
      latitude: 23.099894,
      longitude: 113.325520,
      width: 50,
      height: 50
    },{
      iconPath: "./resources/light.png",
      id: 4,
      latitude: 23.099894,
      longitude: 113.325520,
      width: 50,
      height: 50
    },{
      iconPath: "./resources/light.png",
      id: 5,
      latitude: 23.099894,
      longitude: 113.325520,
      width: 50,
      height: 50
    },{
      iconPath: "./resources/light.png",
      id: 6,
      latitude: 23.099894,
      longitude: 113.325520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for(let i=0;i<10;i++){

    }
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

  },

// 产生随机值
  // makerandom:function(){
  //   for(let i=0;i<5;i++){
  //     myrandom[i] = '113.32' +(Math.random).toFixed(4)
  //   }
  // }
  // makerandom()
})