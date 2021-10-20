function myTypeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

console.log(myTypeof([]));
console.log(myTypeof({}));
console.log(myTypeof(null));
console.log(myTypeof(1));
console.log(myTypeof("1"));
console.log(myTypeof(true));