const Koa = require('koa')
const app = new Koa()
const router = require('koa-route')


// const about = ctx => {
//     ctx.response.type = 'html'
//     ctx.response.body = '<a href="/">About</a>'
// }

const main = ctx => {
  // if(ctx.request.url == '/about') {
  //   ctx.response.type = 'html'
  //   ctx.response.body = '<a href="/">About</a>'
  // }else {
  // ctx.response.body = 'hello world'
  // }
  let data = new Date().getTime()
    ctx.response.body = `${ctx.request.url}------------${data}------------${ctx.request.method}`
}

// app.use(router.get('/about',about))
app.use(router.get('/',main))

// app.use(main)

app.listen(3000)