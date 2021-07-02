const state = {
    name: '',
    password: '',
    avatar: '',
    token: '',
    colors: {
        color1: '#5A2BA7',
        color2: '#BE1A92',
        color3: '#F64173',
        color4: '#FF7F57',
        color5: '#FFBD4E',
        color6: '#F9F871'
    }
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