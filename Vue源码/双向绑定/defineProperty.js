// var modeng = {}
// var age

// Object.defineProperty(modeng, 'age', {
//     get: function() {
//         console.log("获取年龄");
//         return age
//     },
//     set: function(newVal) {
//         console.log('设置年龄');
//         age = newVal
//     }
// })

// modeng.age = 18
// console.log(modeng.age);

let data = {
    age: 18
}

let age = data['age']
Object.defineProperty(data, 'age', {
    enumerable: true,
    configurable: true,
    get: () => {
        console.log('获取年龄');
        return age
    },
    set: (value) => {
        console.log('设置年龄');
        return age
    }
})

console.log(data.age);