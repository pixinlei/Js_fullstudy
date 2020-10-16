const state = {
  id: 0,
  imgurl: '',
  itemname: '',
  arname: '',
  list: []
}

const getters = {
  getList: state => state.list
}

const mutations = {
  getList(state, list){
    state.list = list
  },
  gotoplay(state,)
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