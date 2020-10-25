function classDecorator(target) {
  target.hasDecorator = true
  return target
}

@classDecorator
class Button {

}

console.log('button是否被装饰了：',Button.hasDecorator);