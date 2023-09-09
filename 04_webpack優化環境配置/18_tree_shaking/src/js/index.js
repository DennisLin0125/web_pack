import { mul } from './test';
import '../css/index.css';

function sum(...arg) {
  return arg.reduce((p, c) => p + c, 0);
}

// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5,6));
// eslint-disable-next-line
console.log(mul(2,6));