/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  let newtext = text.split(' ')
  for (let j = newtext.length - 1; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      if (newtext[i].length > newtext[i + 1].length) {
        let temp = newtext[i]
        newtext[i] = newtext[i + 1]
        newtext[i + 1] = temp
      }
    }
  }
  let result =(newtext.join(' ').toLowerCase())
  return result.charAt(0).toUpperCase() + result.slice(1)

}
console.log(arrangeWords("Leetcode is cool"));

