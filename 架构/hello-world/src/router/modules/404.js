export default function (router) {
    // 列表
    router.push({
        path: '/404', //404页面必须在最底部
        name: '404',
        component: () => import('../views/notFound.vue')
    })
    // 再有新的就是这样写
    // router.push({
    //     path: '/404', //404页面必须在最底部
    //     name: '404',
    //     component: () => import('../views/notFound.vue')
    // })
}