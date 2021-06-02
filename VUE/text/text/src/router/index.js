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
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Child1',
    name: 'Child1',
    component: () => import(/* webpackChunkName: "about" */ '../components/Child1.vue')
  },
  {
    path: '/Child2',
    name: 'Child2',
    component: () => import(/* webpackChunkName: "about" */ '../components/Child2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
