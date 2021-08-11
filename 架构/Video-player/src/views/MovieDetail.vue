<template>
  <TitleBar :title="`电影详情`" :showLeftButton="true" />
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-grid :column-num="1" v-for="(item, index) in  listData" :key="index">
      <van-grid-item square :gutter="10">
        <van-swipe-cell>
          <van-card
            @click="goMovie(item)"
            :num="newMach(item.mach)[1]"
            price="时间"
            :desc="newMach(item.mach)[0]"
            :title="item.title"
            class="goods-card"
            :thumb="item.cover"
          />
        </van-swipe-cell>
      </van-grid-item>
    </van-grid>
  </van-list>
</template>

<script lang="ts">
import { get } from '../util/axios.js'
import TitleBar from '../components/TitleBar.vue'
import { ref, reactive, onMounted, toRefs, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface MovieCover {
  start: number
  end: number
  listData: any
  loading: boolean
  finished: boolean
}
export default {
  components: {
    TitleBar
  },
  setup(props) {
    const Data = reactive<MovieCover>({
      start: 0,
      end: 10,
      listData: [],
      loading: false,
      finished: false
    })
    const route = useRoute()
    const router = useRouter()
    async function getData() {
      let params = {
        name: route.query.name,
        start: Data.start,
        end: Data.end
      }

      await get('/Movie/getMovieByActress', params).then(res => {
        if (res.length) {
          res.forEach(v => {
            Data.listData.push(v)
          })
        } else {
          Data.finished = true
        }
      })
    }

    async function onLoad() {
      Data.start += 10
      await getData()
      Data.loading = false
    }
    onMounted(() => {
      getData()
    })
    let newMach = computed(() => {
      return mach => {
        return mach.split(',')
      }
    })
    function goMovie(item) {
      router.push({
        name: 'Movie',
        query: item
      })
    }
    return {
      getData,
      ...toRefs(Data),
      newMach,
      onLoad,
      goMovie
    }
  }
}
</script>

<style lang="scss">
.goods-card {
  margin: 0;
  background-color: #ffffff;
}
.delete-button {
  height: 100%;
}
</style>