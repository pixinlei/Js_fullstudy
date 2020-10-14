<template>
  <div class="page">
   <!-- <div class="bgckground">
    <div class="mytitle"><van-icon click="back" name="arrow-left" />      </div>
    <img :src="$route.query.img" alt="">
    </div>
    <div class="item" v-for="item in list" :key="item.id">
      <div class="name">{{item.name}}</div>
      <div class="desc"><span>{{$route.query.name}}</span></div>
      
    </div> -->
    <musicList :list="list" :list2="list2"></musicList>
  </div>
</template>

<script>
import api from "@/api";
import musicList from '@/components/musicList'
export default {
  components: {
    musicList
  },
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
        api.singerDetail(params).then((res) => {
          // console.log(res.songs);
          that.list = res.songs
          that.list.coverImgUrl = that.$route.query.img
          // console.log(that.list);
          that.list2 = res.songs
        })
      })
    }
  },
  created () {
    this.MusicDetail()
  },
  computed: {
    sinId () {
      return this.$route.query.id
    }
  },
  watch: {
    sinId() {
      this.MusicDetail()
    }
  }
}
</script>

<style scoped lang="stylus">
  .bgckground
    width 100%
    height 250px
    position relative
    .mytitle
      position absolute
      z-index 3
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
    img 
      position relative
      width 100%
      height  100%
      opacity: 0.7

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