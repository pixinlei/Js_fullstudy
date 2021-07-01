<template>
  <!-- 手机 -->
  <!-- <div class="page" v-if="!isPc">
    <el-drawer title v-model="showLeftMenu" direction="ltr" size="80%">

    </el-drawer>
  </div>-->
  <div class="page">
    <div class="topMenu">
      <el-row style="height:65px;">
        <el-col :span="23">
           
          <colorSelect/>
        </el-col>
        <el-col :span="1" class="img-wrapper">
          <img src="../assets/default_avator.jpg" alt />
        </el-col>
      </el-row>
    </div>
    <div class="flex">
      <!-- <el-menu default-active="2" class="el-menu-vertical-demo" @select="handleSelect" router>
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-menu"></i>
          <span>动画</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="tarot">塔罗牌</el-menu-item>
          <el-menu-item index="eCharts">ECharts</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-menu"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <template #title>导航四</template>
      </el-menu-item>
      </el-menu>-->

      <div class="leftMenu" ref="leftMenu" :style="`width:${changedWidth}px`"></div>
      <div class="drop-line" ref="dropLine" @mousemove="changeWidthMove($event)" @mousedown="changeWidthDown" @mouseup="changeWidthUp"></div>
      <router-view />
    </div>
  </div>
</template>

<script>
import colorSelect from '../components/colorSelect.vue'
import { onMounted, ref } from 'vue'
export default {
  components:{
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