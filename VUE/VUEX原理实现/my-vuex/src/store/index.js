import Vue from 'vue'
import Vuex from './myVuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getCount: state => state.count * 100
  },
  mutations: {
    addCount(state, num) {
      status.count += num
    }
  },
  actions: {
  },
  modules: {
  }
})
