
console.log("index.js加載成功...");

/**
 *  通過js代碼讓某個文件單獨打包成一個chunk
 * 
 */

//  按下按鈕才加載模組
// webpackPrefetch: true  代表一開啟網頁就將模組加載
document.getElementById('btn').onclick = function (){
  import (/* webpackChunkName: 'test', webpackPrefetch: true */'./test')
  .then(({mul,sub}) => {
    console.log("文件加載成功...");
    console.log(mul(2,5));
  })
}





