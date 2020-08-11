Page({
  data: {
    product_list:[]
  },
 onLoad:function() {
  const db = wx.cloud.database()
  const c = db.collection("products")
  c.get().then(res=>{
    console.log(res);
  })




   wx.request({
     url:'http://demo.itlike.com/web/xlmc/api/homeApi?itlike=48385249143975816318',
     data:{
       'itlike':'48385249143975816318'
     },
     method:'get',
     success:(res) => {
       console.log("网络请求成功",res.data.data.list[3].product_list);
       this.setData({
        product_list:res.data.data.list[3].product_list
       })
     },
     fail:function (err) {
      console.log("网络请求失败",err);
     }
   })
 } 
 
})
