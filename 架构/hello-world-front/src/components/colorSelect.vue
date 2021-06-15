<template>
  <h1>1111</h1>
  <div id="page">
    <el-card class="box-card">
      <el-slider v-model="red" :min="0" :max="255"></el-slider>
      <el-slider v-model="green" :min="0" :max="255"></el-slider>
      <el-slider v-model="blue" :min="0" :max="255"></el-slider>
      <el-slider v-model="alpha" :min="0" :max="1" :step="0.1"></el-slider>
    </el-card>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'
export default {
  setup() {
    let state = reactive({
      red: 10,
      green: 99,
      blue: 12,
      alpha: 0.5
    })
    watch(state, (newVal, oldVal) => {
      let red = newVal.red
      let green = newVal.green
      let blue = newVal.blue
      let alpha = newVal.alpha
      window.document.getElementById('app').style.background = `rgba(${red}, ${green}, ${blue}, ${alpha})`
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss">
.box-card {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>