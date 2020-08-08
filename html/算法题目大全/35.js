/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
      right = nums.length - 1
  while (right >= left) {
    center = (left + right) >> 1
    if (nums[center] > target) {
      right = center
    } else if (nums[center] < target) {
      left = center + 1
    } else {
      return center
    }
  }
  return left
};

searchInsert([1,3,5,6],2)