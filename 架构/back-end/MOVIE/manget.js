async function actress(movieData, id) {
    const puppeteer = require('puppeteer');
    const fs = require("fs");
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setDefaultTimeout(6000000) //超时时间改成100分钟吧
    await page.goto(`https://netflav.com/video?id=${id}`);
    await page.waitForSelector('.swiper-slide img')
    await page.waitForSelector('#video-details > div.videodetail_title')
    let languageBtn = await page.waitForSelector('#mainlayout_container > div.header_root > div.header_language')
    await languageBtn.click()
    // $$('#mainvideo').map(x=>x.src)
    // 标题
    let movieTitle = await page.$$eval('#video-details > div.videodetail_title',
        (links) => links.map(x => x.innerHTML));
    // 视频url
    let movieUrl = await page.$$eval('#iframe-block',
        (links) => links.map(x => x.src));
    // 番号和发布日期
    let mach = await page.$$eval('#video-details > div:nth-child(4) > div > div.videodetail_field_values',
        (links) => links.map(x => x.innerText));
    // 预览图片
    let previewPicture = await page.$$eval('.swiper-slide img',
        (links) => links.map(x => x.src));
    // 磁力标题，大小，日期
    let magneticTitle = await page.$$eval('.magnet_item_title',
        (links) => links.map(x => x.innerText));
    // 磁力链接
    let magnetic = await page.$$eval('.magnet_item_title a',
        (links) => links.map(x => x.href));
    movieData.movieTitle = movieTitle
    movieData.movieUrl = movieUrl
    movieData.mach = mach
    movieData.previewPicture = previewPicture
    movieData.magneticTitle = magneticTitle
    movieData.magnetic = magnetic
    console.log('电影url成功拿到了');
    // await browser.close();
}

module.exports = actress
