class FakeStar extends MobilePhoneFactory {
  // 提供操作系统的接口
  createOS() {
    return new AndroidOS()
  }
  // 提供硬件的接口
  createHardWare() {
    return new QualcommHardWare()
  }
}

class OS {
  controlHardWare() {
    throw new Error('你需要将我重写')
  }
}

class AndroidOS extends OS {
  controlHardWare() {
    console.log('我会用安卓的方式去操作系统');
  }
}
class AppleOS extends OS {
  controlHardWare() {
    console.log('我会用🍎的方式去操作系统');
  }
}

class HardWare {
  operateByOrder() {
    throw new Error('你需要将我重写')
  }
}

class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log('我会用高通的方式去运转')
  }
}

class MiWare extends HardWare {
  operateByOrder() {
    console.log('我会用小米的方式去运转')
  }
}

class newStarFactory extends MobilePhoneFactory {
  createOS () {
    // ...
  }
  createHardWare() {
    // ...
  }
}

// 这是我的手机
const myPhone = new FakeStar()
// 让它具备操作系统
const myOS = myPhone.createOS()
// 让它具备硬件
const myHardWare = myPhone.createHardWare()
// 启动操作系统
myOS.controlHardWare()
// 唤醒操作系统
myHardWare.operateByOrder()