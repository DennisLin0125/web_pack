/**
 * webpack dll 配置文件
 * 使用dll技術對某些庫(ex: jQuery)打包
 * 
 * 
 * 當你運行webpack 默認是去找webpack.config.js配置文件
 * 需求: 需要運行webpack.dll.js
 * 指令: webpack --config webpack.dll.js
 */

const { resolve } = require("path");
// 引入
const webpack = require ('webpack');

module.exports = {
    entry: {
        // 最終打包生成的[name]--->jquery
        // ["jquery"]----->要打包的庫是jquery
        jquery: ["jquery"]
    },
    output: {
        filename: "[name].js",
        path: resolve(__dirname, "dll"),
        library: "[name]_[hash]", //打包庫裡面向外暴露出去的內容名稱
        // clean: true   //這個加了不會產生minifest.json檔
    },
    module: {
        rules: [
        ]
    },
    plugins: [
        // 打包生成一個minifest.json文件--->提供和jquery映射關係
        new webpack.DllPlugin({
            name: "[name]_[hash]",  //映射庫的暴露內容
            path: resolve(__dirname, "dll/minifest.json") //輸出的文件路徑
        })
    ],
    mode: "production",
}