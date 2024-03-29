import Vue from 'vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

import tabs from 'vue-demo@0.1.0'
// Vue.use(ElementUI);

Vue.use(tabs)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
