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
async function Init (pageNum = 1) {
  var actressCoverData = []
  await actress(actressCoverData, pageNum)
  if (!actressCoverData.length) return -1
  for (let i = 0; i < actressCoverData.length; i++) {
    let isAlreadyInsert = await findMovieActress(actressCoverData[i].title)
    console.log(isAlreadyInsert, '如果已经有了的话，那就会拿到一条数据，否则为空数组');
    if(isAlreadyInsert.length) return
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

// 在添加女优封面之前查看这条数据是否已经被添加上了
let findMovieActress = function (title) {
  let _sql = `select * from movie_actress where title="${title}";`
  return allServices.query(_sql)
}

// 获取女优封面数据
let getMovieActress = function (start, end) {
  let _sql = `select * from movie_actress LIMIT ${start},${end};`
  // let _sql = `select * from movie_actress;`
  return allServices.query(_sql)
}

// 将女优电影数据存到数据库中
let inserMoives = function (value) {
  let _sql = `INSERT INTO movie_actress_detail SET title="${value.title}",cover="${value.cover}",href="${value.href}",id="${value.id}",name="${value.name}";`
  return allServices.query(_sql, value)
}

// 在添加女优电影数据之前查看这条数据是否已经被添加上了
let findMovies = function (title) {
  let _sql = `select * from movie_actress_detail where title="${title}";`
  return allServices.query(_sql)
}

// 获取女优电影详情数据
let getMovieActressDetail = function (start, end) {
  let _sql = `select * from movie_actress_detail LIMIT ${start},${end};`
  return allServices.query(_sql)
}

// 将女优电影url数据存到数据库中
let updataMoiveUrl = function (movieTitle,movieUrl,mach,previewPicture,magneticTitle,magnetic, id) {
  movieTitle = String(movieTitle)
  movieUrl = String(movieUrl)
  mach = String(mach)
  previewPicture = String(previewPicture)
  magneticTitle = String(magneticTitle)
  magnetic = String(magnetic)
  let _sql = `UPDATE movie_actress_detail SET movieTitle="${movieTitle}", movieUrl="${movieUrl}", mach="${mach}",previewPicture="${previewPicture}",magneticTitle="${magneticTitle}",magnetic="${magnetic}" WHERE id="${id}";`
  return allServices.query(_sql)
}


// 导出方法
module.exports = {
  inserMoiveActress,
  Init,
  cleanMoiveActress,
  getMovieActress,
  inserMoives,
  getMovieActressDetail,
  findMovies,
  updataMoiveUrl
}
