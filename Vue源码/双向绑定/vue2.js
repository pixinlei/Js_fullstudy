// 老版本通过 Object.defineProperty 递归可以实现

Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
        const value = getter ? getter.call(obj) : val
        if(Dep.target) {
            dep.depend()
            if(childOb) {
                childOb.dep.depend()
            }
            if(Array.isArray(value)) {
                dependArray(value)
            }
        }
        return value
    },
    set: function reactiveSetter(newVal) {
        const value = getter ? getter.call(obj) : val
        if(newVal == value || (newVal !== newVal && value !== value)) {
            return
        }
        if(setter) {
            setter.call(obj, newVal)
        } else {
            val = newVal
        }
        childOb = !shallow && observe(newVal)
        dep.notify()
    }
})