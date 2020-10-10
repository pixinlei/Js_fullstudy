<template>
  <div class="page">
    1
  </div>
</template>

<script>
import api from "@/api";

export default {
  methods: {
    musicUrl() {
      let that = this
      return new Promise((resolve,reject) => {
        // console.log(that.$route.query.id);
        let params = {
          id: that.$route.query.id
        }
        api.musicUrl(params).then((res) => {
          console.log(res);
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
      })
    }
  },
  created() {
    this.musicUrl()
  }
}
</script>

<style>

</style>