<template>
  <TitleBar :title="movieTitle" :showLeftButton="true" />
  <iframe class="movie" :src="movieUrl" frameborder="0" width="100%" height="200"></iframe>
  <van-row v-for="(item, index) in xunleiHref" :key="index">
    <van-col span="24">
      <a :href="xunleiHref.magnetic">{{xunleiHref.magneticTitle}}</a>
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
    const route = reactive(useRoute())
    const queryData:any = route.query

    const swipeList = computed(() => {
      let list: any = queryData?.previewPicture
      // return list.split(',')
      return ['https://img2.baidu.com/it/u=1052437823,2294515059&fm=26&fmt=auto&gp=0.jpg']
    })
    const xunleiHref = computed(() => {
      let magnetic: [] = queryData?.magnetic.split(',')
      let magneticTitle :any = queryData.magnetic.split(',')
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
img {
  display: none !important;
}
</style>