<template>
  <div class="page">
    <div class="bgckground">
    {{list.name}}
    <img :src="list.coverImgUrl" alt="">
    </div>
    <div class="item" v-for="item in list2" :key="item.id">
      <div class="name">{{item.name}}</div>
      <div class="desc"><span>{{item.ar[0].name}}</span><span>{{item.ar[1].name}}</span></div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      list: [],
      list2: []
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
          // console.log(res.playlist);    
          // console.log(that.list.tracks[0].id); 
          console.log(res.playlist.tracks);  
          that.list2 = res.playlist.tracks
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
  .bgckground
    width 100%
    height 200px
    position relative
    img 
      position absolute

      width 100%

  img 
    width 100%
    height 30px
  .item
    width 100%
    height 65px
    padding 10px
    box-sizing border-box
    .name
      margin 10px
    .desc
      margin-left 10px
      margin-right 5px
      color: rgba(255,255,255,0.5)
</style>