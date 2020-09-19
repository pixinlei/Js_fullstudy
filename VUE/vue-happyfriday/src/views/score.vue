<template>
  <div class="page">
    <img class="bgcimg" :src="bgcimg" alt="">
    <img class="blackboard" :src="blackboard" alt="">
    <h1 class="point">{{point}}</h1>
    <h2 class="message">{{message}}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import bgcimg from "@/assets/images/4-1.jpg";
import blackboard from "@/assets/images/4-2.png";
export default {
  data () {
    return {
      bgcimg: bgcimg,
      blackboard: blackboard,
      point: 0,
      message: ''
    }
  },
  computed: {
    ...mapState(['myans'])
  },
  methods: {
    score () {
      if (this.myans[0] === 2) {
        this.point++
      }
      if (this.myans[1] === 2) {
        this.point++
      }
      if (this.myans[2] === 2) {
        this.point++
      }
      if (this.myans[3] === 2) {
        this.point++
      }
      if (this.myans[4] === 2) {
        this.point++
      }
      this.point = Math.floor((this.point / this.myans.length) * 100)
      if (this.point < 60) {
        this.message = '你个垃圾'
      }else if (this.point < 80) {
        this.message = '加油哦'
      }else {
        this.message = '你好棒'
      }
    }
  },
  created () {
    this.score()
    console.log(this.myans);
  }
}
</script>

<style lang="stylus" scoped>
.bgcimg
  position relative
  top 0
  left 0
  width 100%
.blackboard
  position absolute
  top 10% 
  left 20%
  width 60%
.point
  position absolute
  top 20%
  left 45%
.message
  position absolute
  top 30%
  left 40%
</style>