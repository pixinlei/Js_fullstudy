import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('../views/index.vue')
  },
  {
    path: '/item',
    name: '/item',
    component: () => import('../views/item.vue')
  },
  {
    path: '/score',
    name: '/score',
    component: () => import('../views/score.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
