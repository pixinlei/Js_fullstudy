const state = {
  id: ''
}

const getters = {

}

const mutations = {
  getId(state, id){
    state.id = id
    console.log(this);
    this.$router.push({ path:`/play/`,query:{
      id:state.id
    }})
  }
}

const actions = {
 giveId({commit},id){
   commit('getId', id)
 }

}

export default {
  state,
  getters,
  mutations,
  actions
}