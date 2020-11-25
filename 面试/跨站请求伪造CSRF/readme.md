## 登录
cookie 保存用户信息，后续一段时间不用再登录了
api.juejin.cn
api.juejin.cn/delete/01 验证身份(cookie后端能验证)
另一个黑客域名下面请求 api.juejin.cn
1. xhr fetch 跨域不能伪造这个请求
2. Get: script img link Post:form就能伪造出来了
api.juejin.cn/delete/01 验证身份(后端无法拿到cookie)

cookie不能跨域： 最新的Chrome提出的sameSite为strict

1. sameSite 设为 strict，lax
2. 用户登录成功时候给他一个token，之后前端每个请求都带上这个token，黑客网站是拿不到token，它的请求没token就拒绝它