<template>
  <div v-for="(item, i) in lists" :key="i">
    <input type="text" value="item.content" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        { content: '0'},
        { content: '1'},
        { content: '2'},
      ]
    }
  }
}
</script>
