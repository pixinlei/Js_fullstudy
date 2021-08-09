<template>
  <van-nav-bar
    :safe-area-inset-top="true"
    :placeholder="true"
    :title="title"
    border
    fixedtitle="标题"
    :left-arrow="showLeftButton"
    @click-left="onClickLeft"
  />
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
export default {
  props: {
      title: {
          type: String,
          default: '默认标题'
      },
      showLeftButton: {
          type: Boolean,
          default: false
      }
  },
  setup(props: any) {
    let router = useRouter()
    function onClickLeft() {
      router.go(-1)
    }
    return {
      onClickLeft
    }
  }
}
</script>

<style>
</style>