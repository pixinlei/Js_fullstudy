//index.js
const db = wx.cloud.database()
const projects = db.collection('projects')





const app = getApp()

Page({
  data: {
    title:'',
    images:[]
  },
  changeTitle(event){
    console.log(event.target.detail);
    this.setData({
      title:event.detail
    })
  },
  upload() {
    // 回调函数
    wx.chooseImage({
      count: 9,
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success: (res)=>{
        // 1. 本地地址
        // 2. 云端
        // 3. this.data.images[]
        const images = []
        let idx = 0
        const tempFilePaths = res.tempFilePaths
        for(let filePath of tempFilePaths){
          let tmpFileName = (+ new Date() + Math.floor(Math.random() * 1000)).toString() + '.png'
          wx.cloud.uploadFile({
            cloudPath:tmpFileName,
            filePath:filePath,
            fail:error =>{
              idx++
            },
            success:res => {
              idx++
              console.log('图片上传完毕');
              images.push(res.fileID)
              if(idx == tempFilePaths.length) {
                this.setData({
                  images
                })
              }
            }
          })
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  createProject() {
    // promise 异步 存数据，存文件
    // success  回调函数  then  promise 两种都可以
    projects.add({
      data:{
        title:this.data.title,
        images:this.data.images
      }
    })
    .then(res => {
      wx.showToast({
        title:'发布项目成功',
        icon:'success'
      })
    })
    .catch(err =>{
      wx.showToast({
        title:'发布项目失败',
        icon:"error"
      })
    })
  }
})
