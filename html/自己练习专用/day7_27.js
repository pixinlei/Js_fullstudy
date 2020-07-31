// var obj = {
//   firstname:'curry',
//   lastname:'stephen',
//   get fullname(){
//     return this.firstname + ' ' + this.lastname
//   },
//   set fullname(data){

//   }
// }
// console.log(obj.fullname);
// obj.fullname = 'kobe bryant'
// console.log(obj.fullname);

// var arr = [1,2,3,4,5,6,4]
// console.log(arr.indexOf(4));
// console.log(arr.lastIndexOf(4));
// arr.forEach((item,index)=>{
//   console.log(item,index);
// })
// let a = arr.map((item,index)=>{
//   return item*item
// })
// console.log(a);
// let b = arr.filter(item=>item>3)
// console.log(b);
// var obj = {username:'kobe'}
// function foo(data){
//   console.log(this,data);
// }
// // foo.apply(obj,[3])
// // foo.call(obj,3)
// setTimeout(function(){
//   console.log(this);
// }.bind(obj),1000)

let obj = {username:'kobe',age:39}
let str = `我的名字是${obj.username}，我今年${obj.age}岁`
console.log(str);