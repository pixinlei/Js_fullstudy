<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="leftText"
      :left-arrow="leftArrow"
      @click-left="goback"
    />
    <van-search
      v-model="keyword"
      shape="round"
      background="#42bd56"
      placeholder="请输入搜索关键词"
      @focus="onFocus"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Search, NavBar} from 'vant'
export default {
  components: {
    [NavBar.name]: NavBar,
    [Search.name]: Search
  },
  props: {
    title: {
      type: String,
      default: '首页'
    },
    leftArrow: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const router = useRouter()
    const leftText = ref('')
    leftText.value = props.leftArrow ? '返回' : ''

    function goback() {
      router.go(-1)
    }

    function onFocus() {
      router.push('/search')
    }

    return {
      leftText,
      goback,
      onFocus
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar{
  &::after{
    border-bottom: none;
  }
}

</style>