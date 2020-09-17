const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')
// const utils = require('../controllers/util')

router.prefix('/users')

router.get('/all',async function (ctx, next) {
  ctx.body = "afhsd"
  // await userService.getAllUsers().then((res) => {
  //   ctx.body = res
  // })
})

module.exports = router;
