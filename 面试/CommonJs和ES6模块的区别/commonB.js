let count = 1
let plusCount = () => {
    count++
}

setTimeout(() => {
    console.log('B.js-1', count);
}, 1000)

module.exports = {
    count,
    plusCount
}