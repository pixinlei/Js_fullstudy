<template>
  <!-- 手机 -->
  <!-- <div class="page" v-if="!isPc">
    <el-drawer title v-model="showLeftMenu" direction="ltr" size="80%">

    </el-drawer>
  </div>-->
  <div class="page" @mouseup="changeWidthUp">
    <div
      class="topMenu"
      :style="` background-image: linear-gradient(90deg, ${initColor().color1},${initColor().color2},${initColor().color3},${initColor().color4},${initColor().color5},${initColor().color6})`"
    >
      <el-row style="height:65px;" class="flex align-center">
        <el-col :span="9"></el-col>
        <el-col :span="3" class="flex-center">
          <h1>{{title}}</h1>
        </el-col>
        <el-col :span="9"></el-col>
        <el-col :span="3" class="img-wrapper">
          <router-link to="setting" class="flex-center">
            <img class="bdrs50" v-if="!initUserInformation().avator" src="../assets/default_avator.jpg" alt />
            <img class="bdrs50" v-else :src="initUserInformation().avator" alt="头像" />
            <span class="ml20 black">{{initUserInformation().nickname ? initUserInformation().nickname :`默认用户`}}</span>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <div class="flex">
      <div class="leftMenu" ref="leftMenu" :style="`width:${changedWidth}px;`">
        <MyMenu :menuList="menuList" />
      </div>
      <div class="drop-line" id="resize"></div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from '../components/leftMenuItem.vue'
import { get } from '../util/axios'
import { ref, toRefs, onMounted, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    MyMenu: Menu
    // colorSelect
  },
  setup() {
    let menuList = reactive([
      {
        label: '图表',
        children: [{ label: 'echarts', children: [] }]
      }
    ])
    let store = useStore()
    let route = useRoute()
    let title = ref(route.meta.title)
    let isPc = window.sessionStorage.getItem('pc')
    let activeIndex = ref('1')

    function initColor() {
      let colors = store.state.user.colors
      return colors[0]
    }
    function initUserInformation() {
      let username = window.localStorage.getItem('username')
      let avator = window.localStorage.getItem('avator')
      let nickname = window.localStorage.getItem('nickname')

      let user = {
        username,
        avator,
        nickname
      }
      return user
    }
    async function initSetting() {
      let id = window.localStorage.getItem('id')
      await get('users/setting', { id }).then(res => {
        store.commit('user/SET_USER_THEME_COLOR', res)
      })
    }
    initSetting()
    //  async function a() {
    //    await initSetting()
    //    await initColor()
    //    await console.log(initColor());
    //  }
    //  a()
    return {
      initUserInformation,
      initColor,
      initSetting,
      title,
      activeIndex,
      isPc,
      menuList
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
  min-width: 250px;
  height: 94vh;
  border-right: 1px solid #e4e7ed;
  position: relative;
  // border-radius: 50px;
  border-radius: 0 20px 8px 0;
  overflow: hidden;
  box-shadow: 26px 26px 53px #b5a2a2, -26px -26px 53px #f5dbdb;
}
// .leftMenu::after {
//   content: '';
//   width: 250px;
//   height: 94vh;
//   background: inherit;
//   position: absolute;
//   left: 0px; //giving minus -25px left position
//   right: 0;
//   top: 0px; //giving minus -25px top position
//   bottom: 0;
//   box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.3);
//   filter: blur(10px);
// }
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
}
.topMenu:before {
  content: '';
  width: 100vw;
  height: 100px;
  background: inherit;
  position: absolute;
  left: 0px; //giving minus -25px left position
  right: 0;
  top: -25px; //giving minus -25px top position
  bottom: 0;
  box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.3);
  filter: blur(10px);
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