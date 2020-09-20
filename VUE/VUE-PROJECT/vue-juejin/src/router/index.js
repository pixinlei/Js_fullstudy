import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// const originalPush = VueRouter.prototype.push
//    VueRouter.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{title: '掘金首页'},
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '0',
        name: '0',
        component: () => import('@/views/myIndex/index0.vue'),
      },
      {
        path: '1',
        name: '1',
        component: () => import('@/views/myIndex/index1.vue'),
      },
      {
        path: '2',
        name: '2',
        component: () => import('@/views/myIndex/index2.vue'),
      },
      {
        path: '3',
        name: '3',
        component: () => import('@/views/myIndex/index3.vue'),
      },
      {
        path: '4',
        name: '4',
        component: () => import('@/views/myIndex/index4.vue'),
      },
      {
        path: '5',
        name: '5',
        component: () => import('@/views/myIndex/index5.vue'),
      },
      {
        path: '6',
        name: '6',
        component: () => import('@/views/myIndex/index6.vue'),
      },
      {
        path: '7',
        name: '7',
        component: () => import('@/views/myIndex/index7.vue'),
      },
      {
        path: '8',
        name: '8',
        component: () => import('@/views/myIndex/index8.vue'),
      },
      {
        path: '9',
        name: '9',
        component: () => import('@/views/myIndex/index9.vue'),
      }
    ]
  },
  {
    path: '/mine',
    name: 'mine',
    meta:{title: '我的页面'},
    component: () => import('@/views/mine.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta:{title: '登录界面'},
    component: () => import('@/views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
