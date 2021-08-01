const state = {
    count: 1
}


const mutations = {
    add(state, n=1) {
        state.count += n
    }
}

const actions = {

}

export default {
    namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名，解决命名神突间题
    state,
    mutations,
    actions
}