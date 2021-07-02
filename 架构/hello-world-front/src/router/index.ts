import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress';
import animation from './modules/animation.js'
import echarts from './modules/echarts.js'

import modelRouters from './modules/index.js'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [...animation, ...echarts]
  },
  {
    path: '/text',
    name: 'Text',
    component: () => import('../views/text.vue')
  },
  ...modelRouters,
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/notFound.vue')
  }
]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})



router.beforeEach((to, from, next) => {
  NProgress.start();
  if(localStorage.getItem('token')) {
    next()
  } else {
    if(to.path == '/login') {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
})

router.afterEach(() => {
  NProgress.done();
});

export default router
