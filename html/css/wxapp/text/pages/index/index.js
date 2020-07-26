//index.js
//获取应用实例
const app = getApp()

Page({
  //为页面提供数据的
  //data就是界面和逻辑之间的桥梁
  data:{
    message:'hello word',
    person:{
      name:'zhhangsan',
      age:18,
    },
    viewClassName:'hello',
    todos:[
      {name:'JavaScript',completed: false},
      {name:'HTML',completed: true},
      {name:'CSS',completed: false},
    ],
    buttonTapHandle:function(e){
      console.log(111111111111111111111);
      
    }
  }
})
