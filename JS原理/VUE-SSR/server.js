const Vue = require('vue')
const express = require('express')
const server = express()
// const App = require('App.vue')
const Render = require('vue-server-renderer')
const { html } = require('cheerio')
const render = Render.createRenderer({

})
// export default
const createApp = require('./dist/server.bundle').default;
// createApp 指向 entry-server 那个函数，被webpack打包成commonJS

server.get('*', (req, res) => {
  const app = createApp()
  let context = {}
  render.renderToString(app, context, (err, html) => {
    if(err) {
      console.log(err);
    }
    res.end(html)
  })
  
  // res.end(`
  //   <h2>h2</h2>
  // `)
})
server.listen(8080, () => {
  console.log('server is running 8080');
})