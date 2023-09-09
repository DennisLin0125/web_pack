/**
 *   code_split
 */

// 引入
const htmlwebpackplugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.[contenthash:10].js",
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

    /**
     *   可以將node_module 的模組打包輸出
     * 
     */
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },

    mode: 'production', // 生產模式自動 JS 壓縮
}