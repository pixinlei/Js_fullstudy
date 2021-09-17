// const pictureData = require('./pictureData')
const { insertPictureCosplay } = require('../controllers/pictureSqlConfig')
async function picture(type, currentPage = 1) {
    const puppeteer = require('puppeteer');
    // const fs = require("fs");
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setDefaultTimeout(20 * 1000) //超时时间改成100分钟吧
    let url = currentPage == 1 ? `https://www.jpxgmn.top/${type}/` : `https://www.jpxgmn.top/${type}/page_${currentPage}.html`
    await page.goto(url);
    console.log('开始获取封面');
    await page.waitForSelector('body > section > div.content-wrap > div > div.widget-title > div > ul img')

    // let currentPage = 1 // 初始化页数为1
    // 总页数
    let totalPage = await page.$$eval('.pagination strong',
        (links) => links.map(x => x.innerText));
    totalPage = Math.ceil(totalPage[0] / 20)
    // 标题
    let title = await page.$$eval('.related_box a',
        (links) => links.map(x => x.title));
    let href = await page.$$eval('.related_box a',
        (links) => links.map(x => x.href));
    // 封面图片
    let cover = await page.$$eval('.related_box img',
        (links) => links.map(x => x.src));
    let pageCoverData = []
    title.forEach((v, i) => {
        pageCoverData.push({
            title: title[i],
            cover: cover[i],
            href: href[i]
        })
    })
    pageCoverData.forEach((v, i) => {
        insertPictureCosplay({
            title: v.title,
            cover: v.cover,
            href: v.href,
        })
    })
    pageCoverData = []
    console.log('一页封面获取完成');
    await browser.close();
    if (totalPage > currentPage) await picture(type, currentPage + 1)
}

module.exports = picture
