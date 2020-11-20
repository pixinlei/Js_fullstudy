// import Vue, { h } from 'vue'
// import App from './App.vue'
import { createApp } from './app'
let { app } = createApp()
app.$mount('#app') // 渲染在浏览器上面

// let app = new Vue({
//   render: h(App)
// })

// app.mount('#app') // 渲染在浏览器上面

// (服务端渲染)同构 一份既在服务器端运行，也可以在客户端运行

