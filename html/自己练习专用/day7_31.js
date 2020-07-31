//创建symbol属性值
let symbol = Symbol()
console.log(symbol);
let obj = {username:'kobe',age:39}
// obj.sex = '男'
obj[symbol] = 'hello'
console.log(obj);

let symbol2 = Symbol('one')
let symbol3 = Symbol('two')
console.log(symbol2,symbol3);

//可以定义常量
const Person_key = Symbol('person_key')
console.log(Person_key);