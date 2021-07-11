const { Init, cleanMoiveActress } = require('./movieSqlConfig.js');


(async() => {
    await cleanMoiveActress()
    await LoopFn()
})()

async function LoopFn() {
    let NextPage = 1
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
}

async function everyDayInit(pageNum = 1) {
    let temp = await Init(pageNum)
    return temp
}




setInterval(async() => {
    await cleanMoiveActress()
    await LoopFn()
}, 259200000) //三天更新一次