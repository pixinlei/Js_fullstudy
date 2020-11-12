export default function (a, b) {
  return a-b
}
// log 请求 读写文件 。。。会对其他造成影响的， 统称为副作用
// 副作用
// 每个模块加入存在(副作用)，想剔除它 sideEffects: false,基本上只要
// 不是pollyFill(垫片)形式的(副作用)都能加上sideEffects:false
console.log('side effect');
