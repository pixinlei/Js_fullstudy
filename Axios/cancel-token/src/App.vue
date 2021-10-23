<template>
  <div id="app">
    111111111
    <button @click="getList">111</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      CancelToken: null,
      cancel: null
    }
  },
  created() {
    this.CancelToken = axios.CancelToken
    setTimeout(() => {
      for(let i=0;i<10;i++) {
        this.getList()
      }
    }, 2000)
  },
  methods: {
    getList() {
      let self = this
      axios.get("http://localhost:3000/Movie/actressDetail?start=0&end=2000", {}, {
        cancelToken: new self.CancelToken(function executor(c) {
          self.cancel = c
        })
      })
    }
  },
}
</script>

<style>

</style>
