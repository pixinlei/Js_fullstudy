<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  beforeCreate() {
    if(window.sessionStorage.getItem('isMobile')) {
      import './style/mobile.css'
    }
  },
}
</script>
<style>
</style>
