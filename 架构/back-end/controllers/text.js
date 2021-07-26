const { Init, cleanMoiveActress, getMovieActress } = require('./movieSqlConfig.js');

const movies = require('../MOVIE/movies')



    (async () => {
        await cleanMoiveActress()
        await LoopFn()
    })()

async function LoopFn () {
    let NextPage = 1
    // 首先是拿到了所有的女优封面相关的信息
    while (NextPage) {
        console.log('开始下载一页数据');
        let temp = await everyDayInit(NextPage)
        console.log('下载完成');
        if (temp == undefined) {
            NextPage++
        } else {
            console.log('没有更多了');
            NextPage = 0
        }
    }

    // 循环取出这些信息，然后拿到电影的详细信息

}

// 拿到一个女优电影信息
async function getOneMovie (type, value, count) {
    movies(movieData, type, value, count)
}


// 拿到一页女优封面信息
async function everyDayInit (pageNum = 1) {
    let temp = await Init(pageNum)
    return temp
}




setInterval(async () => {
    await cleanMoiveActress()
    await LoopFn()
}, 1000 * 60 * 60 * 24 * 7) //三天更新一次