/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  s.split('')
  t.split('')
  for(let i=0;i<t.length;i++){
   s.splice(s.indexOf(t[i]),1)
  }
  if(s.length>0){
    return false
  }
  return true
};