import { mul } from './test';
import '../css/index.css';

function sum(...arg) {
  return arg.reduce((p, c) => p + c, 0);
}

// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5,6));
// eslint-disable-next-line
console.log(mul(2,6));

// 註冊 service-worker
// 處理兼容性問題
/**
 *  如要檢查js需加入這項在eslintConfig
 *  "eslintConfig": {
      "extends": "airbnb-base",
      "env": {
        "browser": true   //表示支持瀏覽器的變數
      }
    }
 *

    sw必須運行在server上
 */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('註冊成功');
      })
      .catch(() => {
        console.log('註冊失敗');
      });
  });
}
