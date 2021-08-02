const router = require('koa-router')()
const actress = require('../MOVIE/actress')
const MovieService = require('../controllers/movieSqlConfig')

const userService = require('../controllers/mySqlConfig')
router.prefix('/Movie')
// 获取女优名字/封面
// router.get('/actress', async (ctx, next) => {
//   var actressCoverData = []
//   var page = ctx.request.query.page
//   await actress(actressCoverData, page).then(async() => {
//     ctx.body = {
//       data: actressCoverData
//     }
//   }).catch(err => {
//     ctx.body = {
//       data: []
//     }
//   })
// })

// 女优封面数据
router.get('/actress', async (ctx, next) => { //一次性最多120条数据，从0开始
  let start = ctx.request.query.start
  let end = ctx.request.query.end
  await MovieService.getMovieActress(start, end).then((res) => {
    ctx.body = res
  })
  // .catch(err => {
  //   // ctx.body = []
  // })
})

// 女优电影详细信息
router.get('/actressDetail', async (ctx, next) => { //一次性最多120条数据，从0开始
  let start = ctx.request.query.start
  let end = ctx.request.query.end
  await MovieService.getMovieActressDetail(start, end).then((res) => {
    ctx.body = res
  })
  // .catch(err => {
  //   // ctx.body = []
  // })
})


// 通过封面信息找到对应女优
router.get('/getMovieByActress', async (ctx, next) => {
  let name = ctx.request.query.name
  await MovieService.getMovieByActress(name).then(res => {
    ctx.body = res
  })
})

router.get('/all', async function (ctx, next) {
  await userService.getAllUsers().then((res) => {
    ctx.body = res
  })
})


module.exports = router
