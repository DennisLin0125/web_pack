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

    // 開發服務器
    // 下載 npm webpack-dev-server
    // 開啟 npx webpack serve
    devServer: {
        // contentBase: resolve(__dirname, "build"),
        // 啟動gzip壓縮
        compress: true,
        // 設定PORT
        port: 5500,
        // 打開瀏覽器
        open: true
    }
}