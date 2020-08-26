<template>
  <div class="hello">
  <h1>{{msg}}</h1>
  <router-link :to="{name:'hi1',params:{name:'乐怡'}}">hi 一</router-link>---------------
  <router-link to="/hi/hi2">hi 二</router-link>
  <router-link to="/aaa">404</router-link>
  <div>{{$route.params.name}}</div>

  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Hi',
  data () {
    return {
      msg:'hi, i am wna'
    }
  },
  beforeRouteEnter: (to,from,next) => {
    console.log('准备进入目标');
    next()
  },
  beforeRouteLeave : (to,from,next) => {
    console.log('准备离开目标');
    next()
  },

}
</script>

<style>

</style>