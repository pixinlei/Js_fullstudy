const state = {
    name: '',
    password: '',
    avatar: '',
    token: '',
    colors: [{
        color1: '#000000',
        color2: '#000000',
        color3: '#000000',
        color4: '#000000',
        color5: '#000000',
        color6: '#000000'
    }]
}


const mutations = {
    SET_USER_INFROMATION: (state, data) => {
        state.name = data.name
        state.password = data.password
        state.avatar = data.avatar
        state.token = data.token
    },
    SET_USER_THEME_COLOR: (state, data) => {
        state.colors = data
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