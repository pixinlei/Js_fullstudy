/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let index = arr.indexOf(x)
  let sum = []
  if(index === -1) {
    if(x<arr[0] && sum.length<=k){
      let i = 0
      sum.push(arr[i++])
    }else if(x>arr[arr.length-1] && sum.length){
      let i =arr.length - 1
      sum.push(i--)
    }else{
      
    }
  }else{
    for(let i=index-1;i>=0;i--){
      for(let j=index+1;j<arr.length;i++){
        if(arr[i]>=arr[j] && sum.length<=k){
          sum.push(arr[j])
        }else if(arr[i]<arr[j] && sum.length<=k){
          sum.push(arr[i])
        }else{
          return sum.sort((a,b)=>{a-b})
        }
      }
    }
  }
};