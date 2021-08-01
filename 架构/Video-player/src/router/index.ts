import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress';

import modelRouters from './modules/index.js'

const routes: Array<RouteRecordRaw> = [
  {
  path: '/',
  name: 'Home',
  component: Home,
  children: [{
    path:'Recommend',
    name: 'Recommend',
    component: () => import('../views/Recommend.vue')
  }] 
  },
  ...modelRouters,
]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})



router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
})

router.afterEach(() => {
  NProgress.done();
});

export default router
