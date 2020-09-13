function Person (name) {
  this.name = name
}

let p = new Person('Tom')

// 1. p.__proto__ = Person.prototype
// 2. Person.__proto__ = Function.prototype


var foo = {}
var F = function () {

}

Object.prototype.a = 'value a'
Function.prototype.b = 'value b'
console.log(foo.a);


// new 的实现原理
function myNew (fun) {
  return function () {
    let obj = {
      __proto__: fun.prototype
    }
    fun.call(obj,...arguments)
    return obj
  }
}

function Person (fun) {
  return function () {
    let obj = {
      __proto__: arg.prototype 
    }
    fun.call(obj,...arguments)
    return obj
  } 
}