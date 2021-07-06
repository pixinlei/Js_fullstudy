<template>
  <div
    class="menu"
    v-for="(item, index) in menu"
    :key="index"
    @click="showChildren(index)"
    @mouseout="changeColor($event, false)"
    @mouseover="changeColor($event, true)"
  >
    <div :class="activeIndex==index ? 'trangle-up' : 'trangle-down'"></div>
    {{item.label}}
    <transition name="fade">
      <div v-if="item.children.length" v-show="activeIndex==index" class="white">
        <MyMenu :menuList="item.children" />
      </div>
    </transition>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: 'MyMenu',
  props: {
    menuList: Array
  },
  setup(props) {
    let activeIndex = ref(-1)
    function showChildren(index) {
      activeIndex.value = activeIndex.value == index ? -1 : index
    }
    const menuList = computed(() => {
      return props.menuList
    })
    let menu = menuList
    function changeColor(e, bool) {
      if (bool) {
        e.target.style.background = 'rgb(236,245,255)'
        // e.target.style.boxShadow = 'inset 26px 26px 53px #bdb8b8,inset -26px -26px 53px #fffafa'
      } else {
        e.target.style.background = ''
        e.target.style.boxShadow = ''
      }
    }
    return {
      menu,
      changeColor,
      showChildren,
      activeIndex
    }
  }
}
</script>

<style scoped lang="scss">
.menu {
  cursor: pointer;
  width: 100%;
  text-align: center;
  line-height: 56px;
  overflow: hidden;
  /* height: 50px; */
  /* margin: 0 auto; */
  /* border-radius: 50px; */
  /* background: linear-gradient(145deg, #eee8e8, #c8c3c3);
  box-shadow: 26px 26px 53px #bdb8b8, -26px -26px 53px #fffafa; */
}
.menu-active {
  background: pink;
}
.trangle-up {
  position: absolute;
  width: 0;
  height: 0;
  margin-left: 215px;
  margin-top: 25px;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-bottom: 6px solid #409eff;
}
.white {
  background: white;
}
.trangle-down {
  position: absolute;
  width: 0;
  height: 0;
  margin-left: 215px;
  margin-top: 25px;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 6px solid #409eff;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
  // transition: height 10s ease;
  // transition: opacity 2s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  // transform: translateY(-56px);
  // height: 56px;
  opacity: 0;
}
</style>