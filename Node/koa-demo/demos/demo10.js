// 中间件
const fs = require('fs/promises')
const koa = require('koa')
const app = new koa()

const main =async ctx => {
  ctx.response.type = 'html'
  ctx.response.body = await fs.readFile('./template.html','utf8')
}

app.use(main)

app.listen(3000)