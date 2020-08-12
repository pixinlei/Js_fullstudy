// 云函数入口文件
const cloud = require('wx-server-sdk')

  //  云开发环境初始化
  wx.init({
    env:"pixinlei-qnfrr"
  })

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database.collection("user").get()
}