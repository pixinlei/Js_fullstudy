<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <!-- 底部tabbar -->
    <van-tabbar v-model="tabbarActive" route>
      <van-tabbar-item icon="home-o" to="/Recommend">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/Filter">精美图片</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/Recommend">没想好</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/Recommend">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    let tabbarActive = ref(0)

    return {
      tabbarActive
    }
  }
}
</script>

<style>
::-webkit-scrollbar-track-piece {
  background-color: #f8f8f8;
}

::-webkit-scrollbar {
  width: 9px;

  height: 9px;
}

::-webkit-scrollbar-thumb {
  background-color: #dddddd;

  background-clip: padding-box;

  min-height: 28px;
}

html {
  overflow: -moz-hidden-unscrollable;
  height: 100%;
}

body::-webkit-scrollbar {
  display: none;
  background: red;
}

body {
  -ms-overflow-style: none;
  height: 100%;
  width: calc(100vw + 18px);
  overflow: auto;
}

HTML,
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
li,
dt,
dd,
p,
blockquote,
pre,
form,
fieldset,
table,
th,
td {
  border: none;
  font-family: '微软雅黑', '黑体', '宋体';
  font-size: 14px;
  margin: 0px;
  padding: 0px;
}
html,
body {
  height: 100%;
  width: 100%;
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-style: normal;
  font-weight: normal;
}
a {
  text-decoration: none;
}
a:link {
  color: #fff;
}
a:visited {
  color: #fff;
}
a:hover {
  color: #fff;
}
a:active {
  color: #fff;
}
input::-ms-clear {
  display: none;
}
input::-ms-reveal {
  display: none;
}
input {
  -webkit-appearance: none;
  margin: 0;
  outline: none;
  padding: 0;
}
input::-webkit-input-placeholder {
  color: #ccc;
}
input::-ms-input-placeholder {
  color: #ccc;
}
input::-moz-placeholder {
  color: #ccc;
}
input[type='submit'],
input[type='button'] {
  cursor: pointer;
}
button[disabled],
input[disabled] {
  cursor: default;
}
img {
  border: none;
}
ul,
ol,
li {
  list-style-type: none;
}
/*公共方法*/
.clear {
  clear: both;
}
.clearleft {
  clear: left;
}
.clearright {
  clear: right;
}
.floatleft {
  float: left;
}
.floatright {
  float: right;
}
.cursor {
  cursor: pointer;
}
/*背景及色值表*/
.bg000 {
  background: #000;
}
.color000 {
  color: #000;
}
</style>
