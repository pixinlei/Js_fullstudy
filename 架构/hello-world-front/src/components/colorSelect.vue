<template>
  <div>
    11111
    <input type="color" v-model="color" />
  </div>
</template>

<script>
import { watch, ref } from 'vue'

export default {
  setup() {
    let color = ref(null)

    function change(v) {
      console.log(v) // #000000
    }
    watch(color, newVal => {
      console.log(newVal)
    })
    return {
      color,
      change
    }
  }
}
</script>

<style>
</style>