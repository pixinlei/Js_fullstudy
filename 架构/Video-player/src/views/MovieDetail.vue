<template>
  <TitleBar :title="`电影详情`" :showLeftButton="true" />
  <van-grid :column-num="2" v-for="(item, index) in  ListData" :key="index">
    <van-grid-item square :gutter="10">
      <van-swipe-cell>
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card" thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </van-grid-item>
  </van-grid>
</template>

<script lang="ts">
import { get } from '../util/axios.js'
import TitleBar from '../components/TitleBar.vue'
import { ref, reactive, onMounted, toRefs} from 'vue'
export default {
  components: {
    TitleBar
  },
  props: {
    name: {
      type: String,
      default: '渡辺まお'
    }
  },
  setup(props) {
    const Data = reactive({
      start: 0,
      end: 10,
      listData: []
    })
    function InitData() {
      let params = {
        name: props.name,
        start: Data.start,
        end: Data.end
      }
      get('/Movie/getMovieByActress', params).then(res => {
        console.log(res)
        if (res.length) {
          res.forEach(v => {
            Data.listData.push(v)
          })
        }
      })
    }
    onMounted(() => {
        InitData()
    })
    return {
      InitData,
       ...toRefs(Data)
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