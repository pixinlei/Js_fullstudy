const { insertPictureCosplay } = require('../controllers/pictureSqlConfig')
async function picture(value) {
    try {
        const puppeteer = require('puppeteer');
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.setDefaultTimeout(30000) //超时时间改成30秒吧
        await page.goto(value[0].href);
        console.log('开始获取内容');
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
            console.log('获取完一页内容');
            await page.waitForSelector('.article-content img')
            // 图片
            let title = await page.$$eval('.article-content img',
                (links) => links.map(x => x.src));
            imgs.push(...title)
            console.log('进入下一页');
        }
        imgs = imgs.toString()
        await insertPictureCosplay({ img: imgs, href: value[0].href })
        console.log(value[0].href, '理论上插入了，为什么没有');
        console.log('获取完成一整个的内容');
        await browser.close();
    } catch (error) {
        console.log('来到这里说明获取内容整个有问题，跳过');
    }
}

module.exports = picture
