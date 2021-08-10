<template>
  <div class="app">
    <button @click="isShow">控制显示与隐藏</button>
    <transition name="fade">
      <h1 v-if="flag">transation动画</h1>
    </transition>
  </div>
  1111111111111
  
</template>

<script>
export default {
  data () {
    return {
      flag: false
    }
  },
  methods: {
    isShow () {
      this.flag = !this.flag
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
  color: yellow;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  color: red;
}
</style>
