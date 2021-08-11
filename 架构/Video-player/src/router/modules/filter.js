export default [{
    path: '/Filter',
    name: 'Filter',
    component: () => import('../../views/Filter.vue')
}, {
    path: '/MovieDetail',
    name: 'MovieDetail',
    component: () => import('../../views/MovieDetail.vue')
},{
    path: '/Movie',
    name: 'Movie',
    component: () => import('../../views/Movie.vue')
}]