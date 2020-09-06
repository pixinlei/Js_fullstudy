<template>
  <div class="animal">
    <p>我的宠物：{{aaa}}</p>
  </div>
</template>

<script>
// import User from "@/components/User"
export default {
  props:{
    aaa: {
      type:String,
      default: '小白'
    }
  },
  data () {
    return {
      baby:'小白'
    }
  }
}
</script>

<style>

</style>