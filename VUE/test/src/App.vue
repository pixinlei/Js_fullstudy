<template>
  <div>
    <input type="text" @input="change" :value="msg" />
    {{msg}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello world'
    }
  },
  methods: {
    change(e) {
      this.msg = e.target.value
    }
  }
}
</script>

<style>
</style>