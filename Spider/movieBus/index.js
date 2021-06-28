
const { link } = require('koa-route');
const puppeteer = require('puppeteer');
const fs = require("fs");
const { title } = require('process');

let data_ACTRESSES = []
let ACTRESSES_content_data = {content:[]}

async function main() {
    const browser = await puppeteer.launch({ headless: false }); const page = await browser.newPage();
    await page.setDefaultTimeout(0)
    await ACTRESSES()
    await ACTRESSES_content()
}


// 有码女优 封面
async function ACTRESSES() {
    const browser = await puppeteer.launch({ headless: false }); const page = await browser.newPage();
    let num = 1
    for (let i = 1; i < 2; i++) {
        await page.goto(`https://www.javbus.com/actresses/${i == 1 ? '' : i}`);

        await page.waitForSelector('#waterfall > div > a')

        let href = await page.$$eval('#waterfall > div > a',
            (links) => links.map(x => x.href));
        data_ACTRESSES.push(href)
        console.log('成功下载了一页');
    }

    // fs.writeFile(`./ACTRESSES/${num}.json`, JSON.stringify(data, null, "\t"), function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    // });
}

// 有码女优内容页
async function ACTRESSES_content() {
    const browser = await puppeteer.launch({ headless: false }); const page = await browser.newPage();
    for (let i = 0; i < data_ACTRESSES.length; i++) {
        for (let j = 0; j < data_ACTRESSES[i].length; j++) {
            await page.goto(`${data_ACTRESSES[i][j]}`);
            await page.waitForSelector('#waterfall > div.item.masonry-brick > div > div.photo-frame > img')
            await page.waitForSelector('#waterfall > div > a > div.photo-frame > img')

            let cover = await page.$$eval('#waterfall > div.item.masonry-brick > div > div.photo-frame > img',
                (links) => links.map(x => x.src));
            let information = await page.$$eval('#waterfall > div.item.masonry-brick > div > div.photo-info > p > font > font',
                (links) => links.map(x => x.innerHTML));
            let img = await page.$$eval('#waterfall > div > a > div.photo-frame > img',
                (links) => links.map(x => x.src));
            let title = await page.$$eval('#waterfall > div:nth-child(1) > a > div.photo-info > span > font > font',
                (links) => links.map(x => x.innerHTML));
            let bus = await page.$$eval('#waterfall > div:nth-child(1) > a > div.photo-info > span > font > font',
                (links) => links.map(x => x.innerHTML));
            let time = await page.$$eval('#waterfall > div:nth-child(1) > a > div.photo-info > span > font > font',
                (links) => links.map(x => x.innerHTML));
            let href = await page.$$eval('#waterfall > div > a',
                (links) => links.map(x => x.href));
            
            for(let i=0;i<img.length;i++) {
                ACTRESSES_content_data.content.push({
                    img: img[i],
                    title: title[i],
                    bus: bus[i],
                    time: time[i],
                    href: href[i],
                })
            }

        }
    }
}


// 执行
main()