/**
 *  index,js : webpack入口文件
 *  運行指令 : 
 *      1. 開發環境 : webpack ./src/index.js -o built/ --mode=development
 *      2. 生產環境 : webpack ./src/index.js -o built/ --mode=production
 */

import data from "./data.json";

console.log(data);

function add(x,y) {
    return x+y;
}

console.log(add(1,2));