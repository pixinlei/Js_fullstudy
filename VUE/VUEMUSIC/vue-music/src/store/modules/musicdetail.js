const state = {
  id: 0
}

const getters = {

}

const mutations = {
  getId(state, id){
  console.log(id);
    state.id = id
  } 
}

const actions = {
 giveid({commit},id){
   commit('gitId',id)
 }

}

export default {
  state,
  getters,
  mutations,
  actions
}