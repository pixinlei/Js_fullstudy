<template>
  <div id="app">
    <Header>
      <i class="iconfont" slot="left-icon">&#xe96d;</i>
      <span slot="content">我的音乐</span>
      <i class="iconfont" slot="right-icon">&#xe67a;</i>
    </Header>
    <tab></tab>

    <keep-alive>
      <router-view/>
    </keep-alive>
    

    <!-- menu -->
    <sidebar></sidebar>
  </div>
</template>
<script>
import Header from '@/components/header'
import sidebar from '@/components/sidebar'
import tab from '@/components/tab'


export default {
  components: {
    Header,
    sidebar,
    tab
  },
}
</script>>
<style lang="stylus">
@font-face {
  font-family: 'iconfont';  /* project id 2052916 */
  src: url('//at.alicdn.com/t/font_2052916_3p150a4hc46.eot');
  src: url('//at.alicdn.com/t/font_2052916_3p150a4hc46.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2052916_3p150a4hc46.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2052916_3p150a4hc46.woff') format('woff'),
  url('//at.alicdn.com/t/font_2052916_3p150a4hc46.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2052916_3p150a4hc46.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(8, 5, 58, 0.9);
  color: #fff;
}

</style>
