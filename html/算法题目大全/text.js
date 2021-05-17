let arr = [1, [2, [3, 4,[5,[6,[7,[8]]]]]]]

function flat(arr) {
  let res = []

  arr.forEach((v, i) => {
    if (Array.isArray(v)) {
      res.push(...flat(v))
    }else {
      res.push(v)
    }
  })
  return res
}
console.log(flat(arr));