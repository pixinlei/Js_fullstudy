const Koa = require('koa')
const compose = require('koa-compose')
const app = new Koa()

const logger = (ctx,next) => {
  console.log(`${ctx.request.url}--------------------${ctx.request.method}`);
  next()
}

const main = (ctx) => {
  ctx.response.body = 'hello world'
}

const middlewares =compose([logger,main]) 
// app.use(logger)
// app.use(main)
app.use(middlewares)

app.listen(3000)