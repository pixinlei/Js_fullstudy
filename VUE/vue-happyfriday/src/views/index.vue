<template>
  <div class="page">
    <img class="bgcimg" :src="bgcimg" alt="">
    <img class="title" :src="title" alt="">
    <img class="startbtn" :src="startbtn" alt="" @click="toStart">
    <img class="day" :src="day" alt="">
  </div>
</template>

<script>
import bgcimg from '@/assets/images/1-1.jpg'
import startbtn from '@/assets/images/1-4.png'
import title from '@/assets/images/1-2.png'
import day from '@/assets/images/1-3.png'
export default {
  data () {
    return {
      bgcimg: bgcimg,
      startbtn: startbtn,
      title: title,
      day: day
    }
  },
  methods: {
    
    toStart () {
      console.log(1);
      this.$router.push({ path: '/item'})
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bgcimg
    width 100%
    height 100%
  .startbtn
    position absolute
    left 50% 
    top 60%
    width 100px
    transform translate(-50%,-50%)
  .title
    position absolute
    left 50%
    top 30%
    transform translate(-50%,-50%)
    width 80%
  .day
    position absolute
    top 0
    right 10%
    height 120px
</style>