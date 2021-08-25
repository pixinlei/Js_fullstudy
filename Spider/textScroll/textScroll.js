async function TextScroll() {
    const puppeteer = require('puppeteer');
    const fs = require("fs");
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultTimeout(0)
    await page.goto(`https://juejin.cn/`);
    // await page.waitForSelector('#main_segment > div > div > div:nth-child(2) > div:nth-child(1) > div > a > div > img')

    // let title = await page.$$eval('#main_segment > div > div > div:nth-child(2) > div:nth-child(1) > div > a > div > div > div:nth-child(1)',
    // (links) => links.map(x => x.innerHTML));
    // let cover = await page.$$eval('#main_segment > div > div > div:nth-child(2) > div:nth-child(1) > div > a > div > img',
    // (links) => links.map(x => x.src));
    // let movieCount = await page.$$eval('#main_segment > div > div > div:nth-child(2) > div:nth-child(1) > div > a > div > div > div:nth-child(2)',
    // (links) => links.map(x => Number((x.innerHTML).replace(/[^\d]/g, ' '))));

    // for(let i=0;i<title.length;i++) {
    //     actressCoverData.push({
    //         title: title[i],             
    //         cover: cover[i],             
    //         movieCount: movieCount[i],             
    //     })
    // }
    scrollPage(page)
}

async function scrollPage(page, needHeight = 100) {
    page.evaluate(() => {
        let i = 0
        
    })
    // await page.evaluate(async () => {
    //     await new Promise((resolve) => {
    //         let totalHeight = 0
    //         let distance = 100
    //         let timer = setInterval(() => {
    //             window.scrollBy(0, distance)
    //             totalHeight += distance

    //             if(totalHeight >= needHeight) {
    //                 clearInterval(timer)
    //                 resolve()
    //             }
    //         }, 120)
    //     })
    // })
}


module.exports = TextScroll
