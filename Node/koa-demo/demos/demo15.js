const Koa = require('koa')
const app = new Koa()

const main = ctx => {
  ctx.response.status = 404
  ctx.response.body = 'page not found'
}

app.use(main)

app.listen(3000,()=>{
  console.log("成功");
})