// Person.prototype -- 原型 函数被定义出来，就天生具备的
// Person.prototype = {}

Person.prototype
function Person () {
  this.name = 'wn'
}

var person = new Person()

console.log(person.name);

var person1 = new Person()
console.log(person1.name);