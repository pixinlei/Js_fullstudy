let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]

function arrToTree(arr, pid) {
  let result = []
  getChildren(arr,result, pid)
  return result
}

function getChildren(data, result, pid) {
  data.forEach((v,i) => {
    if(v.pid == pid) {
      let newItem = {...v, children: []}
      result.push(newItem)
      getChildren(data, newItem.children, v.id)
    }
  })
}

console.log(arrToTree(arr, 0));