
<template>
  <div>
    <div id="app">
      <button @click="add">增加</button>
      <div class="container" ref="container">
        <div class="scroll-wrapper" :style="style">
          <div v-for="(item, index) in scrollList" :key="index" class="item">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ['测试数据'],
      startIndex: 0,
      endIndex: 60,
      paddingTop: 0,
      paddingBottom: 0,
      allHeight: 0
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    scrollList() {
      console.log(this.startIndex, this.endIndex)
      return this.list.slice(this.startIndex, this.endIndex)
    },
    style() {
      return {
        paddingTop: this.paddingTop + 'px',
        paddingBottom: this.paddingBottom + 'px'
      }
    }
  },
  watch: {
    list(val) {
      const valLen = val.length
      this.allHeight = valLen * 30
      this.paddingBottom = this.allHeight - this.scrollList.length * 30
    }
  },
  mounted() {
    const container = this.$refs.container
    container.addEventListener('scroll', () => {
      const top = container.scrollTop
      this.startIndex = Math.floor(top / 30)
      this.endIndex = this.startIndex + 60
      console.log('top', top)
      this.paddingTop = top
      if (this.endIndex >= this.list.length - 1) {
        this.paddingBottom = 0
        return
      }
      this.paddingBottom = this.allHeight - 600 - top
    })
  },
  methods: {
    add() {
      let arr = new Array(50000).fill(0)
      arr = arr.map((item, index) => {
        return index
      })
      this.list = [...this.list, ...arr]
    }
  }
}
</script>
<style scoped>
.container {
  width: 300px;
  height: 600px;
  overflow: auto;
  border: 1px solid;
  margin: 100px auto;
}
.item {
  height: 29px;
  line-height: 30px;
  border-bottom: 1px solid #aaa;
  padding-left: 20px;
}
</style>