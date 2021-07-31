const path = require('path');
const { config } = require('process');
// const HtmlWebpackPlugin = require('webpack')

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // module: {
    //     rules: [
    //         {test: /\.txt$/, use: 'raw-loader'}
    //     ]
    // },
    // plugins: [
    //     new HtmlWebpackPlugin({template: './src/index.html'})
    // ],
    // mode: 'development'
  };

  module.exports = config