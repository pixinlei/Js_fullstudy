/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  let min = Math.min(...[piles]) //最慢吃香蕉的速度
  let max = Math.max(...[piles])  //最快吃香蕉的速度
  if(H<piles.length) return -1
  while(min<max){
    let mid = Math.floor((min+max)/2)
    for(const i of piles){
      let result = Math.ceil(i/mid)
      console.log(result);
    }
    return
    // if(result == H){
    //   max = mid
    // }else if(result == H){
    //   min = result + 1
    // }else{
    //   max = mid
    // }
  }
  return console.log(min);
};
minEatingSpeed([3,6,7,11],8)
// minEatingSpeed([30,11,23,4,20],5)
// minEatingSpeed([30,11,23,4,20],6)