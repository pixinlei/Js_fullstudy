const { insertPictureCosplay } = require('../controllers/pictureSqlConfig')
async function picture(value) {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultTimeout(6000000) //超时时间改成100分钟吧
    await page.goto(value[0].href);
    await page.waitForSelector('.article-content img')
    await page.waitForSelector('.pagination a')

    // 总页数
    let totalPageHref = await page.$$eval('.pagination a',
        (links) => links.map(x => x.href));
    let totalPage = (totalPageHref.length / 2) - 1
    let pictureHref = totalPageHref.slice(0, totalPage)

    let imgs = []
    for await (let item of pictureHref) {
        await page.goto(item);
        await page.waitForSelector('.article-content img')
        // 图片
        let title = await page.$$eval('.article-content img',
            (links) => links.map(x => x.src));
        imgs.push(...title)
        console.log('进入下一页');
    }
    imgs = imgs.toString()
    console.log(imgs, '这里是正常的字符串');
    await insertPictureCosplay({img: imgs, href: value[0].href})
    await browser.close();
}

module.exports = picture
