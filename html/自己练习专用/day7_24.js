'use strict'
let obj = {username:'kobe'}
obj = JSON.stringify(obj)
console.log(typeof obj);
obj = JSON.parse(obj)
console.log(typeof obj);