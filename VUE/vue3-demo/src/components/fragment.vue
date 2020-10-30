<template>
  <div>
  <quick :data="left" v-if="left.length" />
  <li>{{flag}}</li> 
  <quick :data="right" v-if="right.length" /> 
  </div>
</template>

<script>
export default {
  name: 'quick',
  props: ['data'],
  setup(props, context) {
    let flag = props.data[0]
    let left = []
    let right = []
    props.data.slice(1).forEach(v => {
      v > flag ? right.push(v) : left.push(v)
    })
    return { left, right, flag}
  }
}
</script>

<style>

</style>