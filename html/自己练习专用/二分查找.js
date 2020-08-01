/**
 * 查找有序数组array中的位置
 * @param {type:Array} array 
 * @param {type:number} v 
 */
function indexOf(array,v){
  if(array == null || array.length == 0) return console.log(-1);
  let begin = 0,
      end = array.length
  while(begin<end){
    let mid = (begin + end) / 2
    if(v<array[mid]){
      end = mid 
    }else if(v>array[mid]){
      begin = mid 
    }else{
      return console.log(mid);
    }
  }
  return console.log(-1);
}



