/**
 *   多進程打包
 *        安裝: npm i thread-loader
 */

// 引入
const htmlwebpackplugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 引入
const workboxWebpackPlugin = require('workbox-webpack-plugin');

// 複用loader
const commCSSLoader = [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
        // 兼容性問題還要於package.json上配置文件"browserslist"
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    require('postcss-preset-env')(),
                ],
            },
        },
    }
]

module.exports = {
    entry: "./src/js/index.js",
    output: {
        // 增加hash:10來強制更新
        filename: "js/bulit.[contenthash:10].js",
        path: path.resolve(__dirname, "build"),
        clean: true
    },
    module: {
        rules: [
            {
                // 
                test: /\.css$/,
                use: [...commCSSLoader]
            },
            {
                test: /\.less$/,
                use: [ ...commCSSLoader,"less-loader"]
            },
            {
                // 配置package.json  "eslintConfig"
                test: /\.js$/,
                exclude: /node_modules/,
                // 優先執行
                enforce: "pre",
                loader: 'eslint-loader',
                options: {
                    fix: true   
                } 
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    // 開啟多進程打包
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: 2  //代表有2個進程
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            "presets": ["@babel/preset-env"]
                        },
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            }
        ]
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
        new MiniCssExtractPlugin({
            filename: "css/built.[contenthash:10].css"
        }),
        new workboxWebpackPlugin.GenerateSW({
            /**
             *  1. 幫助 service-worker 快速啟動
             *  2. 刪除舊的 service-worker
             * 
             *  生成 service-worker 文件~
             */
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    optimization: {
        //minimize: true
    },
    mode: 'production', // 生產模式自動 JS 壓縮
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 5500,
        open: true
    },
    devtool: "source-map",
    // 開啟babel緩存
    // 第二次構建時會讀取之前的緩存
    cache: {
        type: 'filesystem',
    },
}