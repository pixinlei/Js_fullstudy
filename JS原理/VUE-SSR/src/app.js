import Vue from 'vue'
import App from './App.vue'

export function createApp() {
  let app = new Vue({
    render: h => h(App)
    // AAAA
    11
  })
  return { app }
}