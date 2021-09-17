const router = require('koa-router')()
const Juejin = require('../controllers/juejin')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/juejin', async (ctx, next) => {
  let page = ctx.request.query.page
  Juejin({value: page})
  ctx.body = {
    type: 'success'
  }
})

module.exports = router
