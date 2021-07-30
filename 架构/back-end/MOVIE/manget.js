async function actress(movieData, id) {
    const puppeteer = require('puppeteer');
    const fs = require("fs");
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultTimeout(6000000) //超时时间改成100分钟吧
    await page.goto(`https://netflav.com/video?id=${id}`);
    // await page.waitForSelector('#video-details > div:nth-child(4) > div:nth-child(5) > div > div > img')
    let languageBtn = await page.waitForSelector('#mainlayout_container > div.header_root > div.header_language')
    await languageBtn.click()
    // $$('#mainvideo').map(x=>x.src)
    // 有两个大小标题
    let movieTitle = await page.$$eval('#video-details > div.videodetail_title > font > font',
        (links) => links.map(x => x.innerText));
    // 视频url
    let movieUrl = await page.$$eval('#iframe-block',
        (links) => links.map(x => x.src));
    // 番号和发布日期
    let mach = await page.$$eval('#video-details > div:nth-child(4) > div > div.videodetail_field_values > font > font',
        (links) => links.map(x => x.innerText));
    // 预览图片
    // let previewPicture = await page.$$eval('#video-details > div:nth-child(4) > div:nth-child(5) > div > div > img',
    //     (links) => links.map(x => x.src));
    // 磁力标题，大小，日期
    let magneticTitle = await page.$$eval('.magnet_item_title font font',
        (links) => links.map(x => x.innerText));
    // 磁力链接
    let magnetic = await page.$$eval('.magnet_item_title a',
        (links) => links.map(x => x.href));
    movieData = {
        movieTitle,
        movieUrl,
        mach,
        // previewPicture,
        magneticTitle,
        magnetic
    }
    console.log(movieData, '是否都拿到了呢');
    console.log('一页封面保存到数据库中了');
    // await browser.close();
}

module.exports = actress
