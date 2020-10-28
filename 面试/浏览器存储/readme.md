# cookie localStorage sessionStorage indexDB 
cookie：        可设置过期时间 4kb    每次携带在header中，会影响请求的性能
localStorage：  需要手动清除   5mb    不参与
sessionStorage：关闭页面消失   5mb    不参与
indexDB：       需要手动清除   无限   不参与


cookie：
  value: 保存用户登录态，值应该加密
  http-only: 不能通过js访问cookie，防止xss(跨站脚本攻击)攻击
  secure： 只在传输协议为HTTPS的请求中携带
  same-site: 规定浏览器不能在跨域请求中携带cookie，减少CSRF(跨站请求伪造)攻击

# 什么是 Service worker
运行在浏览器背后的独立线程，一般用来实现缓存的功能，传输协议必须是HTTPS
