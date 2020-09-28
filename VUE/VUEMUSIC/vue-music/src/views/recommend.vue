<template>
  <div class="page">
    <van-swipe :autoplay="3000" style="height: 200px;">
      <van-swipe-item v-for="(image, index) in banners" :key="index" preload="1:1">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 下拉加载更多 -->
<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
  <div class="item">
    <div class="img"><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="1" width="80" height="80" style="margin:20px;display:inline-block"></div>
    <div class="right">
      <div class="title"><span>tutle</span></div>
      <div class="context"><p>1111111</p></div>
    </div>
  </div>
  </van-list>
</van-pull-refresh>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      banners: [],
      id: 1,
      list: [],
      list2: [],
      loading: false,
      finished: false,
      refreshing: false,
    }
  },
  methods: {
   onLoad() {

        // if (this.refreshing) {
        //   this.list = []
        //   this.refreshing = false;
        // }
        
        Promise.resolve().then(() => {
          let a = this.Related_song_list_recommendation()
           console.log(a);
        }).then(()=> {
          // console.log(this.list2);
              // this.Related_song_list_recommendation()
        })
        // for (let i = 0; i < 10; i++) {
        //   this.list 
        // }      
        // this.loading = false;

        // if (this.list.length >= 40) {
        //   this.finished = true;
        // }

    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // this.id++
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
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
        // console.log(res.banners);
        for (const i of res.banners) {
          this.banners.push(i.imageUrl)
        }
      })
    },
    Related_song_list_recommendation() {
      let params = {
        limit:10
      }
      // params.id = this.id
      console.log(params);
      api.Related_song_list_recommendation(params).then((res) => {
        // console.log(res.playlists);
        this.list2 = res.playlists
        console.log(this.list2);
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

<style scoped>
  .my-swipe .van-swipe-item {
    text-align: center;
    background-repeat: no-repeat;
    background-size:contain;
  }
  .item {
    position: relative;
    width: 100%;
    height: 100px;
    background: RGB(10,7,60);
    display: flex;
  }
  .item image {
    width: 80px;
    height: 80px;
    position: relative;
    margin: 10px;
  }
  .item .title {
    margin-top: 20px;
  }
  .item p {
    margin: 5px;
    margin-left: 0;
  }
</style>