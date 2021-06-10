const state = {
    name: '',
    nickname: '',
    avatar: ''
}


const mutations = {
    SET_USER_INFROMATION: (state, data) => {
        state.name = data.name
        state.nickname = data.nickname
        state.avatar = data.avatar
    },
}

const actions = {

}

export default {
    namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名，解决命名神突间题
    state,
    mutations,
    actions
}