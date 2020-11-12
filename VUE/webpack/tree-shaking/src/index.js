import add from './add'
import min from './min'

// es-module  在代码静态分析的时候，就能知道你引入了哪些模块
// webpack production 会开启tree-shaking
console.log(add(4,5));