<template>
  <van-swipe height="200" :show-indicators="false" lazy-render class="my-swipe" :autoplay="1000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in swipeList" :key="index" @click="previewImage(index)">
      <van-image width="100%" height="200px" fit="cover" :src="item">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
        <template v-slot:error></template>
      </van-image>
    </van-swipe-item>
  </van-swipe>
  <div style="height:100px">11111111</div>
  <div style="height:100px">11111111</div>
  <div style="height:100px">11111111</div>
  <div style="height:100px">11111111</div>
  <div style="height:100px">11111111</div>
  <div style="height:100px">11111111</div>
  <div style="height:100px">11111111</div>
  <div style="height:100px">11111111</div>
  <div style="height:100px">11111111</div>
  <div style="height:100px">11111111</div>
  <div style="height:100px">11111111</div>
  <div style="height:100px">11111111</div>
  <div style="height:100px">11111111</div>
</template>

<script lang="ts">
import { ImagePreview } from 'vant'
import { reactive } from 'vue'
export default {
  setup() {
    let swipeList = reactive([
      'http://www.jdailymall.com/wp-content/uploads/2017/12/rion_carry-on_04.jpg',
      'http://info.service2ohtv.cc/wp-content/uploads/2017/02/fcebdfed42633bc487c2a0f7aecd929c.jpg',
      'https://tu.gtmm.net:8988/listImg/2020/06/26/106/01.jpg',
      'https://d.40tp.com/d/file/uploads/2021/03/19/df3uqnj50ae272.jpg',
      'https://d.40tp.com/d/file/uploads/2021/03/19/qzxtegst0vh273.jpg'
    ])
    function previewImage(index) {
      ImagePreview({
        images: swipeList,
        startPosition: index
      })
    }
    return {
      swipeList,
      previewImage
    }
  }
}
</script>

<style scoped lang="scss">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>