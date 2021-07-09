
const { link } = require('koa-route');
const puppeteer = require('puppeteer');
const fs = require("fs");
const { title } = require('process');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setDefaultTimeout(0)
    let data = []
    for (let i = 0; i < 24; i++) {
        await page.goto(`https://www.msgao.com/tag/baoru/${i == 0 ? '' : `index_${i}.html`}`);

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
    await detail(data)
})

async function detail (data) {
    let detailMap = new Map()
    data.forEach((v, i) => {
        let url = null
        if (i == 0) {
            url = v.href
        }
        else {
            url = `${v.href}_i`
        }
        await page.goto(`${url}`);
        await page.waitForSelector('#contbody > div > div > a > img')
        // let cover = await page.$$eval('#contbody > div > div > a > img',
        //     (links) => links.map(x => x.src));
        let href = await page.$$eval('#contbody > div:nth-child(5) > div > div.page > a:nth-child(8)',
            (links) => links.map(x => x.href));
        let count = href[0].replace(/[^\d]/g, ' ')
        let num = count.trim().split(' ')[1]
        let data = []
        for (let i = 0; i <= num.length; i++) {
            let url = null
            if (i == 0) {
                url = v.href
            }
            else {
                url = `${v.href}_i`
            }
            await page.goto(`${url}`);
            await page.waitForSelector('#contbody > div > div > a > img')
            let cover = await page.$$eval('#contbody > div > div > a > img',
                (links) => links.map(x => x.src));
            data.push(cover)
        }
        detailMap.set(url, data)
    })
}

// for(let i=0;i<data.length;i++) {
//     await page.goto(`${url}`);
// }
fs.writeFile(`./ImageCover/.json`, JSON.stringify(data, null, "\t"), function (err) {
    if (err) {
        console.log(err);
    }
});
    // await browser.close();
}) ();
