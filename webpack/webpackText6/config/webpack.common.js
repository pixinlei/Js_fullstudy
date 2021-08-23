// webpack.common.js
const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {
    // 入口
    entry: {
        index: './src/index.js'
    },
    resolveApp,
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    appSrc: resolveApp('src'),
    appDist: resolveApp('dist'),
    appTsConfig: resolveApp('tsconfig.json'),
} // 暂不添加配置

