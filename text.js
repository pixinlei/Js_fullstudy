var x = 1;
function f(x, y = function () { x = 3; console.log(x); }) {
  console.log(x)
  var x = 2
  y()
  console.log(x)
}
f()
console.log(x)



// var x = 1; // 3

// function y() {
//   x = 3; 
//   console.log(x);
// }

// function f(x, y = y) {
//   console.log(x) // undefined
//   var x = 2
//   y()
//   console.log(x)
// }

// f() // undefined 3 3

// console.log(x) // 3