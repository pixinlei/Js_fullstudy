//打包配置自动忽略console.log等
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    // publicPath: './',
    // devServer: {
    // 	......
    // },
    // css:{
    // 	......
    // },
    // eslint-disable-next-line no-unused-vars
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    //打包环境去掉console.log
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            compress: {
                                // warnings: false,
                                drop_console: true,  //注释console
                                drop_debugger: true, //注释debugger
                                pure_funcs: ['console.log'], //移除console.log
                            },
                        },
                    }),
                ],
            }
        }

    }
}
