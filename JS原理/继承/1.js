function newFunc(fn) {
  let o = {}
  o.__proto__ = fn.prototype
  Fn.call(o, arguments)
  return o
}

// new Fn() 
// newFunc(Fn)

function Fn(name, age) {
  this.name = name
  this.age = age
}

let fn = new Fn()

fn = {
  name: '',
  age: ''
}