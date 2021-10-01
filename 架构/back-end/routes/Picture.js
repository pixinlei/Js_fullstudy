const router = require('koa-router')()
const pictureSqlConfig = require('../controllers/pictureSqlConfig')

const userService = require('../controllers/mySqlConfig')
router.prefix('/picture')


router.get('/all', async function (ctx, next) {
  ctx.body = {
    data: 1
  }
})

router.get('/cover', async function (ctx, next) {
  let start = ctx.request.query.start
  let end = ctx.request.query.end
  await pictureSqlConfig.getPictureCosplay({ start, end }).then(res => {
    let result = res.reduce((total, currentValue, currentIndex) => {
      total.push({ href: currentValue.href, title: currentValue.title, cover: currentValue.cover })
      return total
    }, [])
    ctx.body = {
      data: result
    }
  })
})

router.get('/picture', async function (ctx, next) {
  let href = ctx.request.query.href
  await pictureSqlConfig.getPictureCosplayAlredy(href).then(res => {
    ctx.body = {
      data: res
    }
  })
})

module.exports = router
