const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')
const utils = require('../controllers/util')
const MovieService = require('../controllers/movieSqlConfig')

router.prefix('/users')

// router.get('/text', async)


router.get('/all', async function (ctx, next) {
  await userService.getAllUsers().then((res) => {
    ctx.body = res
  })
})
// 获取setting表中的内容
router.get('/setting', async function (ctx, next) {
  let id = ctx.request.query.id
  await userService.setting(id).then((res) => {
    ctx.body = res
  })
})


// 登录
router.post('/login', async (ctx, next) => {
  var username = ctx.request.body.username
  var password = ctx.request.body.password
  console.log(ctx.request.body, '这里有哪些');
  console.log(username, password, '是正常的吗');
  if (username && password) {
    await userService.login(username, password).then((res) => {
      if (!res.length) {
        try {
          throw Error("用户密码错误");
        } catch (err) {
          console.log(err);
        }
        ctx.body = {
          code: "80005",
          data: "err",
          msg: "账号密码错误",
        };
      } else {
        ctx.body = {
          code: "200",
          data: {
            res,
            token: new Date().getTime()
          },
          msg: "登录成功",
        };
      }
    });
  } else {
    ctx.body = {
      code: "80001",
      msg: "用户名、密码或昵称不能为空",
    };
  }
})

// // 女优封面数据
// router.get('/actress', async (ctx, next) => { //一次性最多120条数据，从0开始
//   let start = ctx.request.query.start
//   let end = ctx.request.query.end
//   await MovieService.getMovieActress(start, end).then((res) => {
//     ctx.body = res
//   })
//   // .catch(err => {
//   //   // ctx.body = []
//   // })
// })





module.exports = router
