let obj = {normal: 1, 
    get: function getNormal() {
        console.log('获取normal');
    },
    set: function setNormal() {
        console.log('设置normal');
    }
}

// console.log(obj);

console.log(obj.get());