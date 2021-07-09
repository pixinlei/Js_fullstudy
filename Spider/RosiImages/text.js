function a () {
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