async function actress(actressCoverData, pageNum = 1) {
    const puppeteer = require('puppeteer');
    const fs = require("fs");
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setDefaultTimeout(6000000) //超时时间改成100分钟吧
    if (pageNum == 1) {
        await page.goto(`https://netflav.com/actress`);
    } else {
        await page.goto(`https://netflav.com/actress?page=${pageNum}`);
    }
    await page.waitForSelector('#main_segment > div > div > div:nth-child(2) > div:nth-child(1) > div > a > div > img')
    let languageBtn = await page.waitForSelector('#mainlayout_container > div.header_root > div.header_language')
    await languageBtn.click()
    
    let title = await page.$$eval('#main_segment > div > div > div:nth-child(2) > div:nth-child(1) > div > a > div > div > div:nth-child(1)',
        (links) => links.map(x => x.innerHTML));
    let cover = await page.$$eval('#main_segment > div > div > div:nth-child(2) > div:nth-child(1) > div > a > div > img',
        (links) => links.map(x => x.src));
    let href = await page.$$eval('#main_segment > div > div > div:nth-child(2) > div:nth-child(1) > div > a',
        (links) => links.map(x => x.href));
    let movieCount = await page.$$eval('#main_segment > div > div > div:nth-child(2) > div:nth-child(1) > div > a > div > div > div:nth-child(2)',
        (links) => links.map(x => Number((x.innerHTML).replace(/[^\d]/g, ' '))));

    for (let i = 0; i < title.length; i++) {
        actressCoverData.push({
            title: title[i],
            cover: cover[i],
            href: href[i],
            movieCount: movieCount[i],
        })
    }
    console.log('一页封面保存到数据库中了');
    await browser.close();
}

module.exports = actress
