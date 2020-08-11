/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  arr.sort()
  let left = 0,
      right = arr.length - 1,
      sum = []

  while (right >= left) {
    center = (left + right) >> 1
    if (arr[center] > target) {
      right = center
    } else if (arr[center] < target) {
      left = center + 1
    } else {
      if(center+1 >= k){
        sum.push(arr[center--])
        return sum.sort()
      }else{
       for(let i=0;i<k;i++){
        sum.push(arr[i])
        return sum.sort()
       }
      }
    }
  }
  if(left>=arr.length-1){
    for(let i=arr.length-1;i<0;i++){
      if(sum.length<=k){
        sum.push(arr[i])
        return sum.sort()
      }
     }
  }else{
    if(left >= k){

    }
  }
};