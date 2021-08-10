import Vue from 'vue'
import App from './App.vue'
import Tabs from 'pixinlei-tabs'
import "babel-polyfill"
Vue.config.productionTip = false

Vue.use(Tabs)
new Vue({
  render: h => h(App),
}).$mount('#app')
