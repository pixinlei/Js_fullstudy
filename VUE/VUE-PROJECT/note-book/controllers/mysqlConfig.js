var mysql = require('mysql')
var config = require('./defaultConfig')

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
  query: function(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) { // 建立链接
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

// 读取所有title表数据
let getAllUsers = function() {
  let _sql =  `select * from title;`
  return allServices.query(_sql)
}

// 导出方法
module.exports = {
  getAllUsers,
}
