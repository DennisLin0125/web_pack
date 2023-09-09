/**
 * webpack 配置文件
 * plugins 1.下載 2.引入 3.配置
 */

// 引入
const htmlwebpackplugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/bulit.js",
        path: path.resolve(__dirname, "build"),
        clean: true
    },
    // module: {
    //     rules: [
    //     ]
    // },
    plugins: [
        new htmlwebpackplugin({
            template: "./src/index.html"
        })
    ],
    optimization: {
        //minimize: true
    },
    // mode: "development",
    mode: 'production', // 生產模式自動 JS 壓縮
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 5500,
        open: true
    }
}