async function getData(getFn, setFn, start = 0, end = 1,) {
    getFn({ start: start, end: end }).then(res => {
        if (!res.length) return
        await setFn(res)
        await getData(getFn, setFn, start + 1, end)
    })
}



module.exports = {
    getData,
}