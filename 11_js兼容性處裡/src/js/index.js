// 全部兼容性處裡模組
// import '@babel/polyfill';

const add = (x, y) => {
  return x + y;
}
console.log(add(2, 6));


const promise= new Promise((resolve) => {
  setTimeout(()=>{
    console.log("計時OK");
    resolve();
  },1000);
})

console.log(promise);


