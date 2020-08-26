import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld.vue'
import Hi from '@/components/Hi.vue'
// import Hi1 from '@/components/Hi1.vue'
import Hi2 from '@/components/Hi2.vue'
// import { component } from 'vue/types/umd'
import error from '@/components/error.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Hello',
      component:Hello,
      alias:'abc'
    },
    {
      path:'*',
      component:error,
    },
    {
      path:'/hi',
      name:Hi,
      component:Hi,
      children: [
        {
          path:'hi1',
          name:'hi1',
          redirect:'/'
        },
        {
          path:'hi2',
          component:Hi2,
          alias:'wn'
        },
        {
          path:'/aaa',
          Comment:error,
          beforeEnter: (to,from,next) => {
            console.log('我进入了404页面');
            console.log(to,from);
            next()
          }
        }
      ]
    },
  ]
})