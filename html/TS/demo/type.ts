// Boolean 类型
let isDone: boolean = false

isDone = true
let count: number = 10

let nickname: string = 'jinlong'
let person :symbol = Symbol('pipi')

const sym = Symbol()
let obj1 = {
  [sym]: 'jinlong'
}
console.log(obj1[sym]);

// array
let list11: number[] = [1, 2, 3]
let list22: Array<number>= [1, 2, 3]

// Enum
// 数字枚举

enum Direction {
  east,
  south,
  west,
  north
}

let dir: Direction = Direction.north
let dirVal = Direction[0]
console.log(dir);
console.log(dirVal);

enum Enum {
  A,
  B,
  C = 'c',
  D = 'd',
  E = 8,
}

// any
let notSure1: any = 666
notSure = 'hello'

let test

// unknow
let value: unknown
value = true
value = 123
value = 'hello'

let value1 : unknown = value
let value2 : any = value
// let value3 : boolean = value
// let value4 : number = value

// tuple类型 元组
let tupleType: [any,unknown]
tupleType = ['yuanl', true]

// void 类型
function User(): void {
  console.log('hello world');
}

// null undefined
let u: undefined = undefined
let n: null = null

let num: number = u