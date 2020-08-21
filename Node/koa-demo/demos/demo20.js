const koa = require('koa')
const app = new koa()
const koabody = require('koa-body')

const main = ctx => {
  // const body = ctx.request.body
  // if(!body.name) {
  //   ctx.throw(400,'.request.name')
  // }
  // ctx.response.body = {name:body.name}
  ctx.body `Request body:`
}

app.use(koabody())
app.use(main)
app.listen(3000)