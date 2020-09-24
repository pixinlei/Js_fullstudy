#  前端路由

1. 如何改变url，却不引起页面的刷新
2. 如何知道url变化

hash
通过hashchange事件监听url的变化
改变url的方式：
  - 通过浏览器前进后退来改变url
  - 通过a标签改变url
  - 通过window.location改变url
以上这几种情况改变url都会触发hashchange事件

history 
提供了pushState 和 replaceState 两个方法，这两个方法改变url的path部分，不会引起页面刷新
通过监听popstate 事件监听url的变化
 - 通过浏览器前进后退来改变url
 - 通过pushState / replaceState 或a标签改变url 会触发