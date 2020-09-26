<template>
  <div id="app">
    <div id="nav">
      <button @click="send">aaaaaa</button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {translate} from '@/api/index.js'
export default {
  

  methods:{
    send(){
      translate('你好').then(res =>{
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
