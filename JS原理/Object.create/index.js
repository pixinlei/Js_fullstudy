// Object.create 的实现原理

let a = {b: 1}

let c = create(a)

function create (arg) {
  let obj = {
    __proto__ : arg
  }
  return obj 
}

if(typeof obj !== 'object') throw TypeError
function Ctor () {}
Ctor.prototype = obj
let o = new Ctor()