// 全部兼容性處裡模組
// import '@babel/polyfill';

import '../css/a.css';
import '../css/b.css';

import print from './print';

console.log("index.js被重新加載了...");

print();

const add = (x, y) => x + y;

console.log(add(2, 6));

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('計時OK');
    resolve();
  }, 1000);
});

console.log(promise);

// 解決HMR
if (module.hot) {
  // 一旦module.hot為真, 說明開啟了HMR功能 讓HMR代碼功能生效
  module.hot.accept('./print',function(){
    // 會執行這個回調
    print();
  });
}