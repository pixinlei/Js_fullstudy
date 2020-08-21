const Koa = require('koa')
const app = new Koa()

const logger = (ctx,next) => {
  console.log(`${ctx.request.url}--------------------${ctx.request.method}`);
  next()
}

const main = (ctx) => {
  ctx.response.body = 'hello world'
}

app.use(logger)
app.use(main)

app.listen(3000)