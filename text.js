// function Foo() {
//   getName = function() { console.log(1); }
//   return this
// }
// Foo.getName = function() { console.log(2); }
// Foo.prototype.getName = function() { console.log(3); }
// var getName = function () { console.log(4); }
// function getName() { console.log(5); }

// // 输出值
// Foo.getName(); // 3
// getName(); // 4
// Foo().getName(); // 1
// getName(); // 1
// new Foo.getName() 
// new Foo().getName() // 1
// new new Foo().getName() // 


function Foo() {
  getName = function() { console.log(1); }
  return this
}

console.log(Foo()); // undefined