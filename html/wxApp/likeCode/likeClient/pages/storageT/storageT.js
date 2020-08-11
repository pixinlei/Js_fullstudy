// likeClient/pages/storageT/storageT.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc:"cloud://pixinlei-qnfrr.7069-pixinlei-qnfrr-1302804282/214850kro7g4e7egzbezor.png"
  },

  _handlerChoose:function() {
    // 1.弹出一个用户选择图片的对话框
    wx.chooseImage({
      success:(res) =>{
        // console.log(res);
        let path = res.tempFilePaths[0]

        // 云存储操作方法，上传文件
        wx.cloud.uploadFile({
          cloudPath:"sz.png",
          filePath: path,
          success:(res) =>{
            console.log("图片上传成功",res);
            this.setData({
              imageSrc:res.fileID
            })
          },
          fail:(err) =>{
            console.log("图片上传失败",err);
          }
        })
      },
    })
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