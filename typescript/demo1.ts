const numberArr: number[] = [1,2]
const stringArr: string[] = ['1', '2']
const undefinedArr: undefined[] = [undefined, undefined]

const arr: (number | string)[] = [1, '1']

// 这是第一种类型别名的方法
type Lady = {name: string, age: number}

// 这是第二种类型别名的方法
class Madam {
  name:string
  age:number
}

const xiaojiejie: Lady[] = [
  {name:'zhangsan', age: 18}
]

const xiaojiejie2: Madam[] = [
  {name:'zhangsan', age: 18}
]

