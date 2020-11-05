const mod = require('./a')
console.log(mod.c, mod.obj); // 3
mod.inc()
console.log(mod.c, mod.obj); // 3