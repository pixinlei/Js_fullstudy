Function.prototype.myApply = function (context) {
  // this指向调用apply的对象
  if (typeof this !== 'function') {
    // 调用apply的不是函数
    throw new TypeError('Error')
  }
  // 声明一个属性
  const fn = Symbol('fn')
  const args = arguments[1]
  context = context || window
  // 将调用call函数的对象添加到context的属性中
  context[fn] = this
  // 执行该属性
  const result = context[fn](args)
  // 删除该属性
  delete context[fn]
  // 返回执行结果
  return result
}

function fn () {
  
  return console.log(this.name, ...arguments);
}

let obj = {
  name: 'wn'
}

fn.myApply(obj,[1,2,3])
