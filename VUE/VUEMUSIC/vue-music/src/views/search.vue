<template>
  <div class="search">
    <div class="search-box-wrapper">
      <searchBox @query="onQueryChange"></searchBox>
    </div>
    <!-- 热搜 -->
    <div v-show="!query" class="shortcut-wrapper" ref="shortcutWrapper">
      <scroll class="shortcut" ref="shortcut">
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item, index) in hotKey" :key="index">
              <span>{{item.first}}</span>
              </li>
            </ul>
          </div>
          <div class="search-history" v-show="searchHistory.length">
            <h1 class="title" >
              <span class="text" >搜索历史</span>
              <span class="clear">
                <i class="iconfont" @click="clearSearchHistory">&#xe62b;</i>
              </span>
            </h1>
            <!--历史列表 -->
            <searchList :searches="searchHistory" @delete="deleteSearchHistory"></searchList>
          </div>
        </div>
      </scroll>
    </div>
    <!--搜索结果列表 -->
    <div class="search-result" ref="searchResult" v-show="query">
      <searchResult :query="query" @select="saveSearch"></searchResult>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import { searchMixin } from '@/common/js/mixin'
import scroll from '@/components/scroll'
import api from '@/api'
import searchList from '@/components/searchList'
import { mapGetters, mapActions } from 'vuex'
import searchResult from '@/components/searchResult'

export default {
  watch: {
    query (newQuery) {
      if (newQuery) {
        setTimeout(() => {
          this.$refs.shortcut.refresh()
        },20)
      }
    }
  },
  computed: {
    ...mapGetters(['searchHistory'])
  },
  components: {
    searchBox,
    scroll,
    searchList,
    searchResult
  },
  mixins:[searchMixin],
  methods: {
    saveSearch () {
      // 保存历史记录
      this.searchHistory(this.query)
    },
    _getHotKey () { // 获取热门搜索
      api.HotSearchKey().then((res) => {
        // console.log(res.data.result.hots);
        this.hotKey =  res.result.hots.slice(0, 10)
      })
    },
    ...mapActions(['deleteSearchHistory','clearSearchHistory','searchHistory'])
  },
  created () {
    this._getHotKey()
  },
  data () {
    return {
      hotKey: [],
    }
  }
  
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function.styl";
.search 
  overflow hidden
  .search-box-wrapper 
    margin px2rem(40px)
  
  .shortcut-wrapper 
    position fixed
    top px2rem(360px)
    bottom 0
    width 100%
    .shortcut 
      height 100%
      overflow hidden
      .hot-key 
        margin 0 px2rem(40px) px2rem(40px) px2rem(40px)
        .title 
          margin-bottom px2rem(40px)
          font-size 14px
          color hsla(0,0%,100%,.5)
        
        .item 
          display inline-block
          padding px2rem(10px) px2rem(20px)
          margin 0 px2rem(20px) px2rem(20px) 0
          border-radius 6px
          background #2f3054
          font-size 14px
          color hsla(0,0%,100%,.3)
        
      
      .search-history 
        position relative
        margin 0 px2rem(40px)
        .title 
          display flex
          align-items center
          height px2rem(80px)
          font-size 14px
          color hsla(0,0%,100%,.5)
          .text 
            flex 1
          
          .clear 
            // extend-click()
            .icon 
              font-size 18px
              color hsla(0,0%,100%,.3)
  .search-result 
    position fixed
    width 100%
    top px2rem(360px)
    bottom 0
  

</style>
