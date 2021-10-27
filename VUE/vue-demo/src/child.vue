<template>
  <div>这里是子组件
      props: {{validatorDemo}}
  </div>
</template>

<script>
export default {
  props: {
    validatorDemo: {
      type: String,
      validator: function (value) {
        if (value === 0) return false
        return true
      }
    }
  }
}
</script>

<style>
</style>