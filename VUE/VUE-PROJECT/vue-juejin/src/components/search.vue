<template>
  <div class="search">
    <van-search v-model="value" placeholder="搜索掘金" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style>

</style>