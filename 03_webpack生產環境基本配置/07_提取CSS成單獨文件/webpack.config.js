/**
 * webpack 配置文件
 * plugins 1.下載 2.引入 3.配置
 */

const { resolve } = require("path");
// 引入
const htmlwebpackplugin = require('html-webpack-plugin');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/bulit.js",
        path: resolve(__dirname, "build"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 
                    // "style-loader", 
                    // 目的提出css成單獨文件
                    MiniCssExtractPlugin.loader,
                    "css-loader"
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