import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
console.log(echarts, '+++');
console.log(Vue, '____');
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
