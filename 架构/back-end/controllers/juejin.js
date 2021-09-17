async function Index(value = {href: 'https://juejin.cn/post/7008723298414493710'}) {
    try {
        const puppeteer = require('puppeteer');
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.setDefaultTimeout(30 * 1000) //超时时间改成30秒吧
        await page.goto(value.href);
        await page.waitForSelector('.name')    
        console.log('正确执行'); 
        await browser.close();
        let timer = setTimeout(() => {
            console.log('执行完了一次');
            Index()
            timer = null
        }, 5000)
    } catch (error) {
        console.log('页面不存在等问题，反正没有正确执行');
    }
}
module.exports = Index
