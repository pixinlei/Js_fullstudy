function fun(x, y) {
    console.log(y)
    return {
        fun: function (z) {
            return fun(z, x)
        }
    }
}

// console.log(fun(1));
// console.log(fun(1).fun(1));
console.log(fun(0).fun(1).fun(2).fun(3));


// fun(0)   undefined {fun}
// fun(0).fun(1)    undefined 0 {fun}
// fun(0).fun(1).fun(2)     undefined 0  1 {fun} x= 1 y= 0 z= 2  ------> x= 2 y = 1
// fun(0).fun(1).fun(2).fun(3)      undefined 0  1 2 {fun: Function}