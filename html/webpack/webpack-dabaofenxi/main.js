(function(modules){
  // modules['./index.js']()
  function webpack_require(id) {
    let module = {
      exports: {}
    }
    let exports = module.exports
    modules[id](module,exports,webpack_require)
  }
  webpack_require('./index.js')
})(
  {
    './index.js': function(module,exports,require) {
      // index.js 内容
      const { add } = require('./main.js')
      console.log(add(4+5));
    },
    './math.js': function(module,exports,require) {
      // math.js 内容
      module.exports.add = (a, b) => a + b
    }
  }
)