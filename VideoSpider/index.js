const { link } = require('koa-route');
const puppeteer = require('puppeteer');
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setDefaultTimeout(0)
  let titles = []
  let createTimes = []
  let hrefs = []
  for (let i = 1; i < 50; i++) {
    await page.goto("http://clb5.biz/s/ssni_rel_" + i + "html");

    await page.waitForSelector('#wall > div.row > div.search-list.col-md-8 > div > div.item-title > h3>a')

    let title
    let createTime
    let href
    title = await page.$$eval('#wall > div.row > div.search-list.col-md-8 > div > div.item-title > h3>a',
      (links) => links.map(x => x.innerText));
    createTime = await page.$$eval('#wall > div.row > div.search-list.col-md-8 > div > div.item-bar > span',
      (links) => links.map(x => x.innerText));
    href = await page.$$eval('#wall > div.row > div.search-list.col-md-8 > div > div.item-title > h3 > a',
      (links) => links.map(x => x.href));


    titles.push(title)
    createTimes.push(createTime)
    hrefs.push(href)
  }
  let data = {
    titles,
    createTimes,
    hrefs
  }
  fs.writeFile("data.json", JSON.stringify(data, null, "\t"), function (err) {
    if (err) {
      console.log(err);
    }
  });
  await browser.close();
})();
