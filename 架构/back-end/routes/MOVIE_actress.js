const router = require('koa-router')()
const actress = require('../MOVIE/actress')
router.prefix('/Movie')
// 获取女优名字/封面
router.get('/actress', async (ctx, next) => {
  var actressCoverData = []
  var page = ctx.request.query.page
  await actress(actressCoverData, page).then(async() => {
    ctx.body = {
      data: actressCoverData
    }
  }).catch(err => {
    ctx.body = {
      data: []
    }
  })
})

module.exports = router
