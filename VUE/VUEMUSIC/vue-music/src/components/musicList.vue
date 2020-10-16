<template>
  <div class="page">
    <div class="bgckground">
      <div class="mytitle">
        <van-icon @click="back" name="arrow-left" /> {{ list.name }}
      </div>
      <img :src="list.coverImgUrl" :alt="list.coverImgUrl" />
    </div>
    <div
      class="item"
      v-for="item in list2"
      :key="item.id"
      @click="play(item.id,list.coverImgUrl,item.name,item.ar[0].name,list2)"
    >
      <div class="name">{{ item.name }}</div>
      <div class="desc">
        <span>{{ item.ar[0].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import { mapActions } from 'vuex'
export default {
  props: ["list", "list2"],
  data() {
    return {
      url: "",
    };
  },
  methods: {
    ...mapActions(['giveList','givemusicNameList']),
    play(params,url,musicname,singername,list,gequming) {
      this.giveList(list)
      this.givemusicNameList(gequming)
      this.$router.push({
        path:'/play',
        query: {
          id: params,
          img: url,
          musicname:musicname,
          singername:singername,
          // list: list
        }
      })
    },
    back() {
      // console.log(123);
      this.$router.go(-1);
    },
    musicUrl() {
      let that = this;
      new Promise(() => {
        let params = {
          id: that.list.id,
        };
        api.musicUrl(params).then((res) => {
          that.url = res;
        });
      });
    },
  },
  actived() {
    this.musicUrl()
  },
  // created() {
  //   this.musicUrl()
  // }
};
</script>

<style scoped lang="stylus">
.bgckground {
  width: 100%;
  height: 250px;
  position: relative;

  .mytitle {
    position: absolute;
    z-index: 3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
}

.item {
  width: 100%;
  height: 65px;
  padding: 10px;
  box-sizing: border-box;

  .name {
    margin: 10px;
  }

  .desc {
    margin-left: 10px;
    margin-right: 5px;
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>