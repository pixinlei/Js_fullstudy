<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { L2Dwidget } from 'live2d-widget'
// import {reactive} from 'vue'
export default {
  name: 'app',
  created() {
    let modes = [
      'https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/L2Dwidget/live2d-widget-model-haruto/assets/haruto.model.json',
      'https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/L2Dwidget/live2d-widget-model-nico/assets/nico.model.json',
      'https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/L2Dwidget/live2d-widget-model-hibiki/assets/hibiki.model.json',
      'https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/L2Dwidget/live2d-widget-model-koharu/assets/koharu.model.json',
      'https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/L2Dwidget/live2d-widget-model-ni-j/assets/ni-j.model.json',
      'https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/L2Dwidget/live2d-widget-model-nipsilon/assets/nipsilon.model.json',
      'https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/L2Dwidget/live2d-widget-model-z16/assets/z16.model.json',
      'https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/L2Dwidget/live2d-widget-model-unitychan/assets/unitychan.model.json',
      'https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/L2Dwidget/live2d-widget-model-miku/assets/miku.model.json',
      'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json',
      'https://unpkg.com/live2d-widget-model-chitose@1.0.5/assets/chitose.model.json',
      'https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json',
      'https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json',
      'https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json'
    ]
    // L2Dwidget.init({
    //   model: {
    //     jsonPath: modes[Math.round(Math.random() * modes.length)],
    //     dialog: {
    //       enable: true,
    //       script: {
    //         //每20s，显示一言（调用一言Api返回的句子）
    //         'every idle 20s': '$hitokoto$',
    //         //触摸到class='star'对象
    //         'hover .star': '星星在天上而你在我心里 (*/ω＼*)',
    //         //触摸到身体
    //         'tap body': '害羞⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄',
    //         //触摸到头部
    //         'tap face': '~~'
    //       }
    //     },
    //     display: { "position": "right", "width": 900, "height": 200, "hOffset": 0, "vOffset": 0 },
    //     mobile: { "show": true, "scale": 0.5 },
    //   }
    // })
    console.log(L2Dwidget)
    L2Dwidget.init({
      model: {
        jsonPath: modes[Math.round(Math.random() * modes.length)],
        scale: 1,
        hHeadPos: 0.5,
        vHeadPos: 0.618
      },
      display: { position: 'right', width: 300, height: 400, hOffset: 0, vOffset: 0, opacity: 0.4 },
      mobile: { show: true, scale: 0.5 },
      react: { opacityDefault: 0.7, opacityOnHover: 0.2, opacity: 0.1 },
      // dialog: {
      //   enable: true,
      //   script: {
      //     // //每20s，显示一言（调用一言Api返回的句子）
      //     // 'every idle 20s': '$hitokoto$',
      //     // //触摸到class='star'对象
      //     // 'hover .star': '星星在天上而你在我心里 (*/ω＼*)',
      //     // //触摸到身体
      //     // 'tap body': '害羞⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄',
      //     // //触摸到头部
      //     // 'tap face': '~~11'
      //     'tap body': '哎呀！别碰我！',
      //     'tap face': '人家是在认真写博客哦--前端妹子',
      //     'tap': '1111111111111111'
      //   }
      // }

      'dialog': {
        // 开启对话框
        enable: true,
        hitokoto: true,
        script: {
          // 当触摸到角色身体
          'tap body': '哎呀！别碰我！',
          // 当触摸到角色头部
          'tap face': '人家是在认真写博客哦--前端妹子',
        }
      }
    })
    // L2Dwidget.on('*', name => {
    //   console.log('事件为： ' + name)
    // })
  }
}
</script>

<style>
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
