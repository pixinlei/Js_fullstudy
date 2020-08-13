// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = "pixinlei-qnfrr"

cloud.init()
const db = cloud.database({env})

// 云函数入口函数
exports.main = async (event, context) => {
  const openid = cloud.getWXContext().OPENID
  const groupList =  await db.collection('user-group')
  .where({
    userId:  openid
  })
  .get()
  const result = []
  for(let oneitem of groupList.data) {
    let groupitem = await db.collection('group')
    .where({
      _id : oneitem.groupId,
      deleted: false
    })
    .get()
    if(groupitem.data.length > 0) {
      result.push(groupitem.data[0])
    }
  }
  return result.sort((a, b) =>{
    new Date(b.createTime) - new Date(a.createTime)
  })
}