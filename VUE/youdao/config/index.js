module.exports = {
  dev: {
      // Paths
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      proxyTable: {
          '/api': {
              target: 'https://openapi.youdao.com', // 接口地址
              changeOrigin: true, // 是否跨域
              pathRewrite: { // 转发
                  '^/api': ''
              },
              secure: false 
          },
      }
}