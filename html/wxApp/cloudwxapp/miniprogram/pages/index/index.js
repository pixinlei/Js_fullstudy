const db = wx.cloud.database().collection("list")
let name = "",
    age = "",
    id = ""


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 添加数据
  addData() {
    db.add({
      data:{
        name:name,
        age:age
      },
      success (res) {
        console.log("添加成功",res);
      },
      fail (err) {
        console.log("添加失败",err);
      }
    })
  },

  // 查询数据
  getData () {
    db.get({
      success(res){
        console.log("查询数据成功",res);
      }
    })
  },
  // 获取用户输入的name
  addName (e) {
    // console.log(e.detail.value);
    name = e.detail.value
  },
  // 获取用户输入的age
  addAge (e) {
    // console.log(e.detail.value);
    age = e.detail.value
  },
  delDataInput (e) {
    // console.log("要删除的id",e.detail.value);
    id = e.detail.value
  },
  // 删除数据
  delData () {
    db.doc(id).remove({
      success (res) {
        console.log("删除成功",res);
      },
      fail (err) {
        console.log("删除失败",err);
      }
    })
  },
  // 要更新的id
  upDataInput (e) {
    id = e.detail.value
  },
  // 要更新的年龄
  udpAge (e) {
    age = e.detail.value
  },
  // 修改数据
  udpData () {
    db.doc(id).update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        age:age
      },
      success: function(res) {
        console.log("更新成功",res)
      },
      fail: function(res) {
        console.log("更新失败",res)
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