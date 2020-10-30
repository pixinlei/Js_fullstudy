<template>
  <div>
    <h1>我是一个异步组件</h1>
  </div>
</template>

<script>
function sleep(timeout) {
  return new Promise(resolve => setTimeout(resolve,timeout))
}
export default {
  name: 'AsyncComponent',
  props: {
    timeout: {
      type: Number,
      required: true
    }
  },
  async setup(props) {
    await sleep(props.timeout)
  }
}
</script>

<style>

</style>