<template>
  <!-- 手机 -->
  <!-- <div class="page" v-if="!isPc">
    <el-drawer title v-model="showLeftMenu" direction="ltr" size="80%">

    </el-drawer>
  </div>-->
  <div class="page" @mouseup="changeWidthUp">
    <div
      class="topMenu"
      :style="` background-image: linear-gradient(90deg, ${colors.color1}, ${colors.color2},${colors.color3},${colors.color4},${colors.color5},${colors.color6})`"
    >
      <el-row style="height:65px;" class="flex align-center">
        <el-col :span="9"></el-col>
        <el-col :span="3" class="flex-center">
          <h1>{{title}}</h1>
        </el-col>
        <el-col :span="9"></el-col>
        <el-col :span="3" class="img-wrapper">
          <router-link to="setting" class="flex-center">
            <img src="../assets/default_avator.jpg" alt />
            <span class="ml20 black">{{`默认用户`}}</span>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <div class="flex">
      <div class="leftMenu" ref="leftMenu" :style="`width:${changedWidth}px`"></div>
      <div class="drop-line" id="resize"></div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { get } from '../util/axios'
import { ref, toRefs, onMounted,reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    // colorSelect
  },
  setup() {
    let store = useStore()
    let route = useRoute()
    let title = ref(route.meta.title)
    let isPc = window.sessionStorage.getItem('pc')
    let activeIndex = ref('1')

    function initColor() {
      let colors = store.state.user.colors
      return colors
    }

    async function initSetting() {
      let id = window.localStorage.getItem('id')
      await get('users/setting', { id }).then(res => {
        store.commit('user/SET_USER_THEME_COLOR', res)
      })
      let colors = await initColor()
      return { colors }
    }
    let settings = reactive({
      colors: {
        color1: '#5A2BA7',
        color2: '#BE1A92',
        color3: '#F64173',
        color4: '#FF7F57',
        color5: '#FFBD4E',
        color6: '#F9F871'
      }
    })
    onMounted(() => {
      let temp = initSetting()
      settings = temp
    })

    return {
      title,
      activeIndex,
      isPc,
      ...toRefs(settings)
    }
  },
  data() {
    return {
      changedWidth: 250
    }
  },
  methods: {
    saveThis() {
      return this
    },
    dragControllerDiv: function () {
      // 保留this引用
      let self = this.saveThis()
      let resize = document.getElementById('resize')
      resize.onmousedown = function (e) {
        // 颜色改变提醒
        // resize.style.background = '#818181'
        let startX = e.clientX
        resize.left = resize.offsetLeft
        document.onmousemove = function (e) {
          // 计算并应用位移量
          let endX = e.clientX
          let moveLen = endX - startX
          startX = endX
          if (!(self.changedWidth <= 100 && moveLen < 0)) {
            self.changedWidth += moveLen
          }
        }
        document.onmouseup = function () {
          // 颜色恢复
          // resize.style.background = '#000'
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
  width: 10px;
  height: 94vh;
  // background: #ebeef5;
  cursor: w-resize;
  margin-left: -5px;
}
.topMenu {
  width: 100vw;
  height: 65px;
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
  span {
    cursor: pointer;
  }
}
</style>