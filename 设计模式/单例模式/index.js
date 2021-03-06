// 保证一个类只有一个实例,并提供一个访问他的全局访问点
class singleDog {
  show() {
    console.log('我是一个单例对象');
  }
  static getInstance() {
    // 判断是否被new过
    // @ts-ignore
    if(!singleDog.instance) {
      // @ts-ignore
      singleDog.instance = new singleDog()
    }
    // @ts-ignore
    return singleDog.instance
  }
}

const s1 = singleDog.getInstance()
const s2 = singleDog.getInstance()

s1 === s2

