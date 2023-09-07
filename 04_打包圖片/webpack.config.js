/**
 * webpack 配置文件
 * plugins 1.下載 2.引入 3.配置
 */

const { resolve } = require("path");
// 引入
const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bulit.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [ "style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.html$/,
                // 專門處理img標籤的圖片
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new htmlwebpackplugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",
}