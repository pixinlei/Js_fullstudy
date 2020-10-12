<template>
  <div class="page">
  <keep-alive>
    <musicList :list="list" :list2="list2"></musicList>
  </keep-alive>
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
      list2: [],
    }
  },
  methods: {
    play(id) {
      this.$router.push({ path:`/play/`,query:{
        id
      }})
    },
    MusicDetail () {
      let that = this
      Promise.resolve().then(() => {
        let params = {
          id: that.$route.query.id
        }
        api.MusicDetail(params).then((res) => {
          that.list = res.playlist 
          console.log(that.list);
          that.list2 = res.playlist.tracks
          // console.log(that.list2);
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
  },
  destoryed () {
    this.MusicDetail()
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