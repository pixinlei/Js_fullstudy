// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts:[],//商品
    totalPrice:0,//总价
    isSelected:true,//是否被选中
    selectAllStatus:true
  },
//全选按钮
  selectAll(){
    //來回改变数据源中的selectAllStatus
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    let carts = this.data.carts
    //把carts数组里面的每一条数据里面的selected改成false
    for(let i=0;i<carts.length;i++){
      carts[i].selected =  selectAllStatus
    }
    this.setData({
      selectAllStatus:selectAllStatus,
      carts:carts
    })
    this.getTotalPrice()
  },
//单选按钮
  selectList(e){
    //让当前这条数据里面的selected值取反
    let index = e.currentTarget.dataset.index
    let selected = `carts[${index}].selected`

    this.setData({
      [selected]:!this.data.carts[index].selected
    })
    this.getTotalPrice()
    //但凡carts数组中存在一条数据里面的selected不为true，全选按钮就不能勾选
    let carts = this.data.carts
    for(let i=0;i<carts.length;i++){
      if(!carts[i].selected){
        this.setData({
          selectAllStatus:false
        })
        break
      }else{
        this.setData({
          selectAllStatus:true
        })       
      }
    }
  },

  //计算总价格
  getTotalPrice(){
    //拿到carts数组中的每一条selected为true的数据，用数量乘单价
    let carts = this.data.carts
    let total = 0
    for(let i=0;i<carts.length;i++){
      if(carts[i].selected){
        total += carts[i].num * carts[i].price
      }
      this.setData({
        totalPrice:total.toFixed(2)
      })
    }
  },
  //减少数量按钮
  myreduce(e){
    let carts = this.data.carts
    let index = e.currentTarget.dataset.index
    let mynum = `carts[${index}].num`
    // console.log(this.data.carts[index].num);
    if(this.data.carts[index].num>0){
      this.data.carts[index].num--
      // console.log(this.data.carts[index].num);
      this.setData({
        [mynum]:this.data.carts[index].num
      })
      this.getTotalPrice()
    }
  },

  //增加数量按钮
  myadd(e){
    let index = e.currentTarget.dataset.index
    let mynum = `carts[${index}].num`
    // console.log(this.data.carts[index].num);
    if(this.data.carts[index].num>0){
      this.data.carts[index].num++
      // console.log(this.data.carts[index].num);
      this.setData({
        [mynum]:this.data.carts[index].num
      })
      this.getTotalPrice()
    }    
  },

  //删除按钮
  mydelect(e){
    let index = e.currentTarget.dataset.index
    let carts = this.data.carts
    carts[index].num = 0
    this.getTotalPrice() 
    carts.splice(index,1)
    this.setData({
      carts:carts
    })
  },

  onLoad: function (options) {
    console.log('onload')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onshow')
    setTimeout(()=>{
      this.setData({
        carts:[
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true }
        ],
      })
      this.getTotalPrice()
    },1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onhide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onunload')
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