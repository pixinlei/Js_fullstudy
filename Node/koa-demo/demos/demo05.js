// 引入依赖 commonJS
const Koa = require('koa')
const app = new Koa() //定义一个新的koa实例

const main = ctx => {
  // console.log(ctx.request);
  if(ctx.request.url !== '/') {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">index page</a>'
  }else {
    ctx.response.body = 'hello world'
  }
}

app.use(main)

app.listen(3000,() =>{
  console.log('项目启动ing');
})