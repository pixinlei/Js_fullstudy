<template>
  <div>
    {{data}}
    <button @click="add">++</button>
    <router-link to="/about">go</router-link>
  </div>
</template>

<script>
import {data} from '@/myStore/index.js'
export default {
  setup(props) {
    function add() {
      data.count++
    }
    return {
      data,
      add
    }
  }
}
</script>

<style>

</style>