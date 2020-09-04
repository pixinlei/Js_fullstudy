import axios from 'axios';//  ???

const baseUrl = '';
// ???
export function get(url) {
  return function (params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const {errno, data} = res.data
      //上面这一句就等于下面这两行，，，es6解构的内容，对象的解构
      //const errno = res.data.errno
      //const data = res.data.data
      if (errno === 0) {
        return data
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}