/**
 * webpack 配置文件
 * plugins 1.下載 2.引入 3.配置
 */

const { resolve } = require("path");
// 引入
const htmlwebpackplugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "js/bulit.js",
        path: resolve(__dirname, "build"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [ "style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
        ]
    },
    plugins: [
        new htmlwebpackplugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        // 設定PORT
        port: 5500,
        // 打開瀏覽器
        open: true
    }
}