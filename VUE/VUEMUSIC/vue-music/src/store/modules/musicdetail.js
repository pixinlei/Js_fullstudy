const state = {
  id: 0
}

const getters = {

}

const mutations = {
  // [type.SET_PLAYLIST](state,playlist) {
  //   state.playList = playlist
  // },
  // [type.SET_CURRENT_INDEX](state,index) {
  //   state.currentIndex = index
  // },
  // [type.SET_PLAYING](state,status) {
  //   state.playing = status
  // },
  // [type.SET_FULL_SCREEN](state,status) {
  //   state.fullScreen = status
  // }
  getId(state, id){
    status.id = id
  } 
}

const actions = {
 giveid({commit}){
   commit('gitId')
 }

}

export default {
  state,
  getters,
  mutations,
  actions
}