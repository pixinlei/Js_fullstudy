

export default {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    rules: [
        {
            text: /\.css$/,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            ident: 'postcss',
                            plugins: [require('postcss-preset-env')()]
                        }
                    }
                }
            ]
        },
        {
            text: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    {
                        useBuiltIns: 'usage',
                        corejs: {
                            version: '3'
                        },
                        targets: 'defaults'
                    }
                ]
            }
        },
        {
            test: /\.(eot|svg|ttf|woff|)$/,
            type: "asset/resource",
            generator: {
                // 输出文件位置以及文件名
                filename: "fonts/[name][ext]"
            },
        },
        {
            //处理图片资源
            test: /\.(jpg|png|gif|)$/,
            type: "asset",
            generator: {
                // 输出文件位置以及文件名
                filename: "images/[name][ext]"
            },
            parser: {
                dataUrlCondition: {
                    maxSize: 10 * 1024 //超过10kb不转base64
                }
            }
        },
    ]
}