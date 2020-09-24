<template>
  <div id="app">
    {{this.$store.state.count}}||{{this.$store.getters.getCount}}
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  methods: {
    add () {
      this.$store.commit('addCount', 1)
    }
  }
}
</script>

<style>

</style>