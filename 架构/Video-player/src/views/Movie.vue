<template>
  <TitleBar :title="movieTitle" :showLeftButton="true" />
  <div style="width:100%;height:200px;position:relative;">
    <iframe class="movie" :src="movieUrl" frameborder="0" width="100%" height="200"></iframe>
    <a :href="movieUrl" style="width:100%;height:100%;zIndex:10;position:absolute;left:0;top:0;">11111111</a>
  </div>
  <van-row v-for="(item, index) in xunleiHref" :key="index">
    <van-col span="24">
      <div>
        <a :href="item.magnetic">{{item.magneticTitle}}</a>
      </div>
    </van-col>
  </van-row>
  <Swiper :swipeList="swipeList" />
</template>

<script lang="ts">
import TitleBar from '../components/TitleBar.vue'
import Swiper from '../components/Swiper.vue'
import { useRoute } from 'vue-router'
import { toRefs, computed, reactive } from 'vue'
export default {
  components: {
    TitleBar,
    Swiper
  },
  setup() {
    setTimeout(() => {console.log(xunleiHref.value.magneticTitle);}, 5000)
    const route = reactive(useRoute())
    const queryData:any = route.query

    const swipeList = computed(() => {
      let list: any = queryData?.previewPicture
      return list.split(',')
      // return ['https://img2.baidu.com/it/u=1052437823,2294515059&fm=26&fmt=auto&gp=0.jpg']
    })
    const xunleiHref = computed(() => {
      let magnetic: [] = queryData?.magnetic.split(',')
      let magneticTitle :[] = queryData?.magneticTitle.split(',')
      let result:any = []

      magnetic.forEach((v,i) => {
        result.push({
          magnetic: magnetic[i],
          magneticTitle: magneticTitle[i]
        })
      })      
      
      return result
    })
    return {
      ...toRefs(queryData),
      swipeList,
      xunleiHref
    }
  }
}
</script>

<style lang="scss">
.movie {
  margin-top: 20px;
  margin-bottom: 20px;
}
a {
  // background: red;
  color: black;
}
a:link {
  color: black;
}
// img {
//   display: none !important;
// }
</style>