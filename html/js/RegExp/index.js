//正则的定义
// let patt1 = new RegExp('hello')
// let patt2 = /world/
//正则的使用  text()

// let pat = /my/  
// let str = "this is my code..."

// let arr = str.split(' ')

// console.log(arr.includes("my"));
// console.log(pat.test(str));

// let pat = /hello/
// let msg = 'oh hello world'
// console.log(pat.exec(msg));

//正则表达式的类型
// /pattern/attributes g i 全局匹配，不区分大小写匹配

//不区分大小写
// let str = 'Visit NanChang oh my world'
// let pat  = /nanchang/i
// let pat2 = /nanchang/ig
// console.log(pat2.test(str));

//字符串的正则
// let str = 'Visit W3School'
// console.log(str.search(/w3school/i));

// let str = '1 plus 2 equal 33'
// console.log(str.match(/\d+/g));

// let str = 'hello pp! oh I am wn'
// console.log(str.replace(/wn/,'snail'));



// console.log(str.split(/\s+/));

//正则写法
//[abc]查找方括号之间的任何字符
// let str = 'Is this all there is?'
// let pat = /[a-h]/g
// console.log(str.match(pat));

//[^abc]查找任何不在方括号之间的字符
// let str = 'hello pp like jinlong'
// let pat = /[^like]/g
// console.log(str.match(pat));

// let str = 'hello ziChen! How are you?'
// let pat = /hello|you/g
// console.log(str.match(pat));

// let str = "That's hot 100%"
// // let pat = /h.t/g
// let pat = /\W/g
// console.log(str.match(pat));

// let str = 'moon'
// let pat = /oon\b/g
// console.log(str.match(pat));

// let str = 'is this his'
// let pat = /is$/g
// console.log(str.match(pat));

// 手机号正则
let tel = '17826864511'
let pat = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/
console.log(pat.test(tel));