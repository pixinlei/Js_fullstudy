import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    question: [
      {
        timu: "第一题",
        title: "题目一",
        ans: ["答案一", "答案二", "正确答案", "答案四"],
        isShow: true,
      },
      {
        timu: "第二题",
        title: "题目二",
        ans: ["答案一", "答案二", "正确答案", "答案四"],
        isShow: false,
      },
      {
        timu: "第三题",
        title: "题目三",
        ans: ["答案一", "答案二", "正确答案", "答案四"],
        isShow: false,
      },
      {
        timu: "第四题",
        title: "题目四",
        ans: ["答案一", "答案二", "正确答案", "答案四"],
        isShow: false,
      },
      {
        timu: "第五题",
        title: "题目五",
        ans: ["答案一", "答案二", "正确答案", "答案四"],
        isShow: false,
      },
    ],  
    myans: [],
  },
  getters: {
    myans: state => state.myans
  },
  mutations: {
    MYANS (state, data) {
      state.myans.push(data)
    }
  },
  actions: {
    myansActions({commit}, data) {
      commit('MYANS',data )
    }
  },
  modules: {
  }
})
