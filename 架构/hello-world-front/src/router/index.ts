import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
// import NProgress from 'nprogress';

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
    component: Home
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
  routes
})



router.beforeEach((to, from, next) => {
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
  // NProgress.done();
});

export default router
