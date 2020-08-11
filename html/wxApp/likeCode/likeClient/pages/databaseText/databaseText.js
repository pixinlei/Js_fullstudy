// likeClient/pages/databaseText/databaseText.js
Page({
  _handlerSubmit:function(evt) {
    // console.log(evt);
    // 1. 获取到账号和密码数据
    let account = evt.detail.value.account
    let password = evt.detail.value.password
    // console.log(account,password);

    // 2. 存储到云数据库当中
    // 2.1先获取到数据库的引用
    const db = wx.cloud.database()

    // 2.2获取集合的引用
    const accountCollection = db.collection("t_account")


    if(evt.detail.target.id === "login"){
      console.log("登陆");
      accountCollection.where({
        account:account,
        password:password
      }).get().then(res =>{
        console.log("查询成功",res);
      }).catch(err=>{
        console.log("查询失败",err);
      })
    }else{
  

  
      // 2.3通过集合，往集合内部添加数据
      accountCollection.add({
        data:{
          account,
          password
        }
      })
    }
    // 1. 获取到账号和密码数据
  
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