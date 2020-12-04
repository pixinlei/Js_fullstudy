function* text() {
  let a = 1 + 2
  yield 2
  yield 3
}

let b = text()
console.log(b.next);

// 原理
function generator(cb) {
  return (function() {
    var object = {
      next: 0,
      stop: function() {}
    }
    // AAA
    return {
      next: function() {
        var ret = cb(object)
        if(ret === undefined) return {value: undefined, done: true}
        return {
          value: ret,
          done: false
        }
      }
    }
  })()
}