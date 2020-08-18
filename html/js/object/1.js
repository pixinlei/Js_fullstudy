// // 对象
// var mrLei = {
//   name:'leilei',
//   age:20,
//   sex:'boy',
//   health:100,
//   smoke:function () {
//     console.log('i am soking cool');
//   },
//   drink:function () {
//     console.log('i am drink');
//   }
// }

// 增
// mrLei.boyFriend = 'zhihong'
// console.log(mrLei);

// 查
// console.log(mrLei.sex);

// 改
// mrLei.sex = 'girl'
// console.log(mrLei.sex);

// 删除
// delete  mrLei.name
// console.log(mrLei);

function Car () { //大驼峰式命名
  this.name = "bmw"
  this.height = '1400'
  this.lang = '4900'
  this.weight = 1000
  this.health = 100
  this.run = function () {
    this.health--
  }
}

var car = new Car()
var car1 = new Car()

car.name = '红旗'
car1.name = 'lsls'

console.log(car);
console.log(car1);