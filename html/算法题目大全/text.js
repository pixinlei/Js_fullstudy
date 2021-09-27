var Foo = function () {
  getName = function () {
    console.log(1);
  }
  return this
}

Foo.getName = function() {
  console.log(2);
}

Foo.prototype.getName = function() {
  console.log(3);
}

var getName = function() {
  console.log(4);
}
function getName() {
  console.log(5);
}

getName() // 4
Foo.getName() // 2
// console.log(Foo().getName);
Foo().getName() //3
getName() // 4
new Foo().getName() // 3