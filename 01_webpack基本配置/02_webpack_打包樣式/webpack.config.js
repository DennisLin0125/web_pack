/**
 * webpack 配置文件
 * 
 */

const { resolve } = require("path");

module.exports = {
    // 入口
    entry: "./src/index.js",
    // 輸出
    output: {
        // 輸出文件名
        filename: "bulit.js",
        // 輸出路徑
        path: resolve(__dirname, "build")
    },
    // 配置loder
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    // 創建style標籤,將JS中的樣式資源插入添加至head標籤
                    "style-loader",
                    // 將css文件變成commonjs模組加載到js中,裡面內容是樣式字符串
                    "css-loader"
                ]
            },
            {
                test:/\.less$/,
                use: [
                    // 創建style標籤,將JS中的樣式資源插入添加至head標籤
                    "style-loader",
                    // 將css文件變成commonjs模組加載到js中,裡面內容是樣式字符串
                    "css-loader",
                    // 將less編譯成css
                    "less-loader"
                ]
            }
        ]
    },
    // 插件
    plugins: [

    ],
    // 模式
    mode: "development",
    // mode: "production"
}