<template>
<keep-alive>
  <van-pull-refresh v-model="refreshing">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        class="list"
        v-for="(item, index) in list"
        :key="index"
        @click="toDetailSinger(item.id, item.name, item.img1v1Url)"
      >
        <img
          width="50"
          height="50"
          style="border-radius: 50%"
          :src="item.img1v1Url"
          alt=""
        />
        <span>{{ item.name }}</span>
      </div>
    </van-list>
  </van-pull-refresh>
</keep-alive>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      refreshing: false,
      limit: 10,
      offset: 1,
      list: [],
      loading: false,
      finished: false,
      params: {
        limit: 10,
      },
    };
  },
  methods: {
    toDetailSinger(id, name, img) {
      this.$router.push({
        path: `/singerDetail/`,
        query: {
          id,
          name,
          img,
        },
      });
    },
    hotSinger(params) {
      // console.log(params);
      return new Promise((resolve, reject) => {
        api
          .hotSinger(params)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    onLoad() {
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      this.hotSinger(this.params).then((res) => {
        // console.log(res.artists);
        this.list.push(...res.artists);
        // console.log(this.list);
      });
      // 加载状态结束
      this.limit += 10;
      this.offset += this.limit;
      this.loading = false;
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
  },
  created() {
    this.onLoad();
  },
  actived() {
    this.onLoad()

  }
};
</script>

<style scoped>
.list {
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 80px;
  background: rgba(10, 7, 60);
}
</style>