import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';

import Tabs from 'pixinlei-tabs'

Vue.config.productionTip = false
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(Tabs)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
