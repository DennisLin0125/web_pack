/**
 *   tree shaking: 去除無用代碼
 *     必需只用ES6模組     mode: 'production'
 *     在package.json配置 "sideEffects": "false"  
 *     代表所有代碼都沒有副作用(都可以進行tree shaking)
 * 
 *     改成"sideEffects": ["*.css"]   表示在 *css 不會被移除
 */

// 引入
const htmlwebpackplugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-env"]
                    },
                }
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