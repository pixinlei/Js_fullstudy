export default [{
    path: '/tarot', 
    name: 'tarot',
    component: () => import('../../views/tarot.vue')
},
{
    path: '/leftMenu', 
    name: 'leftMenu',
    component: () => import('../../components/leftMenu.vue')
}
]