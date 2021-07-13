async function movies(actressCoverData, pageNum = 1) {
    const puppeteer = require('puppeteer');
    const fs = require("fs");
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultTimeout(0)
    if(pageNum == 1) {
        await page.goto(`https://netflav.com/actress`);
    } else {
        await page.goto(`https://netflav.com/actress?page=${pageNum}`);
    }
    await page.waitForSelector('#main_segment > div > div > div:nth-child(2) > div:nth-child(1) > div > a > div > img')
    let languageBtn = await page.waitForSelector('#mainlayout_container > div.header_root > div.header_language')
    languageBtn.click()

    let title = await page.$$eval('#main_segment > div > div > div:nth-child(2) > div:nth-child(1) > div > a > div > div > div:nth-child(1)',
    (links) => links.map(x => x.innerHTML));
    let cover = await page.$$eval('#main_segment > div > div > div:nth-child(2) > div:nth-child(1) > div > a > div > img',
    (links) => links.map(x => x.src));
    let movieCount = await page.$$eval('#main_segment > div > div > div:nth-child(2) > div:nth-child(1) > div > a > div > div > div:nth-child(2)',
    (links) => links.map(x => Number((x.innerHTML).replace(/[^\d]/g, ' '))));

    for(let i=0;i<title.length;i++) {
        actressCoverData.push({
            title: title[i],             
            cover: cover[i],             
            movieCount: movieCount[i],              
        })
    }
}

module.exports = actress
