function deepClone(obj) {
  let res = obj instanceof 'object' ? {} : []
  for(let i=0;i<obj.length;i++) {
    if(Object.hasOwnproperty(obj[i])) {
      if(typeof obj[i] === 'object') {
        res[i] = deepClone(obj[i])
      } else {
        res[i] = obj[i]
      }
    }
  }
  return res
}