const api = () => {
  return new Promise((resolve,reject) => {
    // ToDo
    let q = toUtf8(q)
    let from = zh-CHS
    let to = en
    let appKey = '07f21671c883a7dd'
    let salt = guid()
    let input
    if(q.length > 20) {
      input = q.slice(0,10) + q.length + q.slice(-10)
    }else {
      input = q.slice(0,10) + q.length + q
    }
    let sign = sha256('07f21671c883a7dd' + input + salt + curtime + HDgQZZbr3egKH7sugq9MlhI1POKdUIo3)
    let signType = 'v3'
    let curtime = Date.now()
  })
}


// js字符串转utf-8
function toUtf8(str) {   
  var out, i, len, c;   
  out = "";   
  len = str.length;   
  for(i = 0; i < len; i++) {   
      c = str.charCodeAt(i);   
      if ((c >= 0x0001) && (c <= 0x007F)) {   
          out += str.charAt(i);   
      } else if (c > 0x07FF) {   
          out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));   
          out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));   
          out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
      } else {   
          out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));   
          out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
      }   
  }   
  return out;   
}

// UUID
function guid() {
  function S4() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}