const before = function (fn, beforeFn) {
    return function () {
        beforeFn.apply(this, arguments)
        return fn.apply(this, arguments)
    }
}

const after = function (fn, afterFn) {
    return function () {
        // console.log(arguments, '这里的参数');
        const that = fn.apply(this, arguments)
        afterFn.apply(this, arguments)
        return that
    }
}

const people = {
    canEnglish: () => {
        console.log('我会英语了');
    },
    init: function () {
        this.canEnglish()
    }
}

// console.log(people.init());

after(people.init, function canChinese() {
    console.log('我会中文了');
}).apply(people)
