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
             *  語法檢查 : 
             * 
             *  下載: npm i eslint-config-airbnb-base eslint-plugin-import eslint-loader eslint
             * 
             *  配置package.json
             *  "eslintConfig": {
                        "extends": "airbnb-base"
                    }
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // 自動修復語法
                    fix: true   
                } 
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