<template>
  <van-nav-bar
    :safe-area-inset-top="true"
    :placeholder="true"
    title="影片群组"
    border
    fixedtitle="标题"
    :left-arrow="showLeftButton"
    @click-left="onClickLeft"
  />
  <van-sticky>
    <van-dropdown-menu>
      <van-dropdown-item v-model="currentDropdown1" :options="optionList1" />
      <van-dropdown-item @change="changeListType" v-model="currentDropdown2" :options="optionList2" />
    </van-dropdown-menu>
  </van-sticky>
  <template v-if="currentList.length">
    <!-- <ul v-infinite-scroll="load" class="list-wrapper" v-for="(item, index) in currentList" :key="index" style="overflow:auto;height:100%">
      <van-row>
        <van-col span="24">
          <van-swipe-cell>
            <van-card :price="item.movieCount" desc="电影数量" :title="item.title" class="goods-card" :thumb="item.cover" />
          </van-swipe-cell>
        </van-col>
      </van-row>
    </ul>-->
    <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh"> -->
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="load">
        <van-cell v-for="(item, index) in currentList" :key="index" :title="item.title" />
      </van-list>
    <!-- </van-pull-refresh> -->
  </template>
  <van-empty description="没有更多了" v-if="!currentList.length" />
</template>

<script lang="ts">
import { get } from '../util/axios.js'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

interface MovieCoverData {
  cover: string
  href: string
  movieCount: string
  title: string
}
export default {
  setup() {
    let params = reactive({
      start: 0,
      end: 10
    })
    let refreshing = false
    let loading = ref(false)
    let finished = ref(false)
    async function load() {
      params.start += 10
      await getListData()
    }
    function onRefresh() {
      finished.value = false
      params.start = 0
      currentList = []
      getListData()
    }
    function getListData() {
      loading.value = true
      get('/Movie/actress', params).then(res => {
        console.log(res)
        if (!res.length) {
          finished.value = true
          return
        }
        res.forEach((v: MovieCoverData) => {
          currentList.push(v)
        })
        loading.value = false
      })
    }
    getListData()
    let currentList: MovieCoverData[] = reactive([])

    let optionList1 = reactive([
      { text: '女优', value: 0 },
      { text: '女优', value: 1 },
      { text: '女优', value: 2 }
    ])
    let currentDropdown1 = optionList1[0].value

    let optionList2 = reactive([
      { text: '列表', value: 0 },
      { text: '网格', value: 1 }
    ])
    let currentDropdown2 = optionList2[0].value
    let showLeftButton = ref(false)
    let router = useRouter()
    function onClickLeft() {
      router.go(-1)
    }
    // 列表展示方式
    let ListType = ref(true)
    function changeListType(value) {
      currentDropdown2 = optionList2[value].value
      if (value == 0) ListType.value = true
      if (value == 1) ListType.value = false
    }
    return {
      onClickLeft,
      showLeftButton,
      currentDropdown1,
      optionList1,
      currentDropdown2,
      optionList2,
      changeListType,
      ListType,
      currentList,
      load,
      loading,
      finished,
      refreshing,
      onRefresh
    }
  }
}
</script>

<style scoped lang="scss">
.goods-card {
  margin: 0;
  background-color: white;
}
</style>