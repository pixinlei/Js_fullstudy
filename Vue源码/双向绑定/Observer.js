function observer(data) {
    if (!data || typeof data !== "object") {
        return;
    }
    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key]);
    });
}

function Dep() {
    this.subs = [];
}

function defineReactive(data, key, value) {
    // 递归调用，监听所有属性
    observer(value)
    var dep = new Dep()

    Object.defineProperty(data, key, {
        get: function() {
            if(Dep.target) {
                dep.addSub(Dep.target)
            }
            return value
        }
    })

}