const movies = require('../MOVIE/manget.js');
const { getMovieActressDetail, findMovies, updataMoiveUrl } = require('./movieSqlConfig.js');

(() => {
    getAllMovieData()
})()

// 遍历拿到所有的电影详情数据
async function getAllMovieData() {
    let start = {value: 0}
    let end = {value: 1}
    let next = true
    while(next) {
        next = await getOneMovieData(start, end)
        console.log('成功保存一条电影记录');
    }
    console.log('成功保存完所有电影记录');
}

// 获取一条电影数据
async function getOneMovieData(start, end) {
    let movieData = {}
    let hasNextPage = await getMovieActressDetail(start.value, end.value)
    if (hasNextPage.length) { // 有数据，就可以前往下一条数据
        start.value++
        // end.value++ // end代表的是取多少条数据
    } else { // 没有数据，不能前往下一条数据
        return false
    }
    let currentData = await findMovies(hasNextPage[0].title)
    if (currentData[0].movieUrl) { // 已经保存过了，直接返回就可以了
        return true
    }
    await movies(movieData, currentData[0].id)
    let movieTitle = await movieData.movieTitle
    let movieUrl = await movieData.movieUrl
    let mach = await movieData.mach
    let previewPicture = await movieData.previewPicture
    let magneticTitle = await movieData.magneticTitle
    let magnetic = await movieData.magnetic
    let id = await currentData[0].id
    await updataMoiveUrl(movieTitle,movieUrl, mach, previewPicture, magneticTitle, magnetic, id)
    movieData = {}
    return true
}


// 每三天更新一次
setInterval(()=> {
    getAllMovieData()
}, 1000 * 60 * 60 *24 *3)




