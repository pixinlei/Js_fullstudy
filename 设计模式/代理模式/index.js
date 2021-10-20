// 理解设计模式
// 概念：由于一个对象不能直接引用另一个对象，所以需要通过代理对象在这两个对象之间起到中介的作用。
// 现实生活中比如我们租房子时回去自如，自如是房屋中介机构，也就是我们的代理。

// 虚拟代理--- 例如（图片loading预加载）
// 缓存代理--- （可以为一些开销很大的运算结果提供暂时的储存，若下次传递的参数一致则直接返回之前的结果，大大提高效率和节省开销。）


class Leader {
    constructor(name) {
        this.name = name
        console.log(this.name + '是一名首脑');
    }
    shopping() {
        const proxyObj = new ProxySecretary('秘书甲')
        proxyObj.proxyBehavior(this.name)
    }
}

class ProxySecretary {
    constructor(name) {
        this.name = name
        console.log(this.name + '是一名秘书');
    }
    proxyBehavior(targetName) {
        console.log(`${this.name}代替${targetName}去买奶茶`);
    }
}

let leader1 = new Leader('首脑甲')
leader1.shopping()