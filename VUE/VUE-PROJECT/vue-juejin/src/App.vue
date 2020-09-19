<template>
  <div id="app">
    <search></search>
    <tabbar></tabbar>
    <router-view/>
  </div>
</template>
<script>
import search from '@/components/search'
import tabbar from '@/components/bottom'
export default {
  components: {
    search,
    tabbar
  }
}
</script>
<style lang="stylus">
#app
  font-size 10px
</style>
