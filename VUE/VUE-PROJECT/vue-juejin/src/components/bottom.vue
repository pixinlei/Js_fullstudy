<template>
<div class="tabbar">
<van-tabbar v-model="active" @change="myviews(active)">
  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="fire-o">沸点</van-tabbar-item>
  <van-tabbar-item icon="browsing-history-o">发现</van-tabbar-item>
  <van-tabbar-item icon="description">小册</van-tabbar-item>
  <van-tabbar-item icon="contact">我</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    myviews (active) {
      if (active === 0) {
        this.$router.push({ path: '/'})
      }
      if (active === 1) {
        this.$router.push({ path: '/hot'})
      }
      if (active === 2) {
        this.$router.push({ path: '/find'})
      }
      if (active === 3) {
        this.$router.push({ path: '/book'})
      }
      if (active === 4) {
        this.$router.push({ path: '/mine'})
      }
    }
  }
};
</script>

<style>

</style>