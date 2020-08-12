// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require("request-promise")

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let course_id = event.course_id
  // 1.确定接口信息
  // 2.借助模块，向指定接口发送网络请求，获取数据，返回出去
  let options = {
    uri:'https://ke.qq.com/cgi-bin/comment_new/course_comment_list?cid=2770807&count=10&page=0&filter_rating=0&bkn=&r=0.5773596762529332',
    qs:{
      count:10,
      cid:course_id,
      page:0,
    },
    headers: {
      "referer": `https://ke.qq.com/course/${course_id}?taid=10143437150635895`
    },
    json:true
  };
  let result =await rp(options).then(res=>{
    return res
  }).catch(err=>{
    console.error(err);
  })

  return result
}