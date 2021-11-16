// 需要监听数组的7个方法
let needChangeMethods = ['push', 'pop', 'shift', 'unshift', 'sort', 'reverse', 'splice']

const arrayProto = Array.prototype

const arrayMethods = Object.create(arrayProto)

needChangeMethods.forEach((v, i) => {
    const original = arrayProto[v]  // 缓存原本的方法
    Object.defineProperty(arrayMethods, v, {
        enumerable: true,
        configurable: true,
        value: function mutator(...args) {  
            console.log(`经过了${v}方法`);
            const result = original.apply(this, args)
            return result
        }
    })
})


let arr = []
arr.push(1)
