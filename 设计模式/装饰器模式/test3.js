Function.prototype.before = function (beforeFn) {
    let self = this
    this.age = '18'
    return function () {
        beforeFn.apply(this, arguments)
        return self.apply(this, arguments)
    }
}

Function.prototype.after = function (afterFn) {
    let self = this
    return function () {
        let result = self.apply(this, arguments)
        afterFn.apply(this, arguments)
        return result
    }
}


function fn1() {
    console.log(1);
}

function fn2() {
    console.log(2);
}

function fn3() {
    console.log(3);
}

let func = fn2.before(fn1, [1, 2, 3]).after(fn3)

func()