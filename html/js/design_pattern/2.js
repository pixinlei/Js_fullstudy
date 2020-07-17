// // JSON 對象
// var calculateBonus = {
//   salary:'20000',
//   A:this.salary * 20,
//   B:this.salary * 18,
//   C:this.salary * 16,
//   D:this.salary * 12,
//   mysalary:function(a){

//   }
// }
// 对象字面量
//工资发放策略
var strategies = {
  'A':function(salary){
    return salary * 20
  },
  'B':function(salary){
    return salary * 18
  },
  'C':function(salary){
    return salary * 16
  },
  'D':function(salary){
    return salary * 12
  },
  'S':function(salary){
    return salary * 100
  },
}
/**
 *@author 
 */
calculateBonus = function(salary,lever = 'C'){
  console.log(strategies[lever])
  console.log(typeof strategies[lever]);
  return strategies[lever](salary)
}

console.log(calculateBonus(20000));