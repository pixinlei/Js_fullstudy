let obj = { s: 1 }
function a(m, n) {
    console.log(m, n, '这里是其他参数');
    console.log(this.s);
}

a.apply(obj, [1, 2])