async function movies (type, value, count, needToSaveData) {
    const puppeteer = require('puppeteer');
    const fs = require("fs");
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultTimeout(6000000) //超时时间改成100分钟吧
    let newcount = count
    let pageNum = 1
    while (newcount > 0) {
        if (pageNum == 1) {
            newcount -= 20
            pageNum++
            await page.goto(`https://netflav.com/all?${type}=${value}`);
        } else {
            if (newcount > 0) {
                await page.goto(`https://netflav.com/all?${type}=${value}&page=${pageNum}`);
                newcount -= 20
                pageNum++
            }
        }
        await page.waitForSelector('#main_segment > div > div:nth-child(2) > div.video_grid_container > div.grid_root > div > a > div.grid_title')
        await page.waitForSelector('#main_segment > div > div:nth-child(2) > div.video_grid_container > div.grid_root > div > a:nth-child(1) > div > div > img')
        await page.waitForSelector('#main_segment > div > div:nth-child(2) > div.video_grid_container > div.grid_root > div > a:nth-child(1)')
        let languageBtn = await page.waitForSelector('#mainlayout_container > div.header_root > div.header_language')
        await languageBtn.click()

        let title = await page.$$eval('#main_segment > div > div:nth-child(2) > div.video_grid_container > div.grid_root > div > a > div.grid_title',
            (links) => links.map(x => x.innerHTML));
        let cover = await page.$$eval('#main_segment > div > div:nth-child(2) > div.video_grid_container > div.grid_root > div > a:nth-child(1) > div > div > img',
            (links) => links.map(x => x.src));
        let href = await page.$$eval('#main_segment > div > div:nth-child(2) > div.video_grid_container > div.grid_root > div > a:nth-child(1)',
            (links) => links.map(x => x.href));

        for (let i = 0; i < title.length; i++) {
            needToSaveData.push({
                title: title[i],
                cover: cover[i],
                href: href[i],
                id:href[i].split('id=')[1],
                name: value
            })
        }
        console.log('一页电影详情下载完成');
    }
    console.log('一名女优电影详情下载完成');
    await browser.close();
}

module.exports = movies
