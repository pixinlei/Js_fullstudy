//  resolve用来拼接绝对路径的方法
const {resolve} = require('path')

module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口、
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出路径
        path: resolve(__dirname, 'build')
    },
    // loader的配置
    module: {
        rules: [ 
            { //执行顺序，从右到左，从下到上    
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理
                use: [
                    // 创建style标签，将js中的样式资源插入，添加到head生效
                    'style-loader',
                    // 将css文件变成commonJS模块加载JS中，内容是样式字符串
                    'css-loader'
                ]
            }
        ]
    },
    // plugins 的配置
    plugins: [
        // 
    ],
    // 模式
    mode: 'development',
    // mode: 'production'
}