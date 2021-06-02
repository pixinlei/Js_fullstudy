import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/child1',
    name: 'child1',
    component: () => import('../components/child1.vue'),
    children: [{
        path: 'child2',
        name: 'child2',
        component: () => import('../components/child2.vue')
    }]
  },
  {
    path: '/child2',
    name: 'child2',
    component: () => import('../components/child2.vue')
  },
  {
    path: '/redirect',
    redirect: '/'
  },
  {
    path: '*',
    name: '404',
    component: () => import('../components/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
