var http = require('http')

// 1.创建server
var server= http.createServer()

// 2.监听request请求事件，设置请求处理函数
server.on('request',function (req,res) {
  console.log("收到请求了，请求路径是 + "  + req.url);

  res.write('hello')
  res.write('world')
  res.end()
})

// 3. 绑定
server.listen(3000,function () {
  console.log("启动成功");
})