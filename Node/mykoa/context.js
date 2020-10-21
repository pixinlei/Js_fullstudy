let proto = {}

function defineGetter(prop, name) { //prop代表对象，name代表对象上的属性
  proto.__defineGetter__(name, function() { //每个对象都有__defineGetter__方法
    return this[prop][name]
  }) 
}
function defineSetter(prop, name) {
  proto.__defineGetter__(name, function() { //每个对象都有__defineGetter__方法
    this[prop][name] = val
  }) 
}
 
defineGetter('request','url')
defineGetter('request','path')
defineSetter('request','body')

module.exports = proto