// 包装类
// 原始值是没有属性和方法的
// var num = 123
// num.abc = 'aaa'
// console.log(num);
// 能有属性和方法，同理字符串和布尔也一样
// 但是null和undefined不行

// var str = 'abcd'

// 包装类
var num = 4
num.len = 3
// 隐式过程
// new Number(4).len = 3
// delete len