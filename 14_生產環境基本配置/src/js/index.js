// 全部兼容性處裡模組
// import '@babel/polyfill';

import '../css/a.css';
import '../css/b.css';

const add = (x, y) => x + y;
console.log(add(2, 6));

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('計時OK');
    resolve();
  }, 1000);
});

console.log(promise);
