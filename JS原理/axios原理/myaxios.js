class Axios {
  constructor() {
    this.Interceptors = {
      request: new InterceptorsManage(),
      response: new InterceptorsManage()
    }
  }

  sendAjax(config) {
    
    return new Promise(resolve => {
      const { url = '', method = 'get', data = {} } = config
      // 发ajax请求
      const xhr = new XMLHttpRequest()
      xhr.open(method, url, true)
      xhr.onload = function() {
        // console.log(xhr.responseText);
        resolve(xhr.responseText)
      }
      xhr.send(data)
    })
  }

  request(config) {
this.sendAjax(config)

  }
}
const methodArr = ['get','delete','head','options','put','patch','post']
methodArr.forEach(met => {
  Axios.prototype[met] = function() {
    // 处理单个方法
    if(['get','delete','head','options'].includes(met)) { // 只接受两个参数(url, [config])
      return this.request({
        method: met,
        url: arguments[0],
        ...arguments[1] || {}
      })
    } else { //接受三个参数(url, data, [config])
      return this.request({
        method: met,
        url: arguments[0],
        data: arguments[1] || {},
        ...arguments[2] || {}
      })
    }
  }
})


function CreateAxiosFn() {
  let axios = new Axios()
  let req = axios.request.bind(axios)
  utils.extend(req, Axios.prototype, axios)
  utils.extend(req, axios)
  return req
}

// 拦截器
class InterceptorsManage {
  constructor() {
    this.handlers = []
  }
  use(fullfield, rejected) {
    this.handlers.push({
      fullfield,
      rejected
    })
  }
}

let axios = CreateAxiosFn()

const utils = {
  extend (a, b, content) {
    for(let key in b) {
      if(a.hasOwnProperty(key)) {
        if(typeof b[key] === 'function') {
          a[key] = b[key].bind(context)
        }
      } else {
        a[key] = b[key]
      }
    }
  }
}
