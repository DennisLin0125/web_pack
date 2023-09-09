/**
 * webpack 配置文件
 * plugins 1.下載 2.引入 3.配置
 */

const { resolve } = require("path");
// 引入
const htmlwebpackplugin = require('html-webpack-plugin')
const webpack = require ('webpack');

// npm i add-asset-html-webpack-plugin
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

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
        }),
        // 告訴webpack那些庫不用打包,同時使用的名稱也要變
        new webpack.DllReferencePlugin({
            manifest: resolve(__dirname, "dll/minifest.json")
        }),
        // 將某個文件打包輸出,並在html引入該資源
        new AddAssetHtmlPlugin({
            filepath: resolve(__dirname, "dll/jquery.js"),
            publicPath: '', // 需設置为空字串,不然自動加auto/路徑
        })
    ],
    mode: "production"
    // mode: "development"
}