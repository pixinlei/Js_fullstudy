<template>
  <div>111</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    axios.get('list').then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style>
</style>