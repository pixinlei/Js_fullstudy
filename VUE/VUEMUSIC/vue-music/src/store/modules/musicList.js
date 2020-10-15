const state = {
  list: [],
  listName: []
}

const getters = {
  getList: state => state.list
}

const mutations = {
  getList(state, list){
    state.list = list
  },
  musicNameList(state,listName) {
    state.listName = listName
  }
}

const actions = {
 giveList({commit},list){
   commit('getList', list)
  //  console.log(list);
 },
 givemusicNameList({commit},listName){
  commit('musicNameList', listName)
  // console.log(listName);
}

}

export default {
  state,
  getters,
  mutations,
  actions
}