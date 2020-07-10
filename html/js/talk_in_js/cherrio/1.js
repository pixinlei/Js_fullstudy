// 对象是由方法和属性构成 语法 
// 1.构建一只鸭子
// 2.招募1000只鸭子
// 3.告诉国王你完成了任务
// JSON Object 对象字面量 literal object
var duck ={
    type:'煌上煌',
    yz:99,
    duckSing:function(){
        console.log('嘎嘎嘎');
        
    },
}

var jiajun = {
    name:'佳俊',
    duckSing:function(){
        console.log('嘎嘎嘎');
        
    }
}

var xyl = {
    name:'元隆',
}

const xgg = [jiajun,xyl]

// JS里没有array类型
// 数据类型 数值类型number 字符串类型string 布尔值bool null undefined
// unfined
var cherrio //关键字 标识符
console.log(cherrio);   //undefined
console.log(typeof cherrio);
// 变量的类型由值决定
cherrio = [];
//基础类型不包括array array只是object的子类型
console.log(typeof cherrio);//object array

for(var i=0;i<999;i++){
    cherrio.push(duck)
}

// cherrio.push()
for(var i=0;i<xgg.length;i++){
    if(!xgg[i].duckSing){
        cherrio.push(xgg[i])
    }
}

if(cherrio.length === 1000){
    console.log('已招募完成，报告国王');
    
}
duck.duckSing();


