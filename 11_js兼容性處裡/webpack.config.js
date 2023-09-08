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
    module: {
        rules: [
            /**
             *  兼容性處裡 :
             *  1. 基本處裡: babel-loader @babel/preset-env
             *              只能轉 箭頭函數  promise不能轉
             *  2. 全部兼容性: @babel/polyfill
             *             缺點: 檔案會變大
             *  3. 需要兼容性就去加載: core-js
             *  
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-env"]
                        // 指示babel該做怎樣兼容性處裡
                        // "presets": [
                        //     [
                        //         "@babel/preset-env", {
                        //             "useBuiltIns": "usage",
                        //             "corejs": {
                        //                 "version": 3,
                        //                 //"proposals": true // 可选，启用新提案的 polyfill
                        //             },
                        //             "targets": {
                        //                 "chrome": "60",
                        //                 "firefox": "60",
                        //                 "ie": "9",
                        //                 "safari": "10",
                        //                 "edge": "17"    
                        //             }
                        //         }
                        //     ]
                        // ]
                    },
                },
            }
        ]
    },
    plugins: [
        new htmlwebpackplugin({
            template: "./src/index.html"
        })
    ],
    optimization: {
        //minimize: true
    },
    mode: "development",
    // mode: 'production', // 切换到生产模式以启用 CSS 压缩
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 5500,
        open: true
    }
}