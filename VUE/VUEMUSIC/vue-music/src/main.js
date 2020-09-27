import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../static/css/reset.styl'
import '../static/css/plugin.styl'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

Vue.use(Vant);

Vue.use(Lazyload, {
  lazyComponent: true,
});


Vue.config.productionTip = false

import { Toast } from '@/common/js/plugin'
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
