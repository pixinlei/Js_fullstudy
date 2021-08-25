const { insertPictureCosplay } = require('../controllers/pictureSqlConfig')
async function picture(value) {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultTimeout(6000000) //超时时间改成100分钟吧
    console.log(value, '首先这里是拿到了之前的对象是吗');
    await page.goto(value.href);
    await page.waitForSelector('.article-content img')
    await page.waitForSelector('.pagination a')

    // 总页数
    let totalPageHref = await page.$$eval('.pagination a',
        (links) => links.map(x => x.href));
    let totalPage = totalPageHref.length / 2
    let pictureHref = totalPageHref.slice(0, totalPage)
    console.log('这里是获取页数信息');
    await browser.close();
    console.log('经过了这里');
    for await (let item of pictureHref) {
        console.log('这里1');
        console.log(item);
        await page.goto(item);
        console.log('这里2');
        await page.waitForSelector('.article-content img')
        // 图片
        let title = await page.$$eval('.article-content img',
            (links) => links.map(x => x.src));
        // pictureList.push(title)

        insertPictureCosplay({img: JSON.stringify(title)})
        console.log('进入图片数据下一页');
        // await browser.close();
    }
    console.log('换下一个');
}

module.exports = picture
