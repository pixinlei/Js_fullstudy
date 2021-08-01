<template>
  <van-search v-model="searchValue" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
  <!-- 顶部标签栏 -->
  <van-tabs v-model:currentActive="currentActive" animated>
    <van-tab :to="item.value" type="card" swipeable sticky v-for="(item, index) in tabList" :key="index" :title="item.label" @click="changeTable(index)">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </van-tab>
  </van-tabs>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
export default {
  setup() {
    let currentActive = ref(0)
    let searchValue = ref('')
    let tabList = reactive([
      {value: 'Recommend', label: '演员'},
      {value: 'Recommend', label: '演员'},
      {value: 'Recommend', label: '演员'},
      {value: 'Recommend', label: '演员'},
      {value: 'Recommend', label: '演员'},
      {value: 'Recommend', label: '演员'},
      {value: 'Recommend', label: '演员'},
      {value: 'Recommend', label: '演员'},
      {value: 'Recommend', label: '演员'},
      {value: 'Recommend', label: '演员'},
      {value: 'Recommend', label: '演员'},
    ])

    function changeTable(index) {
      currentActive.value = index
    }
    // 第一次先加载
    changeTable(0)
    return {
      tabList,
      searchValue,
      currentActive,
      changeTable
    }
  }
}
</script>

<style scoped lang="scss">
</style>