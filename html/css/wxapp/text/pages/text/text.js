// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //文本框数据模型
    input:'',
    //任务清单数据模型
    todos:[
      {name:'learning html', completed:false},
      {name:'learning css', completed:true},
      {name:'learning jscript', completed:false},
    ],
    leftCount:2,
    allCompleted:false
  },
  inputChangeHandle(e){
    this.setData({
      input:e.detail.value
    })
  },

  addTodoHandle:function(){
    if(!this.data.input) return
    let todos = this.data.todos
    todos.push({
      name:this.data.input,
      completed:false
    })
    this.setData({
      todos:todos,
      input:'',
      leftCount:++this.data.leftCount
    })
  },

  toggleTodoHandle(e){
    let item = this.data.todos[e.currentTarget.dataset.index]
    item.completed = !item.completed
    let leftCount = this.data.leftCount + (item.completed?-1:1)
    this.setData({
      todos:this.data.todos,
      leftCount:leftCount
    })
  },

  removeTodoHandle(e){
    let todos = this.data.todos
    let item = todos.splice(e.currentTarget.dataset.index,1)[0]
    let leftCount = this.data.leftCount - (item.completed?-1:1)
    this.setData({
      todos:todos,
      leftCount:leftCount
    })
  },

  ToggleAllHandle(){
    let todos = this.data.todos
    this.data.allCompleted = !this.data.allCompleted
    let that = this
    todos.forEach(function (item){
      item.completed = that.data.allCompleted
    })
    this.setData({
      todos:todos
    })
  
  },

  ClearHandle(){
    // let todos = []
    // this.data.todos.forEach(item=>{
    //   if(!item.completed){
    //     todos.push(item)
    //   }
    // })
    let todos = this.data.todos.filter(item=>{
      return !item.completed
    })
    this.setData({
      todos:todos
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