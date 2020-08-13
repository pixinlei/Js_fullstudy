import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGroupModal:false,
    groupname:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showNewGroupModal () {
    this.setData({
      newGroupModal:true
    })
  },
  onGroupNameChange (e) {
    this.setData({
      groupname:e.detail
    })
  },
  closeDialog () {
    this.setData({
      newGroupModal:false
    })
  },
  createGroup () {
    let self = this
    if(this.data.groupname === '') {
      Notify({
        message: '起个名字吧',
        duration: 1500,
        selector: '#van-notify',
        color: '#fff',
        background:'pink'
      });
      this.selectComponent("#new-group-modal").stopLoading()
      return
    }
    // 调用云函数
    wx.cloud.callFunction({
      name:'createGroup',
      data:{
        groupname:this.data.groupname
      },
      success (res) {
        console.log("调用成功",res);
        self.setData({
          groupname:'',
          newGroupModal:false,
        })
        Notify({
          message: '新建成功',
          duration: 1500,
          selector: '#van-notify',
          color: '#fff',
          background:'#28a745'
        });    
        setTimeout(() =>{
          wx.switchTab({
            url: '/pages/group/group',
          });
        },1500)    
      },
      fail (err) {
        console.log("调用失败",err);
      }
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