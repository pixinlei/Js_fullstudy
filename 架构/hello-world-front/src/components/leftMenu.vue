<template>
  <div class="page">
    <div class="top">顶部导航</div>
    <div id="box">
      <div id="left">主界面</div>
      <div id="resize"></div>
      <div id="right" v-bind:style="{ width: detailWidth + 'px' }">侧边栏 width: {{ detailWidth }}</div>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page',
  props: {
    msg: String
  },
  data: function () {
    return {
      detailWidth: 200
    }
  },
  methods: {
    dragControllerDiv: function () {
      // 保留this引用
      let data = this
      let resize = document.getElementById('resize')
      resize.onmousedown = function (e) {
        // 颜色改变提醒
        resize.style.background = '#818181'
        let startX = e.clientX
        resize.left = resize.offsetLeft
        document.onmousemove = function (e) {
          // 计算并应用位移量
          let endX = e.clientX
          let moveLen = endX - startX
          startX = endX
          data.detailWidth -= moveLen
        }
        document.onmouseup = function () {
          // 颜色恢复
          resize.style.background = ''
          document.onmousemove = null
          document.onmouseup = null
        }
        return false
      }
    }
  },
  mounted() {
    this.dragControllerDiv()
  }
}
</script>

<style scoped>
#box {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  display: flex;
}
.top {
  width: 100%;
  height: 80px;
  background: #ffe0c6;
}
#left {
  height: 100%;
  background: #ffc5c1;
  flex: 1;
}

#resize {
  width: 5px;
  height: 100%;
  cursor: w-resize;
}

#right {
  height: 100%;
  background: #ffc0cb;
}
</style>
