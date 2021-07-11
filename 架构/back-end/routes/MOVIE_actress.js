const router = require('koa-router')()
const actress = require('../MOVIE/actress')
router.prefix('/Movie')
// 获取女优名字/封面
router.post('/actress', async (ctx, next) => {
  var actressCoverData = []
  var page = ctx.request.body.page
  await actress(actressCoverData, page=1)
  console.log(actressCoverData);
  ctx.body = {
    data: actressCoverData
  }
})

module.exports = router
