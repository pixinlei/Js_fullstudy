//app.js
App({
  onLaunch: function (options) {
    const self = this
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'pixinlei-qnfrr',
        traceUser: true,
      })
    }
    this.globalData.shareParam = options.query
    // 查看是否授权
    wx.getSetting({
      success: (result)=>{
        //已经授权
        if(result.authSetting['scope.userInfo']){
          wx.getUserInfo({
            // withCredentials: 'false',
            // lang: 'zh_CN',
            // timeout:10000,
            success: (result)=>{
              self.globalData.UserInfo = result.UserInfo
              wx.cloud.callFunction({
                name:'createUser',
                data:{
                  avatarUrl:infoRes.UserInfo.avatarUrl,
                  name:'',
                  nickName:infoRes.UserInfo.nickName,
                  sex:infoRes.UserInfo.gender
                }
              })
            },
            fail: ()=>{},
            complete: ()=>{}
          });
        } 
      },
      fail: ()=>{},
      complete: ()=>{}
    });


    this.globalData = {}
  }
})
