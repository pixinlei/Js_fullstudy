import Vue from 'vue'
import Vuex from 'vuex'
import com from './modules/com'
import music from './modules/music'
import musicList from './modules/musicList'
// import musicdetail from './modules/musicdetail'
// import play from './modules/play'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    com,
    music,
    musicList
  }
})
