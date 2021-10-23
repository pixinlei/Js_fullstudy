# 自己的理解

## hash模式
- 就是利用#后面的内容，也就是锚点，锚点更新，不会引起页面刷新
- 通过监听hashchange来监听url的改变，

## history模式
- 通过浏览器前进后退改变url会触发popstate事件
- 通过pushstate/replaceState,或者是a标签改变，不会触发popstate事件
