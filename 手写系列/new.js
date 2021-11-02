function MyNew(fn, ...args) {
    let obj = {}
    obj.__proto__ = fn.prototype
    fn.apply(obj, args)
    return obj
}