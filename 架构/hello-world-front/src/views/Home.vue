<template>
  <!-- 手机 -->
  <!-- <div class="page" v-if="!isPc">
    <el-drawer title v-model="showLeftMenu" direction="ltr" size="80%">

    </el-drawer>
  </div>-->
  <div class="page" @mouseup="changeWidthUp">
    <div class="topMenu">
      <el-row style="height:65px;">
        <el-col :span="23">
          <colorSelect />
        </el-col>
        <el-col :span="1" class="img-wrapper">
          <img src="../assets/default_avator.jpg" alt />
        </el-col>
      </el-row>
    </div>
    <div class="flex">
      <div class="leftMenu" ref="leftMenu" :style="`width:${changedWidth}px`"></div>
      <div class="drop-line" ref="dropLine" @mousemove="changeWidthMove($event)" @mousedown="changeWidthDown"></div>
      <router-view />
    </div>
  </div>
</template>

<script>
import colorSelect from '../components/colorSelect.vue'
import { onMounted, ref } from 'vue'
export default {
  components: {
    colorSelect
  },
  setup() {
    let color1 = ref(null)
    let isPc = window.sessionStorage.getItem('pc')
    let activeIndex = ref('1')
    let showLeftMenu = ref(true)
    function handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }

    let dropLine = ref(null)
    let leftMenu = ref(null)

    let changedWidth = ref(250)
    let mouse_x = 0
    let changeWidth = {
      changeWidthMove: function (e) {
        if (!changeWidth.isChangeWidth) return
        changedWidth.value = e.clientX - mouse_x > 0 ? e.clientX - mouse_x : 1
      },
      changeWidthDown: function (e) {
        changeWidth.isChangeWidth = true
        mouse_x = e.clientX - leftMenu.value.offsetWidth
      },
      changeWidthUp: function () {
        console.log('up')
        changeWidth.isChangeWidth = false
      },
      isChangeWidth: false
    }
    return {
      color1,
      activeIndex,
      handleSelect,
      showLeftMenu,
      isPc,
      dropLine,
      leftMenu,
      changeWidthMove: changeWidth.changeWidthMove,
      changeWidthDown: changeWidth.changeWidthDown,
      changeWidthUp: changeWidth.changeWidthUp,
      changedWidth
    }
  }
}
</script>

<style lang="scss" scoped>
// .el-menu-vertical-demo {
//   width: 300px;
//   height: 80vh;
//   position: relative;
//   margin-top: 20vh;
// }
.page {
  height: 100vh;
  overflow: hidden;
}
.leftMenu {
  width: 250px;
  height: 94vh;
  border-right: 1px solid #e4e7ed;
  position: relative;
  // bottom: 0;
  // top: 6vh;
  // background: #000;
}
.drop-line {
  position: relative;
  width: 30px;
  height: 94vh;
  // background: #ebeef5;
  cursor: w-resize;
  margin-left: -15px;
}
.topMenu {
  width: 100vw;
  height: 6vh;
  border-bottom: 1px solid #e4e7ed;
  // background: #000;
}
.topMenu img {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.img-wrapper {
  display: flex;
  align-items: center;
  // background: #000;
}
</style>