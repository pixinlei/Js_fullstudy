/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  nums1.sort()
  nums2.sort()
  let sum = []
  for(let i=0;i<nums1.length;i++){
    for(let j=0;j<nums2.length;j++){
      if(nums1[i]>nums2[j]){

      }else if(nums1[i] === nums2[j]){
        sum.push(nums1[i])
      }else{
        break
      }
    }
  }
  return dedupe(sum)
};
function dedupe(array){
  return Array.from(new Set(array));
 }