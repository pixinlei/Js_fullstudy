import Vue from 'vue'
import App from './App.vue'
import tabs from 'pixinlei-tabs'
import "babel-polyfill"


Vue.config.productionTip = false
Vue.use(tabs)
new Vue({
  render: h => h(App),
}).$mount('#app')
