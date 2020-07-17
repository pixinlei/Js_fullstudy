/**
 * 功能：计算年收益
 * @author 皮新雷
 * @date 2020-7-16
 * @param {salary 工资 number}
 *  {lever 评级 string}
 * @returns 总收益 number
 */
function calculateBonus(salary,lever = 'C'){
  // console.log(arguments);
  // salary -= 0
    salary = parseInt(salary)
  console.log(typeof (salary - 0));
  // if(arguments.length < 2){
  //   throw new Error('传参不正确，请检查传递工资及等级')
  // }
  if(typeof salary != 'number' || salary < 0){
    throw new TypeError('工资必须是整数')
  }
  if(['A','B','C','D','S'].indexOf(lever) == -1){
    throw new Error('错误的等级')
  }
  if(lever == 'D'){
    return salary * 12
  }else if(lever == 'B'){
    return salary * 18
  }else if(lever == 'A'){
    return salary * 20
  }else if(lever == 'S'){
    return salary * 40
  }
  return salary * 16
}
console.log(calculateBonus('20000'))