// miniprogram/pages/index3/index3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:''
  },
  uploadFile () {
    let that = this
    // console.log("点击成功");
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        const tempFilePaths = res.tempFilePaths
        console.log('选择成功',tempFilePaths);
        // tempFilePath可以作为img标签的src属性显示图片
        that.uploadimg(res.tempFilePaths[0])
      }
    })
  },
  uploadimg(fileUrl) {
    var timestamp = Date.parse(new Date());
    wx.cloud.uploadFile({
      cloudPath: `${timestamp}.png`, // 上传至云端的路径
      filePath: fileUrl, // 小程序临时文件路径
      success: res => {
        // 返回文件 ID
        console.log(res.fileID)
        this.setData({
          imgUrl:res.fileID
        })
      },
      fail: console.error
    })
  },
  // 上传视频
  uploadVideo () {
    wx.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration: 60000,
      camera: 'back',
      success(res) {
        console.log("选择视频成功",res.tempFilePath)
        // wx.cloud.uploadFile({
        //   cloudPath: 'video.mp4', // 上传至云端的路径
        //   filePath: 'res.tempFilePath[0]', // 小程序临时文件路径
        //   success: res => {
        //     // 返回文件 ID
        //     console.log("视频上传成功",res)
        //   },
        //   fail: console.error
        // })
      }
    })
  },
  // 上传Excel文件
  uploadExcel () {
    wx.chooseMessageFile({
      count: 10,
      type: 'image',
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFiles
        wx.cloud.uploadFile({
          cloudPath: `.`, // 上传至云端的路径
          filePath: fileUrl, // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log(res.fileID)
            this.setData({
              imgUrl:res.fileID
            })
          },
          fail: console.error
        })
      }
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