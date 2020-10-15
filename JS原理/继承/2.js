function Person() {}
var p1 = new Person()

console.log(p1.constructor);
Person.prototype = {
  name: '小花',
  constructor: Person
}
Object.defineProperty(Person.prototype,'constructor',{
  enumerable:false,
  value:Person
})
var p2 = new Person()
console.log(p2.constructor );

Myp = {name: '1'}
var p3 = new Myp()
console.log(p3.constructor);