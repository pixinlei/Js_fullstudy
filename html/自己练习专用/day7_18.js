// var f = new Function('console.log(11111111111111)')
// console.log(1111111111111111111111111);
// // console.dir(f)
// console.log(f instanceof Object);
// (function(){console.log(111111111111);})()
// function fn(){
//   console.log(this);
// }
// console.log(fn() instanceof window);

// StaticRange.prototype.sing
// setInterval(function(){
//   console.log(this);
// },1000)

// var o = {
//   name:'andy'
// }
// function fn(){
//   console.log(this);
// }
// fn.call(o)

//  function Father(name,age){
//    this.name = name
//    this.age = age
//  }
 
//  function Son(name,age){
//    Father.call(this,name,age)
//  }

// var son = new Son('ldh',18)
// console.log(son);

var o = {
  name:'andy'
}

function fn(arr){
  console.log(this);
}

// fn.apply(o,[1,2])

var f = fn.bind(o)
f()


// var arr = [1,2,4,5,6,7,8,9]
// var max = Math.max.apply(null,arr)
// console.log(max);
