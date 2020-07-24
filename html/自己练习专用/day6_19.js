// function fn(n){
//   let a = n*fn(n-1)
//   return (n=1)?a:n*fn(n-1)
// }
// console.log(fn(3));

// function fn(){
//   return 1
// }

// let ary = [1,2,3]
// let [a,b,c,d,e] = ary
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(e);

// let person = {name:'zhangsan',age:18}
// let {name,age} = person
// console.log(name);
// console.log(age);

// let person = {name:'zhangshan'}
// let {name:myname} = person
// console.log(myname);

// const fn = () =>{
//   console.log(11111111111);
// }
// fn()
// const fn = (a,b) => a+b
// console.log(fn(10,20));

// const fn = n => n
// console.log(fn(11111111));

// const fn = (a,...args) => {
//   console.log(a)
//   console.log(args);
// }
// fn(1,2,3)

// const sum = (...args) =>{
//   let total = 0
//   args.forEach(item =>{
//     total+=item
//   })
//   return total
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));

// let arr = ['zhangshan','lisi','wangwu']
// let [a,...b] = arr
// console.log(a);
// console.log(b);

// let arr = ['a','b','c']
// console.log(...arr);

// let ary1 = [1,2,3]
// let ary2 = [4,5,6]
// let ary3 = [...ary1,...ary2]
// console.log(ary3);
// ary1.push(...ary2)
// console.log(ary1);

//利用扩展运算符将伪数组转换成真正的数组


// let array1 = {
//   '0':'zhangsan',
//   '1':18,
//   'length':2
// }
// let array2 = Array.from(array1)
// console.log(array2);

  // let array1 = {
  //   '0':1,
  //   '1':2,
  //   'length':2
  // }
  // let array2 = Array.from(array1,item=>item*2)
  // console.log(array2);

  // let array1 = [
  //   {
  //     id:1,
  //     name:'zhangsan'
  //   },
  //   {
  //     id:2,
  //     name:'lisi'
  //   }
  // ]
  // let array2 = array1.find(item=>item.id == 2)
  // console.log(array2);

  // let array1 = [1,3,6,8,9]
  // let array2 = array1.findIndex(index=>index>4)
  // console.log(array2);

  // let array1 = [1,2,3,4,5,6,7,8]
  // let array2 = array1.includes(2)
  // let array3 = array1.includes(0)
  // console.log(array2);
  // console.log(array3);

  //模板字符串
  // let name = `zhangsan`
  // let sayhello = `我叫${name}`
  // console.log(sayhello);

  // let result = {
  //   name:'zhangsan',
  //   age:18
  // }
  // let html = `
  //   <div>
  //     <span></span>
  //   </div>
  // `
  // console.log(html);

  // let fn = ()=>{return 1111111111111}
  // let array = `输出了${fn()}`
  // console.log(array);

  // let array1 = 'hello word !'
  // let array2 = array1.startsWith('hello')
  // console.log(array2);
  // let array3 = array1.endsWith('!')
  // console.log(array3);

  // let a = 'y'.repeat(5)
  // console.log(a);

  // let a = new Set()
  // console.log(a.size);

  // let b = new Set([1,2])
  // console.log(b.size);

  // let c = new Set(["1","1","2","4"])
  // console.log(c.size);
  // let d = [...c]
  // console.log(d);

//   let a = new Set()
//   a.add('a').add('b')
//   console.log(a.size);
//   a.delete('a')
//   console.log(a.size);

//   let b = a.has('b')
//   console.log(b);
//  let c = a.clear()
//  console.log(a.size); 

let a = ['a','a','b','c']
a.forEach(value=>console.log(value))