<template>
  <div class="hi">
    <p>我是hi二页面</p>
    <button @click="goBack">返回上一个页面</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods : {
    goBack () {
      // 编程式路由跳转
      this.$router.push({path:'/abc',query:{name:'蜗牛'}})
    }
  }
}
</script>

<style>

</style>