var data = {
  name: 'yuanlong'
}
observe(data)
let name = data.name
data.name = 'jinlong'

function observe(obj) {
  Object.keys(obj).forEach(key => {
    definReactive(obj,key,obj[key])
  })
}

function definReactive(obj, key, val) {
  if(typeof val === 'object' && val !== null) {
    observe(val)
  }
  Object.defineProperty(obj,key, {
    get: function() {
      return val
    },
    set: function(newVal) {
      val = newVal
    }
  })
}