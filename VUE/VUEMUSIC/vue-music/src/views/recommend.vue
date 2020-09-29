<template>
  <div class="page">
    <van-swipe :autoplay="3000" style="height: 200px">
      <van-swipe-item
        v-for="(image, index) in banners"
        :key="index"
        preload="1:1"
      >
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="center">热门歌单推荐</div>
    <!-- 下拉加载更多 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="item" v-for="item in list" :key="item.id" @click="todetailmusic(item.id)">
          <div class="img">
            <img
              :src="item.coverImgUrl"
              alt="1"
              width="80"
              height="80"
              style="margin: 20px; display: inline-block"
            />
          </div>
          <div class="right">
            <div class="title">
              <span>{{ item.name }}</span>
            </div>
            <div class="context">
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import api from "@/api";
// import { mapActions } from 'vuex'
export default {
  data() {
    return {
      limit: 10,
      banners: [],
      id: 1,
      list: [],
      list2: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    todetailmusic(id) {
      this.$router.push({ path:`/musicDetail/`,query:{
        id
      }})
    },
    onLoad() {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      let that = this;
      function getlist() {
        that.Related_song_list_recommendation().then((res) => {
          that.list = res;
          // console.log(res);
        });
      }
      getlist();
      // for (let i = 0; i < 10; i++) {
      //   this.list
      // }
      this.limit += 10;
      this.loading = false;

      // if (this.list.length - this.list2.length >= 20) {
      //   this.finished = true;
      //   this.list2 = this.list
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
    HotMusic() {
      // 获取热门搜索
      api.HotMusic().then((res) => {
        console.log(res);
        // console.log(res.data.result.hots);
        // this.hotKey =  res.result.hots.slice(0, 10)
      });
    },
    // 头部轮播图
    Banner() {
      api.Banner().then((res) => {
        // console.log(res.banners);
        for (const i of res.banners) {
          this.banners.push(i.imageUrl);
        }
      });
    },
    Related_song_list_recommendation() {
      let that = this;
      return new Promise((resolve, reject) => {
        let params = {
          limit: that.limit,
        };
        api
          .Related_song_list_recommendation(params)
          .then((res) => {
            resolve(res.playlists);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  created() {
    // this.HotMusic()
    this.Banner();
    // console.log(this.list2);
    // this.Related_song_list_recommendation()
  },
};
</script>

<style scoped>
.center {
  margin-top: 10px-;
  text-align: center;
  color: red;
  line-height: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.my-swipe .van-swipe-item {
  text-align: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.item {
  font-size: 15px;
  position: relative;
  width: 100%;
  height: 100px;
  background: RGB(10, 7, 60);
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
  line-height: 20px;
  margin: 5px;
  margin-left: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  font-size: 15px;
  color: rgba(255,255,255,0.5);
}
</style>