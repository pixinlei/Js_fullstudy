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

// 插入cosplay模块数据
let insertPictureCosplay= function (value) {
  let _sql = ``
    if(value.img) {
      _sql = `UPDATE picture_cosplay SET img="${value.img}" WHERE href="${value.href}";`
      return allServices.query(_sql, value)
    } else {
      console.log('添加之前');
      getPictureCosplay(value.href).then(res => {
        console.log(res, res.length, '查找到了吗');
        if(res.length) return
        console.log('开始添加了');
        _sql = `INSERT INTO picture_cosplay set href='${value.href}',title='${value.title}',cover='${value.cover}';`
        return allServices.query(_sql, value)
      }) // 查找是否已经添加过
    }
  }
// 获取cosplay模块内容数据
let getPictureCosplay = function (value) {
    let _sql = `select * from picture_cosplay LIMIT ${value.start},${value.end};`
    return allServices.query(_sql)
  }
// 查找是否已经添加过
let getPictureCosplay = function (href) {
  let _sql = `select * from picture_cosplay where href="${href}";`
  return allServices.query(_sql)
}
// 导出方法
module.exports = {
  insertPictureCosplay,
    getPictureCosplay
}
