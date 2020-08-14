// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"pixinlei-eiiwy"
})

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database.collection("userList").get({
    success (res) {
      console.log("请求成功",res);
      return res
    },
    fail (res) {
      console.log("请求失败",res);
      return res
    }
  })
}