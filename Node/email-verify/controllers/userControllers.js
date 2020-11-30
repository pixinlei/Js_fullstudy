const { withCtx } = require('vue')
const Jcommon = require('../tools/Jcommon')
const Jverify = require('../tools/Jverify')
const user_regist =async function() {
  const respondData = {
    status: 200,
    data: {},
    error: '',
    msg: ''
  }
  // 检查前端必传的参数是否传了
  const is_available = Jcommon.check_key_words(['user_email', 'user_password', 'user_name'],this, 'POST')
  if(is_available === false) return
  const user_email = this.body.user_email
  const user_password = this.body.user_password
  const user_name = this.body.user_name
  const md5 = require('')
  // console.log(user_email,user_password,user_name);
  // 验证邮箱是否正确
  const is_email = Jverify.verify_email(user_email)
  if(!is_email) {
    respondData.status = 10000,
    respondData.error = '邮箱不符合规范'
    return ctx.body = respondData
  }

  // 验证密码是否正确
  const is_password_str = Jverify.verify_password(user_password)
  const is_enable_length = (user_password.length > 6 && user_password.length < 16) ? true : false
  if(!(is_password_str && is_enable_length)) {
    respondData.status = 10002,
    respondData.error = '密码不符合规范'
    return ctx.body = respondData
  }
  try {
    // 用户参数
    const userpassword = md5(user_password)
    const userInfo = {
      useremail: user_email,
      username: user_name,
      userpwd: user_password,
      status: 0,
      create_time: Date.now('YYYY-MM-DD')
    }
  } catch(error) {

  }
}
exports.user_regist = user_regist