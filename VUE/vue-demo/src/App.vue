<template>
  <div id="app">
    <!-- <Home :lineWidth="10" /> -->
    <child :validatorDemo="textNumber" />
    num: {{num}}
    <button @click="num++">++</button>
    <button @click="getOriginData">获取初始值</button>
  </div>
</template>

<script>
// import Home from './views/Home.vue'
import child from './child.vue'
export default {
  name: 'App',
  data() {
    return {
      textNumber: '0',
      num: 0
    }
  },
  methods: {
    getOriginData() {
      console.log(this.$options.data().num, '初始值');
    }
  },
  components: {
    // Home,
    child
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
