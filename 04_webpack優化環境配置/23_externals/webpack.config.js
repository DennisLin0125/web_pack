/**
 * webpack 配置文件
 * plugins 1.下載 2.引入 3.配置
 */

const { resolve } = require("path");
// 引入
const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/bulit.js",
        path: resolve(__dirname, "build"),
        clean: true
    },
    module: {
        rules: [
        ]
    },
    plugins: [
        new htmlwebpackplugin({
            template: "./src/index.html"
        })
    ],
    mode: "production",
    externals: {
        // 要忽略的庫名---npm 包名
        jquery: "jQuery"
    }
}