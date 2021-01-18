// 对输入的字符串，去除其中的字符'b'以及连续出现的'a'和'c'
// 'aacbd' -> 'ad'
// 'aabcd' -> 'ad'
// 'aaabbccc' -> ''

function fn(str) {
  let temp = []
  for(let i=0;i<str.length;i++) {
    if(str[i] === 'a' || str[i] === 'c') {
      temp.push(i)
    }
  }
  for(let i=0;i<temp.length;i++) {
    str.splice(temp[i], 1)
  }
  return str
}

fn('aacbd')