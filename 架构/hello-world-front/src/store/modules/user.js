const state = {
    name: '',
    password: '',
    avatar: '',
    token: ''
}


const mutations = {
    SET_USER_INFROMATION: (state, data) => {
        state.name = data.name
        state.password = data.password
        state.avatar = data.avatar
        state.token = data.token
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