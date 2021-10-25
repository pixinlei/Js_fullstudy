var _ = require('lodash');

let arr = ['a', 'b', 'c', 'd']

// chunk , 拆分数组
// console.log(_.chunk(arr, 2));

// compact 返回一个去除了假值元素（false, null,0, "", undefined, 和 NaN）的数组
// console.log(_.compact([0,1,false, null, "", undefined, NaN]));

// concat 拼接数组
// console.log(_.concat(arr, [3]));

// difference 创建一个新数组，里面每个值都不包含在其他给定数组中
// console.log(_.difference(arr, ["a", "b"]));

// drop 去除前n个元素
// console.log(_.drop(arr, 3));

// dropRight 去除后n个元素
// console.log(_.dropRight(arr, 3));

// dropRightWhile
// var user = [{value:0, checked: false},{value:1, checked: true}]
// console.log(_.dropRightWhile(user), function(item){ return item.checked});

// fill 填充数组
// console.log(_.fill(arr,'ss'));
// console.log(_.fill(arr,'mm', 1, 3));

// findIndex
// console.log(_.findIndex);
// console.log(_.findIndex(arr, (item)=>{return item==="c"}));

// head 获取第一个元素
// console.log(_.head(arr));

// flatten 减少一层嵌套
console.log(_.flatten([[arr]]));
