 // 创建一个类
 var Human = function (param) {
    // 技能
    this.skill = param && param.skill || '保密';
    // 兴趣爱好
    this.hobby = param && param.hobby || '保密';
}
// 类原型方法
Human.prototype = {
    getSkill : function () {
        return this.skill;
    },
    getHobby : function () {
        return this.hobby;
    }
}
// 实例化姓名类
var Names = function (name) {
    var that = this;
    // 构造器
    // 构造函数解析姓名和姓与名
    (function(name, that){
        that.wholeName = name;
        if(name.indexOf(' ') > -1){
            that.FirstName = name.slice(0,name.indexOf(' '));
            that.secondName = name.slice(name.indexOf(' '));
        }
    })(name, that);
}
// 实例化职位类
var Work = function (work) {
    var that = this;
    // 构造器
    // 构造函数中通过传入的职位特征来设置响应职位以及描述
    (function(work, that){
        switch (work) {
            case 'frontEndEngineer':
              that.work = '前端工程师';
              that.workDescript = '后端说我们是打辅助的？';
              break;
            case 'UI':
              that.work = '设计师';
              that.workDescript = '一个像素的执着';
              break;
            case 'secretary':
              that.work = '女秘书';
              that.workDescript = '了解老板才是第一准则';
              break;
            default:
              that.work = work;
              that.workDescript = '对不起，我们还不清楚您所选择职位的相关描述';
        }
    })(work, that);
}
// 更换期望的职位
Work.prototype.changeWork = function (work) {
    this.work = work;
}
// 添加对职位的描述
Work.prototype.changeDescript = function (setence) {
    this.workDescript = setence;
}

/****
* 应聘者建造者
* 参数 name: 姓名(全名)
* 参数 work: 期望职位
**/
var Person = function (name, work) {
        var _person = new Human();
        _person.name = new Names(name);
        _person.work = new Work(work);
        return _person;
}

var person = new Person('xiao fang', 'secretary');
console.log(person.skill);                       
console.log(person.name.FirstName);
console.log(person.work.work);
console.log(person.work.workDescript);
person.work.changeDescript('更改一下职位描述！');
console.log(person.work.workDescript);

// 保密
// xiao
// 女秘书
// 了解老板才是第一准则
// 更改一下职位描述！