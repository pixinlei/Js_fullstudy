<template>
  <div
    class="menu"
    v-for="(item, index) in menu"
    :key="index"
    @click.self="showChildren(index, item)"
    @mouseout="changeColor($event, false)"
    @mouseover="changeColor($event, true)"
  >
    <div :class="activeIndex==index ? 'trangle-up' : 'trangle-down'"></div>
    {{item.label}}
    <el-collapse-transition>
      <transition name="fade">
        <div v-if="item.children.length" v-show="activeIndex==index" class="white">
          <MyMenu :menuList="item.children" />
        </div>
      </transition>
    </el-collapse-transition>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import {useRouter} from 'vue-router'
export default {
  name: 'MyMenu',
  props: {
    menuList: Array
  },
  setup(props) {
    const router = useRouter()
    let activeIndex = ref(-1)
    function showChildren(index, item) {
      if (item.children && item.children.length) {
        activeIndex.value = activeIndex.value == index ? -1 : index
      } else {
        
        console.log(router);
        router.push({
          path: `${item.label}`
        })
      }
    }


    const menuList = computed(() => {
      return props.menuList
    })
    let menu = menuList
    function changeColor(e, bool) {
      if (bool) {
        e.target.style.background = 'rgb(236,245,255)'
      } else {
        e.target.style.background = ''
        e.target.style.boxShadow = ''
      }
    }
    return {
      menu,
      changeColor,
      showChildren,
      activeIndex,
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
  transition: all 0.2s ease;
  // transition: height 10s ease;
  // transition: opacity 2s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  // transform: translateY(-56px);
  // height: 56px;
  // opacity: 0;
  height: 56px;
}
</style>