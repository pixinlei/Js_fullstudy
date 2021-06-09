import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installVant from './plugins/vant'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// import {get, post} from './util/axios.js'
const app = createApp(App)
installVant(app)
// app.config.globalProperties.$get = get
// app.config.globalProperties.$post = post
app.use(store).use(router).use(ElementPlus).mount('#app')