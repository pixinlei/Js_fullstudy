<template>
  <div id="app">
    <tabs />
    <Home :lineWidth="10"/>
  </div>
</template>

<script>
import tabs from ''
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
    tabs
  },
  mounted() {
    console.log(tabs);
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
