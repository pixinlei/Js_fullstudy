// const user = {name: '张三', age: 18}

class User {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

class Admin extends User {
    constructor(name) {
        super(name)
    }
    setName (_name) {
        return this.name = _name
    }
}

const admin = new Admin('张三')

console.log(admin.getName());
console.log(admin.setName('李四'));
console.log(admin.getName());
