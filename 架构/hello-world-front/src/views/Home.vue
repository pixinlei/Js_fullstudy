<template>
  <!-- 手机 -->
  <!-- <div class="page" v-if="!isPc">
    <el-drawer title v-model="showLeftMenu" direction="ltr" size="80%">

    </el-drawer>
  </div>-->
  <div class="flex">
    <el-menu default-active="2" class="el-menu-vertical-demo" @select="handleSelect" router>
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
    </el-menu>
    <router-view />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    let isPc = window.sessionStorage.getItem('pc')
    let activeIndex = ref<string>('1')
    let showLeftMenu = ref(true)
    function handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
    return {
      activeIndex,
      handleSelect,
      showLeftMenu,
      isPc
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  width: 300px;
  height: 100vh;
}
</style>