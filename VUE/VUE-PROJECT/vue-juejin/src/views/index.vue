<template>
  <div class="page">
    <van-tabs v-model="active" @click="goToNav(active)">
      <van-tab :title='item' v-for="(item, index) in title" :key="index"></van-tab>
    </van-tabs>
    <router-view/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 2,
      title: ['推荐','热榜','后端','前端','android','iOS','人工智能','开发工具','代码人生','阅读']
    }
  },
  methods: {
    goToNav(active) {
      this.$router.push({ path: `/${active}`})
    }
  }
}
</script>

<style>

</style>