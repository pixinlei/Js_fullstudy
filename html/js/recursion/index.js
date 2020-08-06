//5!
// function jiechen(n){
//   if(n>=1){
//     result =  n * jiechen(n-1)
//   }
//   return 
// }
// function mul(n) {
//   if (n == 1) { //找出口
//     return 1
//   }
//   return n * mul(n - 1) //1.找规律
// }
// console.log(mul(5));


// 斐波那契数列

function fb(n) {
  if(n == 1 || n == 2){
    return 1
  }


  return fb(n-1) + fb(n-2)
}

console.log(fb(10));