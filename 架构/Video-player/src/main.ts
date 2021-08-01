import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installVant from './plugins/vant'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './styles/_variables.scss'
import 'default-passive-events' //解决element的警告问题

import './util/isMobile.js'

import FastClick from 'fastclick'; // 引入插件
FastClick.attach(document.body); // 使用 fastclick


// import {get, post} from './util/axios.js'
const app = createApp(App)
installVant(app)
app.use(store).use(router).use(ElementPlus).mount('#app')

// app.config.globalProperties.$get = get
// app.config.globalProperties.$post = post



