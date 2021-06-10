export default [{
    path: '/404', //404页面必须在最底部
    name: '404',
    component: () => import('../../views/notFound.vue')
}]