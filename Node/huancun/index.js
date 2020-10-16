const Koa = require('koa');
const md5 = require('md5')
const app = new Koa();
const path = require('path');
const router = require('koa-router')();

router.get('/', async function (ctx) {
  ctx.body = `
    <html>
      <body>hello world</body>
      <script src="./a.js"></script>
    </html>
  `
});

router.get('/a.js', async function (ctx) {
  console.log('请求来到这里');
  const fs = require('fs')
  const js = fs.readFileSync('./a.js', 'utf-8')
  // http 1.0 expires: 2020-10-16 17:00 浏览时间可以修改，有可能导致缓存失效
  // http 1.1 200 请求不会来到服务器 浏览器把上一次得到内容取出来用
  // (from memory/disk cache)
  const etag = md5(js)
  if (ctx.headers['if-none-match'] === etag) {
    ctx.status = 304 //304 告诉浏览器内容没有变化
    ctx.body = ''
    return
  }
  ctx.set('Cache-Control','public,max-age=30')
  // 能够根据文件内容生成的hash字符串(md5)
  // md('js') => 'xxxx'
  // 输入一样 输出一样 输入不一样 输出不一样
  ctx.set('ETag',etag)
  // 强缓存优先生效
  // 30s之后请求就会来到 服务器 顺便 用 if-none-match 把上一次的etag 带回来
  ctx.body = js
})
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(9090, () => {
  console.log('server is running 9090');
});
