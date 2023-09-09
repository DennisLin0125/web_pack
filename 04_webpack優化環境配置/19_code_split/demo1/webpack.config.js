/**
 *   code_split
 */

// 引入
const htmlwebpackplugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    // 多入口 : 有一個入口,就會輸出一個bundle
    entry: {
        index: "./src/js/index.js",
        test: "./src/js/test.js"
    },
    output: {
        // 取文件名 [name]
        filename: "js/[name].[contenthash:10].js",
        path: path.resolve(__dirname, "build"),
        clean: true
    },
    
    plugins: [
        new htmlwebpackplugin({
            template: "./src/index.html",
            // 壓縮配置
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
    ],
    mode: 'production', // 生產模式自動 JS 壓縮
}