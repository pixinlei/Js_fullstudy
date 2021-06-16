// 懒汉单例
let LazyInstance = function (fn) {
    let result = null;
    return function () {
        result || (result = fn.apply(this, arguments));
    }
};


let myPrinter = function () {
    console.log('初始化一台打印机...');
};
let lazyInstance = LazyInstance(myPrinter);
lazyInstance();
lazyInstance();
// lazyInstance();
// lazyInstance();