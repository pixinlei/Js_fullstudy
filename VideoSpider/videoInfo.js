const { link } = require('koa-route');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0)
  await page.goto('https://www.javbus.com/page/2');

  await page.waitForSelector('#waterfall > div > a > div.photo-info > span > date')
  await page.keyboard.press("F5")
  await page.keyboard.press("F5")
  await page.keyboard.press("F5")
  await page.keyboard.press("F5")
  await page.keyboard.press("F5")
  await page.keyboard.press("F5")
  await page.keyboard.press("F5")
  await page.keyboard.press("F5")
  let titles = await page.$$eval(
    '#waterfall > div > a > div.photo-info > span > date',
    (links) => links => links.map(x => x.innerText)
  );
  setTimeout(() =>{
    console.log(titles);
  },5000)


})();