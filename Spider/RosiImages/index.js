
const { link } = require('koa-route');
const puppeteer = require('puppeteer');
const fs = require("fs");
const { title } = require('process');
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultTimeout(0)
    let data = []
    // 23
    for (let i = 1; i <= 23; i++) {
        await page.goto(`https://www.msgao.com/tag/baoru/${i == 1 ? '' : `index_${i}.html`}`);

        await page.waitForSelector('li img')

        let title = await page.$$eval('li img',
            (links) => links.map(x => x.alt));
        let cover = await page.$$eval('li img',
            (links) => links.map(x => x.src));
        let href = await page.$$eval('body > div:nth-child(5) > div.taglist > ul > li > a.taglisthtitle',
            (links) => links.map(x => x.href));

        for (let i = 0; i < title.length; i++) {
            let temp = {
                title: title[i],
                cover: cover[i],
                href: href[i]
            }
            data.push(temp)
        }
        console.log('成功下载了一页');
    }
    // ------------------------------------------------------------------------------------------------
    let urlList = []
    let detailMap = []
    for (let i = 0; i < data.length; i++) {
        data[i].href == undefined ? '' : urlList.push(data[i].href)
    }
    // ---------------------------------------------------------------------------------------------------
    for (let i = 0; i < urlList.length; i++) {
        console.log('开始拿每一页的数据了');
        // console.log(urlList[i]);
        await page.goto(urlList[i])
        await page.waitForSelector('#contbody > div > div > a > img')

        let href = await page.$$eval('#contbody > div:nth-child(5) > div > div.page > a:nth-child(8)',
            (links) => links.map(x => x.href));
        // console.log(href[0], '-----------');
        let count = href[0].replace(/[^\d]/g, ' ')
        let num = Number(count.trim().split(' ')[1])
        // console.log(num, '????????????????');
        let DetailData = []
        // --------------------------------------------------------------------------------------------------
        // num + 1
        for (let j = 1; j <= num; j++) {
            let url = j == 1 ? urlList[i] : `${urlList[i].slice(0, -5)}_${j}.html`
            // console.log(url, '怎么了吗');
            await page.goto(`${url}`);
            // console.log('找到url了吗');
            await page.waitForSelector('#contbody > div > div > a > img')
            let cover = await page.$$eval('#contbody > div > div > a > img',
                (links) => links.map(x => x.src));
            DetailData.push(...cover)
            // console.log(cover);
        }
        // detailMap[urlList[i]] = DetailData.toString()
        detailMap[i] = {}
        // console.log(urlList[i], '本来是一页的网址');
        detailMap[i].href = urlList[i]
        // console.log(detailMap[i].href, '没有拿到网址');
        detailMap[i].cover = DetailData.toString()
        // console.log(detailMap[i].cover, '没有拿到图片');
        // console.log(DetailData.toString(), '本来是图片');
        DetailData = [] 
        // console.log(detailMap, '一页数据');
        // console.log('出来了吗');
        fs.writeFile(`./text/${i}.json`, JSON.stringify(detailMap, null, "\t"), function (err) {
            if (err) {
                console.log(err);
            }
        });
        console.log('detail拿到了一页');
    }

    // await browser.close();
})()
