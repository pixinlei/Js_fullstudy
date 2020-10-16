import Vue from 'vue'
import VueRouter from 'vue-router'

const search = () => import('@/views/search')
Vue.use(VueRouter)

  const routes = [
    {
      path:'/search',
      name:'search',
      component: search
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('@/views/recommend.vue')
    },
    {
      path: '/musicDetail',
      name: 'musicDetail',
      component: () => import('@/views/musicDetail.vue')
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import('@/views/singer.vue')
    },
    {
      path: '/singerDetail',
      name: 'singerDetail',
      component: () => import('@/views/singerDetail.vue')
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('@/views/play.vue')
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import('@/views/rank.vue')
    }
  ]

const router = new VueRouter({
  linkActiveClass:'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
