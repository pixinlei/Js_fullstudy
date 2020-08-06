
  /**
* @param {number[]} nums
* @return {string}
*/
  var largestNumber = function (nums) {
    let arr = nums.sort((a, b) => ('' + a + b) - ('' + b + a))
    let b = arr.split(',').map(Number);
    // return a
    // let b = parseInt(a)
    return b
    // let c = '' + b
    // return c
  };
  console.log(largestNumber([10, 2]));
