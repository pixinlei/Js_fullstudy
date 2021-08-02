const movies = require('../MOVIE/movies');
const { getMovieActress, inserMoives, findMovies } = require('./movieSqlConfig.js');
let MovieHref = []; //这里是要储存最终的结果
let hasMorePage = true;
    (() => {
        getAllCoverData()
    })()

// async function loopFn() {
//     let start = 0
//     let end = 9
//     let MovieHref = []
//     await getCoverData(start, end, MovieHref)
// }

// 遍历拿到所有的封面数据
async function getAllCoverData() {
    let start = 0
    let end = 1
    while(hasMorePage) {
        await getCoverData(start, end, MovieHref)
        start++
        // end++ // end代表的是最多获取多少条数据
    }
}

// 先从数据库里拿到封面数据
async function getCoverData(start, end, MovieHref) {
    let totalNum = 0
    let current = 0
    let tempArr = []
    await getMovieActress(start, end).then(res => {
        if (!res.length) {
            hasMorePage = false
            return
        }
        totalNum = res.length
        tempArr = res
    })
    while (current < totalNum) {
        let count = Number(tempArr[current].movieCount)
        let name = String(tempArr[current].title)
        current++
        MovieHref = [] 
        await getDetailInformation('actress', name, count, MovieHref)
        MovieHref = []
    }
}

// 拿到href和count，进去获取movie的详细信息
async function getDetailInformation(type, name, count, MovieHref) {
    await movies(type, name, count, MovieHref)
    MovieHref.forEach(async (v,i) => {
        // 已经有的就不插入
        let isAlreadyInsert = await findMovies(v.title)
        console.log(isAlreadyInsert, '这里数据库中已经有的，就不插入');
        if(isAlreadyInsert.length) return
        inserMoives(v)
    })    
}

setInterval(async () => {
    // await cleanMoiveActress()
    getAllCoverData()
}, 1000 * 60 * 60 * 24 * 7) //三天更新一次