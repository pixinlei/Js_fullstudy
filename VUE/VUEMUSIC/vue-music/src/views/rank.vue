<template>
  <div class="page">
    <div @click="goToPaiHangDetail(item.id,item.name,item.name)" :class="item.name" class="list" v-for="item in res.tags" :key="item.id">{{item.name}}</div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data() {
    return {
      res: {},
      myimg: []
    }
  },
  methods: {
    goToPaiHangDetail(id,name,img) {
      this.$router.push({
        path: `/singerDetail/`,
        query: {
          id,
          name,
          img,
        },
      });
    },
    hotplaylist() {
      return new Promise((resolve,reject) => {
        api.hotplaylist().then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
      })
    },
    // albumDetail() {
    //   return new Promise((resolve,reject) => {
    //     api.albumDetail().then((res) => {
    //       resolve(res)
    //     })
    //     .catch((error) => {
    //       reject(error)
    //     })
    //   })
    // }
  },
  created() {
    let that = this
    this.hotplaylist().then((res) => {
      that.res = res
      console.log(that.res);
      for (const i of that.res.tags) {
        let params = i.id
        console.log(params);
        // that.albumDetail(params).then((res) => {
        //   that.myimg = res
        //   console.log(res);
        // })
      }
    })

  }
  
}
</script>

<style lang="stylus" scoped>
  .list
    width 345.2px
    height 100px
    display flex
    margin 15px
    border-radius 100%
    box-shadow:5px 5px 14px #909090
    justify-content center
    align-items center
    box-sizing border-box
    background-color purple
  .华语
    background-color RGB(60,156,145)
  .流行
    background-color RGB(99,52,207)
  .摇滚
    background-color RGB(199,42,93)
  .民谣
    background-color RGB(22,104,220)
  .电子
    background-color RGB(60,156,145)
  .轻音乐
    background-color RGB(99,52,207)
  .综艺
    background-color RGB(199,42,93)
  .影视原声
    background-color RGB(99,52,207)
  .ACG
    background-color RGB(22,104,220)
</style>