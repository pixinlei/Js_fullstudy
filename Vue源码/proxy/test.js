// const origin = {}

// const obj = new Proxy(origin, {
//     get: (target, propKey, receiver) => {
//         console.log(target, propKey, receiver);

//         return target[propKey]
//     }
// })

// console.log(obj.a);

const origin = {}

const obj = new Proxy(origin, {
    construct:() => {
        return {a:1}
    }
})

new obj()