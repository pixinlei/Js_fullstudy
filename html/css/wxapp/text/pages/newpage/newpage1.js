Page({
  data: {
    logs: [],
    message:'initial',
    username:'admin',
    password:'123',
    show:true,
  },
  // innerHandle:function(){
  //   console.log(1111111111111);
  // },
  // outterHandle:function(){
  //   console.log(222222222222222222);
  // },
  // buttonTapHandle:function(){

  // },
  // inputHandle:function(e){
  //   // this.data.message = e.detail.value
  //   this.setData({
  //     message:e.detail.value
  //   })
  // },
  //用于处理登陆按钮的点击事件
  // loginHandle:function(e){
  //   //TODO:完成逻辑
  //   //1.先需要知道用户输入了什么
  //   //2.根据用户输入的值判断
  //   //3.根据判断的结果做出响应
  //   // console.log(123);
  //   // console.log(this.data);
  //   console.log(e);
  // },
  // usernameChangeHandle:function(e){
  //   this.setData({
  //     username:e.detail.value
  //   })
  // },
  // passwordChangeHandle:function(e){
  //   this.setData({
  //     password:e.detail.value
  //   })
  // },
  toggle:function(){
    this.setData({
      show:!this.data.show
    })
  }
})
