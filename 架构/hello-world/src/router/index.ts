import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress';

const routes: Array<RouteRecordRaw> = [
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
  {
    path: '/404', //404页面必须在最底部
    name: '404',
    component: () => import('../views/notFound.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // 有token就可以正常跳转，没有就跳转到登录页面
  // if(localStorage.getItem('token')) next()
  // router.replace('login')
  NProgress.start();
  next()
})

router.afterEach(() => {
  NProgress.done();
});

export default router
