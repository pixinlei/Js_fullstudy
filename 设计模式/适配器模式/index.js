// 理解设计模式
// 概念:将一个类(对象)的接口(方法或者属性)转化成另外一个接口，以满足用户需求，使类(对象)之间接口的不兼容问题通过适配器得以解决。
// 这里的话，就是方法需要传递多个参数，现在的话，不要求按照顺序传递，不要求传入每一个参数，通过设置默认值的方式，来适配没有传入的对象

function doSomeThing(name, title, age, color, size, prize) {}
// 我们记住这些参数的顺序是很困难的，所以我们经常是以一个参数对象方式来传入
/**
* obj.name : name
* obj.title : title
* obj.age : age
* obj.color : color
* obj.size : size
* obj.prize : prize
**/
// 当调用它的时候我们要考虑到传递的参数是否完整的问题，如果有一些必须参数没有传入
// 一些参数是有默认值的等等。这时我们可以用适配器来适配传入的参数对象
function doSomeThing (obj) {
  var _adapter = {
    name : '前端食堂',
    title : '设计模式',
    age : 24,
    color : 'blue',
    size : 100,
    prize : 99
  };
  for (var i in _adapter) {
    _adapter[i] = obj[i] || _adapter[i];
  }
  // 或者extend(_adapter, obj) 注: 此时可能会多添加属性
  // do things
}