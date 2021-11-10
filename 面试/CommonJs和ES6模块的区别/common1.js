let mod = require('./common2.js')

console.log('A.js---1', mod.count);

mod.plusCount()

console.log('A.js---2', mod.count);

setTimeout(() => {
    mod.count.value = 3
    console.log('A.js---3', mod.count);
}, 2000)