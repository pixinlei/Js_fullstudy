let origin = 'a.b.c'

// 结果：  { a: { b: c } }

function getObject(str) {
    let result = {}

    if(!str.includes('.')) return str        
    
    for(let i=0;i<str.length;i++) {
        if(str[i] == '.') {
            let key = str.slice(0, i)
            result[key] = getObject(str.slice(i+1, str.length + 1))
            break
        }
    }
    return result
}

console.log(getObject(origin));