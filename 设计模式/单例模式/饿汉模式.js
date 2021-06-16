let instance = null;
class Printer {
  constructor() {
    console.log('我是一台打印机');
  }

  static getInstance() {
    if (instance === null) {
      console.log('初始化打印机...');
      instance = new Printer();
    }
    return instance;
  }
  print(){
    console.log('打印中......');
  }
}

var printer  = Printer.getInstance();
//多 new 一次
printer = Printer.getInstance();
printer.print();