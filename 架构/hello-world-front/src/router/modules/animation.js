export default [{
    path: '/tarot', 
    name: 'tarot',
    component: () => import('../../views/tarot.vue'),
    meta: {
        title: '塔罗牌'
    }
},
{
    path: '/setting', //404页面必须在最底部
    name: 'setting',
    component: () => import('../../views/setting.vue'),
    meta: {
        title: '设置'
    }
}
]