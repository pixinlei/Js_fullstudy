<template>
  <div class="page">
    <van-swipe :autoplay="3000" style="height: 200px;">
      <van-swipe-item v-for="(image, index) in banners" :key="index" preload="1:1">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      banners: []
    }
  },
  methods: {
    HotMusic () { // 获取热门搜索
      api.HotMusic().then((res) => {
        console.log(res);
        // console.log(res.data.result.hots);
        // this.hotKey =  res.result.hots.slice(0, 10)
      })
    },  
    // 头部轮播图
    Banner () {
      api.Banner().then((res) => {
        console.log(res.banners);
        for (const i of res.banners) {
          this.banners.push(i.imageUrl)
        }
      })
    },
    Related_song_list_recommendation() {
       const params = {
        id:1
      }
      api.Related_song_list_recommendation(params).then((res) => {
        console.log(res);
      })
    }
  },
  created () {
    // this.HotMusic()
    this.Banner()
    this.Related_song_list_recommendation()
  }
}
</script>

<style>
  .my-swipe .van-swipe-item {
    text-align: center;
    background-repeat: no-repeat;
    background-size:contain;
  }
</style>