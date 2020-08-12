  /**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase()
  s = s.replace(/[^a-z||^0-9]+/ig,"");
  s = s.split('')
  // console.log(s);
  let left = 0
  let right = s.length - 1
  while(left < right){
    if(s[left] === s[right]){
      left++
      right--
      break
    }else{
      return false
    }
  }
  return true
};
console.log(isPalindrome("race a car"));