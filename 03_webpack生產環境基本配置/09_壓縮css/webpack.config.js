/**
 * webpack 配置文件
 * plugins 1.下載 2.引入 3.配置
 */

// 引入
const htmlwebpackplugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/bulit.js",
        path: path.resolve(__dirname, "build"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-preset-env')(),
                                ],
                            },
                        },
                    }
                ]
            },
        ]
    },
    plugins: [
        new htmlwebpackplugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/built.css"
        })
    ],
    optimization: {
        minimize: true
    },
    mode: "development",
    // mode: 'production', // 切换到生产模式以启用 CSS 压缩
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 5500,
        open: true
    }
}