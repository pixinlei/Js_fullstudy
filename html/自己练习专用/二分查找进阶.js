function indexOf(array,v){
  if(array == null || array.length == 0) return console.log(-1);
  let begin = 0,
      end = array.length
  while(begin<end){
    let mid = Math.floor((begin+end))
    if(v<array[mid]){
      end = mid
    }else{
      begin = mid + 1
    }
  }
  return begin
}
