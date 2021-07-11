var mysql = require('mysql')
var config = require('./defaultConfig')



const actress = require('../MOVIE/actress')




// 链接线程池
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT,
})

// 统一链接数据库的方法
let allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) { // 建立链接
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release() // 释放链接
          })
        }
      })
    })
  }
}

// 自动执行方法
async function Init(pageNum=1) {
  var actressCoverData = []
  await actress(actressCoverData, pageNum)
  if(!actressCoverData.length) return -1
  for (let i = 0; i < actressCoverData.length; i++) {
    await inserMoiveActress(actressCoverData[i])
  }
  
}



let cleanMoiveActress = function () {
  let _clean = `truncate table movie_actress;`
  allServices.query(_clean)
}

// 添加女优封面到数据库中
let inserMoiveActress = function (value) {
  let _sql = `INSERT INTO movie_actress SET title="${value.title}",cover="${value.cover}",href="${value.href}",movieCount="${value.movieCount}";`
  return allServices.query(_sql, value)
}




// 导出方法
module.exports = {
  inserMoiveActress,
  Init,
  cleanMoiveActress
}
