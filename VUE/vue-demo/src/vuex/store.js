import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const getters = {
  count: (state) => {
    return state.count +=100
  }
}

const mutations = {
  add (state) {
    state.count++
  },
  reduce (abc) {
    // console.log(abc);
    abc.count--
  }
}

const actions = { //提交mutations里面的方法
  addAction (context) {
    context.commit('add')
  }
}

const moduleA = {
  state,
  mutations,
  getters,
  actions
}

const moduleB = {
  state: {

  },
  mutations: {

  },
  getters () {

  }
}


export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
