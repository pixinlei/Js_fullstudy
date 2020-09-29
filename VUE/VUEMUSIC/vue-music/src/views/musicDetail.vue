<template>
  <div class="page">
    <div>{{list.name}}</div>
    <img :src="list.coverImgUrl" alt="">
    <!-- <div v-for="(item,index) in list" :key="index">{{item}}</div> -->
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    MusicDetail () {
      let that = this
      Promise.resolve().then(() => {
        let params = {
          id: that.$route.query.id
        }
        api.MusicDetail(params).then((res) => {
          that.list = res.playlist 
          console.log(res.playlist);    
          console.log(that.list.tracks[0].id); 
          console.log(that.list.tracks);  
        })
      })
    }
  },
  created () {
    this.MusicDetail()
  }
}
</script>

<style scoped lang="stylus">
  img 
    width 100%
    height 30px
</style>