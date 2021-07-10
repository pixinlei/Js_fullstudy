
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

    // ---------------------------------------------------------------
    let classify = [
        "https://www.msgao.com/tag/sifang/",
        "https://www.msgao.com/tag/rentiyishu/",
        "https://www.msgao.com/tag/yushi/",
        "https://www.msgao.com/tag/shishen/",
        "https://www.msgao.com/tag/zipai/",
        "https://www.msgao.com/tag/kunbang/",
        "https://www.msgao.com/tag/shenghuozhao/",
        "https://www.msgao.com/tag/sipai/"
    ]
    for (let num = 1; num < classify.length; num++) {   

        await page.goto(`${classify[num]}${num == 1 ? '' : `index_${num}.html`}`);
        console.log('这里是正常的');
        await page.waitForSelector('li img')
        console.log('这里能到吗');
        let getHref = await page.$$eval('body > div:nth-child(5) > div.page.both > ul > a:nth-child(12)',
            (links) => links.map(x => x.href));
            console.log(getHref, '????????????///');
        if (getHref == undefined) {
            continue
        }
        let getCount = getHref[0].replace(/[^\d]/g, ' ')
        let getNum = Number(getCount.trim().split(' ')[0])



        for (let i = 1; i <= getNum; i++) {
            await page.goto(`${classify[num]}${i == 1 ? '' : `index_${i}.html`}`);

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
        fs.writeFile(`./ImageCover/cover${num}.json`, JSON.stringify(data, null, "\t"), function (err) {
            if (err) {
                console.log(err);
            }
        });
        // ------------------------------------------------------------------------------------------------
        let urlList = []
        let detailMap = []
        for (let i = 0; i < data.length; i++) {
            data[i].href == undefined ? '' : urlList.push(data[i].href)
        }
        // ---------------------------------------------------------------------------------------------------
        for (let i = 0; i < urlList.length; i++) {
            console.log('开始拿每一页的数据了');
            await page.goto(urlList[i])
            await page.waitForSelector('#contbody > div > div > a > img')

            let href = await page.$$eval('#contbody > div:nth-child(5) > div > div.page > a:nth-child(8)',
                (links) => links.map(x => x.href));
            let count = href[0].replace(/[^\d]/g, ' ')
            let num = Number(count.trim().split(' ')[1])
            let DetailData = []
            // --------------------------------------------------------------------------------------------------
            for (let j = 1; j <= num; j++) {
                let url = j == 1 ? urlList[i] : `${urlList[i].slice(0, -5)}_${j}.html`
                await page.goto(`${url}`);
                await page.waitForSelector('#contbody > div > div > a > img')
                let cover = await page.$$eval('#contbody > div > div > a > img',
                    (links) => links.map(x => x.src));
                DetailData.push(...cover)
            }
            detailMap[i] = {}
            detailMap[i].href = urlList[i]
            detailMap[i].cover = DetailData.toString()
            DetailData = []
            fs.writeFile(`./text/${num}-${i}.json`, JSON.stringify(detailMap, null, "\t"), function (err) {
                if (err) {
                    console.log(err);
                }
            });
            console.log('detail拿到了一页');
        }
    }





})()
