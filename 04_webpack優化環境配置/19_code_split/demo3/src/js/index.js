function sum(...arg) {
  return arg.reduce((p, c) => p + c, 0);
}

/**
 *  通過js代碼讓某個文件單獨打包成一個chunk
 * 
 */

import (/* webpackChunkName: 'test' */'./test')
  .then(({mul,sub}) => {
    console.log("文件加載成功...");
    console.log(mul(2,5));
  })
  .catch(() => {
    console.log("文件加載失敗...");
  })

// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5,6));



