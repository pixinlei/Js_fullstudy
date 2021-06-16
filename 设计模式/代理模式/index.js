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