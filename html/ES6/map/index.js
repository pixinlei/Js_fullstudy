// let obj = {
//   name:'明国',
//   age:18,
//   sex:'man'
// }
// obj.height = '175'
// const m = new Map()
// // console.log(m);

// m.set(obj,'content')
// console.log(m);
// console.log(m.obj);
// console.log(m.get(obj));
// console.log(m.age);
// console.log(m.has(obj));
// m.delete(obj)
// console.log(m.has(obj));


// const map = new Map([['name','祥祥'],['age','20']])
// // console.log(map);
// // console.log(map.size);

// // console.log(map.has('name'));

// console.log(map.get('name'));

// const set = new Set([
//   ['foo',1],
//   ['bar',2]
// ])
// console.log(set);


const map = new Map([
  ['foo','no'],
  ['bar','yes']
])

// for(let key of map.keys()){
//   console.log(key);
// }

// for(let value of map.values()){
//   console.log(value);
// }

// for(let value of map.entries()){
//   console.log(value);
// }

// map.forEach(e=>{
//   console.log(e);
// })
let s = `...${map}`
let k =[...map]
console.log(s);
// console.log(Array.from(map));