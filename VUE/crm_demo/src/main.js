import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
  if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
    window.sessionStorage.setItem('isMobile', true)
    console.log('isMobile', true);
  } else {
    window.sessionStorage.setItem('isMobile', false)
    console.log('isMobile', false);
  }
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
