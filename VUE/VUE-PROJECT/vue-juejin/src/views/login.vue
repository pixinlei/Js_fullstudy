<template>
  <div class="page">
    <div class="headTitle">
      <van-icon name="arrow-left" /><span class="title">登录</span>
    </div>
    <div class="icon" style="text-align: center;">
      <van-image style="margin-top:2rem" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <div class="body">
      <van-cell-group>
        <van-field
          placeholder="请输入用户名"
        />
      </van-cell-group>
    </div>
    vant输入框有问题
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.headTitle
  .title
    padding-left 2rem
    box-sizing border-box
    font-size 1rem
</style>