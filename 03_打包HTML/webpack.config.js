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
        ]
    },
    plugins: [
        // html-webpack-plugin
        // 默認會自動創建一個空的html文件,並自動引入打包後的js和css樣式
        // 需求為要一個有結構的html
        new htmlwebpackplugin({
            // 複製 ./src/index.html 文件 ,並自動引入打包後的js和css樣式
            template: "./src/index.html"
        })
    ],
    mode: "development",
}