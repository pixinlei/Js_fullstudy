function multithreading() {
    const page = await browser.newPage();
    await page.setDefaultTimeout(0)

    await page.goto(`https://www.wang011.com/photo/photo_list.html?photo_type=21&page_index=${i}`);
}