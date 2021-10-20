// 理解设计模式
// 工厂模式就是把简单的，同一种类的东西都放到一起， 创建对象，不同的类进行实例化




class User {
    constructor(name, menuAuth) {
        if (new.target === User) throw new Error('User 不能被实例化');
        this.name = name;
        this.menuAuth = menuAuth;
    }
}

class UserFactory extends User {
    constructor(...props) {
        super(...props);
    }
    static create(role) {
        const roleCollection = new Map([
            ['admin', () => new UserFactory('管理员', ['首页', '个人中心'])],
            ['user', () => new UserFactory('普通用户', ['首页'])]
        ])

        return roleCollection.get(role)();
    }
}

const admin = UserFactory.create('admin');
console.log(admin); // {name: "管理员", menuAuth: Array(2)}
const user = UserFactory.create('user');
console.log(user); // {name: "普通用户", menuAuth: Array(1)}

