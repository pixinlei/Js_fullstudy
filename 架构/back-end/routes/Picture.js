const router = require('koa-router')()
const pictureSqlConfig = require('../controllers/pictureSqlConfig')

const userService = require('../controllers/mySqlConfig')
router.prefix('/picture')


router.get('/all', async function (ctx, next) {
  ctx.body = {
      data: 1
  }
})


module.exports = router
