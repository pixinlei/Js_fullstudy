<template>
  <div class="home">
    <leftNav></leftNav>
    <pos></pos>
  </div>
</template>

<script>
import leftNav from '../components/common/leftNav'
import pos from './pos'
export default {
  name: 'Home',
  components: {
    leftNav,
    pos
  }
}
</script>
<style scoped>
  .home {
    width: 100vw;
    height: 100vh;
  }
</style>
