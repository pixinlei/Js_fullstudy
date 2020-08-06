// 块级作用域

for(var i =0; i<10;i++){ // i 会污染整个函数作用域
  console.log(i);
}
console.log(i);