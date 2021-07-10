
const { link } = require('koa-route');
const puppeteer = require('puppeteer');
const fs = require("fs");
const { title } = require('process');


let urlList = [
    "https://www.msgao.com/rihan/23061.html",
    "https://www.msgao.com/xinggan/23056.html",
    "https://www.msgao.com/xinggan/22780.html",
    "https://www.msgao.com/rihan/22706.html"
]

for (let i = 0; i < urlList.length; i++) {
    Init(urlList[i])
}

async function Init(urlData) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultTimeout(0)
    await getData(page,urlData)
}

async function getData(page,urlData) {
    await page.goto(urlData);
    await page.waitForSelector('#contbody > div > div > a > img')
    let href = await page.$$eval('#contbody > div:nth-child(5) > div > div.page > a:nth-child(8)',
        (links) => links.map(x => x.href));
    let count = href[0].replace(/[^\d]/g, ' ')
    let num = Number(count.trim().split(' ')[1])
    console.log(num);
    await page.goto('https://www.baidu.com/');
}







































// (async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.setDefaultTimeout(0)
//     for (let i = 1; i <= urlList.length; i++) {
//         const page = await browser.newPage();
//         await page.goto(urlList[i]);
//         await page.waitForSelector('#contbody > div > div > a > img')

//         let href = await page.$$eval('#contbody > div:nth-child(5) > div > div.page > a:nth-child(8)',
//             (links) => links.map(x => x.href));
//         let count = href[0].replace(/[^\d]/g, ' ')
//         let num = Number(count.trim().split(' ')[1])
//         let DetailData = []
//         // --------------------------------------------------------------------------------------------------
//         for (let j = 1; j <= num; j++) {
//             let url = j == 1 ? urlList[i] : `${urlList[i].slice(0, -5)}_${j}.html`
//             await page.goto(url);
//             await page.waitForSelector('#contbody > div > div > a > img')
//             let cover = await page.$$eval('#contbody > div > div > a > img',
//                 (links) => links.map(x => x.src));
//             DetailData.push(...cover)
//         }
//         detailMap[i] = {}
//         detailMap[i].href = urlList[i]
//         detailMap[i].cover = DetailData.toString()
//         DetailData = []
//         let a = Math.random()
//         fs.writeFile(`./text/${a}--${j}.json`, JSON.stringify(detailMap, null, "\t"), function (err) {
//             if (err) {
//                 console.log(err);
//             }
//         });
//         console.log('detail拿到了一页');
//     }
// })();


