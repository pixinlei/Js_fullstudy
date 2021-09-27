let url = 'http://sample.com/?a=1&e&b=2&c=xx&d#hash'

// 输出 {a: 1, b: 2, c: 'xx', d: ''}

function parsingUrl(url) {
    let params = url.split('?')[1]
    console.log(params);
    let newParams = String(params).split('&')
    let result = {}
    newParams.forEach((v, i) => {
        let needData = v.split('=')
        result[needData[0]] = needData[1]
    })
    return result
}

console.log(parsingUrl(url));