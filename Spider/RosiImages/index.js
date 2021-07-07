
const { link } = require('koa-route');
const puppeteer = require('puppeteer');
const fs = require("fs");
const { title } = require('process');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultTimeout(0)
    let data = []
    let num = 1
    for (let i = 0; i < 24; i++) {
        await page.goto(`https://www.msgao.com/tag/baoru/${i==0 ? '' : `index_${i}.html`}`);

        await page.waitForSelector('li img')

        let title = await page.$$eval('li img',
            (links) => links.map(x => x.alt));
        let cover = await page.$$eval('li img',
            (links) => links.map(x => x.src));
        let href = await page.$$eval('body > div:nth-child(13) > div > ul > li > a',
            (links) => links.map(x => x.href));

        for (let i = 0; i < 20; i++) {
            let temp = {
                title: title[i],
                cover: cover[i],
                href: href[i]
            }
            data.push(temp)
        }
        console.log('成功下载了一页');
        if (i % 10 == 0) {
            fs.writeFile(`./coverImgType/${num}.json`, JSON.stringify(data, null, "\t"), function (err) {
                if (err) {
                    console.log(err);
                }
            });
            num++
        }
    }


    await browser.close();
})();
