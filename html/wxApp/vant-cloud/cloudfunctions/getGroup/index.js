// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = "shenglian-ded133"
cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID
  let groupList = await db.collection('user-group').where({
    userId: openId
  }).get()
  let returnResult = [];
  for (let i = 0; i < groupList.data.length; i++) {
    const oneGroup = await db.collection('group').where({
      _id: groupList.data[i].groupId,
      deleted: false
    }).get()
    if (oneGroup.data.length > 0) {
      returnResult.push(oneGroup.data[0])
    }
  }
  return returnResult
}
