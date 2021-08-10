<template>
  <div class="page" :style="`width:${width}vw;height:${height}vh`">
    <div
      :ref="`TabItem${index}`"
      @click="change(item, index)"
      style="flex:1;justifyContent:center;display:flex;position:relative;"
      :class="`listItem${index}`"
      v-for="(item, index) in list"
      :key="index"
      :style="(styles,activeItemStyle(index))"
    >{{item}}</div>
    <div class="line" ref="lineRef" :style="OriginlineStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    speed: {
      type: Number,
      default: 10
    },
    list: {
      type: Array,
      default: () => ['用户管理', '配置管理', '角色管理', '定时任务补偿']
    },
    width: {
      type: [Number, String],
      default: 100
    },
    height: {
      type: [Number, String],
      default: 5.91
    },
    styles: {
      type: Object,
      default: () => {
        return {}
      }
    },
    activeItem: {
      type: Object,
      default: () => {
        return {
          color: '#303133',
          fontFamily: 'PingFangSC-Medium, PingFang SC',
          fontWeight: 500
        }
      }
    },
    lineWidth: {
      type: [String, Number],
      default: 5
    },
    lineHeight: {
      type: [String, Number],
      default: 3
    },
    lineStyle: {
      type: Object,
      default: () => {
        return {
          background: '#3F9EFF',
          bottom: `0px`
        }
      }
    }
  },
  data() {
    return {
      active: 0,
      beforeLineLocation: 0, // 上一次的横线位置
      afterLineLocation: 0 //当前的横线位置
    }
  },
  methods: {
    change(item, index) {
      this.active = index
      this.changeLineLocation(index)
    },
    async changeLineLocation(index = 0) {
      // 修改横线位置
      this.afterLineLocation = Math.round(
        this.$refs[`TabItem${index}`][0].offsetLeft + this.$refs[`TabItem${index}`][0].clientWidth / 2 - this.$refs.lineRef.clientWidth / 2
      )
      while (this.beforeLineLocation != this.afterLineLocation) {
        await this.animationFn(this.speed)
      }
    },
    async animationFn(time) {
      if (this.beforeLineLocation > this.afterLineLocation) {
        this.beforeLineLocation -= Math.abs(Math.abs(this.beforeLineLocation) - Math.abs(this.afterLineLocation)) / 10
      } else if (this.beforeLineLocation < this.afterLineLocation) {
        this.beforeLineLocation += Math.abs(Math.abs(this.beforeLineLocation) - Math.abs(this.afterLineLocation)) / 10
      }
      await this.sleep(time)
    },
    sleep(time) {
      return new Promise(resolve => {
        setTimeout(resolve, time)
      })
    }
  },
  mounted() {
    // 初始化横线位置
    this.changeLineLocation()
  },
  computed: {
    activeItemStyle() {
      return index => {
        if (index == this.active) return this.activeItem
        return {}
      }
    },
    OriginlineStyle() {
      let originObj = {
        position: 'absolute',
        width: `${this.lineWidth}vw`,
        height: `${this.lineHeight}px`,
        left: `${this.beforeLineLocation}px`,
        bottom: `0px`,
        'z-index': 1
      }
      return Object.assign(originObj, this.lineStyle)
    }
  }
}
</script>

<style scoped>
.page {
  display: flex;
  align-items: center;
  position: relative;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #606266;
  line-height: 24px;
}
</style>