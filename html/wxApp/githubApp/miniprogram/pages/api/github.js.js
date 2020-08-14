const trendings = () => newpromise((resolve,reject) =>{
  setTimeout(()={
    resolve([{
      repo:"阿雷项目"
    }])
  },2000)
  // wx.request()
})

const getRepo = () => newPromise((resolve,reject) => {
  const url = 'http://github-trending-api.now.sh/repositories'
  wx.request({
    url,
    success(res) {
      console.log(res);
      resolve(res)
    }
  })
})

module.exports = {
  trendings,
  getRepo
}