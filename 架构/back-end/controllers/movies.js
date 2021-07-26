const { getMovieActress } = require('./movieSqlConfig.js');

const movies = require('../MOVIE/movies');



(async () => {
    let start = 0
    let end = 99
    // let movieData = [] // 100条女优封面数据
    let movieData = [
        {
            "title": "渡辺まお",
            "cover": "https://pics.javbus.com/actress/w80_a.jpg",
            "href": "https://netflav.com/all?actress=%E6%B8%A1%E8%BE%BA%E3%81%BE%E3%81%8A",
            "movieCount": 15
        },
    ] // 100条女优封面数据
    let needToSaveData = [] //遍历拿到的数据，将它存到数据库中
    let hasNextPage = true
    while (hasNextPage) {
        hasNextPage = await GetAllMovie('actress', start, end, movieData, needToSaveData)
        console.log(needToSaveData, '------------------------------------------');
    }
})()


async function GetAllMovie (type, start, end, movieData, needToSaveData) {
    // await getMovieActress(start, end).then(res => {
    //     movieData = res
    //     start += 100
    //     end += 100
    // }).catch(err => {
    //     movieData = []
    // })
    if (movieData.length) {
        for (let i = 0; i < movieData.length; i++) {
            await getOneMovie(movieData[i], type, movieData[i].title, movieData[i].movieCount, needToSaveData)
        }
    }
    if (movieData.length > 0) {
        movieData = []
        return true
    } else {
        movieData = []
        return false
    }
    // return movieData.length > 0 ? true : false
}


// 拿到一个女优电影信息
async function getOneMovie (movieData, type, value, count, needToSaveData) {
    movies(movieData, type, value, count, needToSaveData)
}





setInterval(async () => {

}, 1000 * 60 * 60 * 24 * 7) //三天更新一次