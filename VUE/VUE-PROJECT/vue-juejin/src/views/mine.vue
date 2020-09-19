<template>
  <div class="mine">
  <div class="head">
    <van-cell value="" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" width="80rem" height="80rem">
        <span class="custom-title">登录/</span>
        <span class="custom-title">注册</span>
      </template>
    </van-cell>
  </div>

  <div class="center">
    <van-cell :title="item.title" v-for="(item, index) in items" :key="index" class="iconfont" :class="item.class">
      <template #right-icon>
      </template>
    </van-cell>
  </div>
  <div class="bottom">
    <van-cell :title="item.title" v-for="(item, index) in bottomitem" :key="index" class="iconfont" :class="item.class">
      <template #right-icon>
      </template>
    </van-cell>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {class:'icon-lingdang', title:'消息中心'},
        {class:'icon-zan', title:'我赞过的'},
        {class:'icon-xingzhuang60kaobei2', title:'收藏集'},
        {class:'icon-bao', title:'已购'},
        {class:'icon-yanjing', title:'阅读过的文章'},
        {class:'icon-biaoqian', title:'标签管理'},
      ],
      bottomitem: [
        {class:'icon-yijianfankui', title:'意见反馈'},
        {class:'icon-shezhi', title:'设置'},

      ]
    }
  }
}
</script>

<style>
  .mine {
    background-color: #bfbfbf;
  }
  .head {
    margin-bottom: 1rem;
    box-sizing: border-box;
  }
  img {
    vertical-align: middle;
    border-radius: 50%;
  }
  .custom-title {    
    margin-right: 4px;
    
    vertical-align: middle;
  }
  .bottom {
    margin-top: 1rem;
  }
  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>