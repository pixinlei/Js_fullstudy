// function identify(context) {
//   return context.toUpperCase()
// }

// function speak(context) {
//   let greeting = "hello i'm " + identify(context)
//   console.log(greeting);
// }

// speak('wn')


// function identify() {
//   return this.name.toUpperCase()
// }

// function speak() {
//   let greeting = "hello i'm " + identify.call(this)
//   console.log(greeting);
// }

// let me = {
//   name:'wn'
// }

// let you = {
//   name:'abc'
// }

// speak(me)

// this所处的词法作用域在哪里生效了，this作用域就指向哪里

// function foo() {
//   let person = {
//     name:'wn',
//     age:18
//   }
//   console.log(this);
// }

// function bar() {
//   let person = {
//     name:'wn',
//     age:18
//   }
//   foo()
// }

// bar()

// function foo() {
//   'use strict'
//   console.log(this.a);
// }
// var a = 2

// foo()

// function foo() {
//   console.log(this.a);
// }

// var obj = {
//   a:2,
//   foo:foo
// }

// var bar = obj.foo
// var a = 'hello'
// bar()