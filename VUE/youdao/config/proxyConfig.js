module.exports = {
  proxy: {
    '/api': {
      target: 'https://openapi.youdao.com',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/api': '/'
      }
    }
  }
}