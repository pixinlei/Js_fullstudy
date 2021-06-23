export default [{
    path: '/tarot', //404页面必须在最底部
    name: 'tarot',
    component: () => import('../../views/tarot.vue')
}]