/**
 * HMR : hot 
 * 
 *      css: 默認有HMR功能
 *      js: 默認沒有HMR功能但會更新  解決方式:增加HMR語法
 *      html: 默認沒有HMR功能而且也不會自動更新  解決方式: 修改entry:
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
    entry: ["./src/js/index.js", "./src/index.html"],
    output: {
        filename: "js/bulit.js",
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
            // {
            //     // 配置package.json  "eslintConfig"
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     // 優先執行
            //     enforce: "pre",
            //     loader: 'eslint-loader',
            //     options: {
            //         fix: true   
            //     } 
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-env"]
                    }
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
            filename: "css/built.css"
        })
    ],
    optimization: {
        //minimize: true
    },
    // mode: 'production', // 生產模式自動 JS 壓縮
    mode: 'development', 
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 5500,
        open: true,
        hot: true
    }
}