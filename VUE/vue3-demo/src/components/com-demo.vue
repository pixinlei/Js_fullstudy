<template>
  <div>
    <!-- fragment -->
    <ul>
      <FragmentDemo :data="[5,3,1,6,9,4,2,8]" />
    </ul>
  </div>
</template>

<script>
import FragmentDemo from './fragment.vue'
export default {
  components: {
    FragmentDemo
  }
}
</script>

<style>

</style>