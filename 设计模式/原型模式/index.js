// 理解设计模式
// prototype是js的灵魂，通过把方法挂载到类的原型上来实现

function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.sayName = function () {
    return this.name
}
Person.prototype.sayAge = function () {
    return this.age
}

let person = new Person("张三", 18)
console.log(person.sayName());
console.log(person.sayAge());

// const user = {name: '张三', age: 18}

// class User {
//     constructor(name) {
//         this.name = name
//     }
//     getName() {
//         return this.name
//     }
// }

// class Admin extends User {
//     constructor(name) {
//         super(name)
//     }
//     setName (_name) {
//         return this.name = _name
//     }
// }

// const admin = new Admin('张三')

// console.log(admin.getName());
// console.log(admin.setName('李四'));
// console.log(admin.getName());
