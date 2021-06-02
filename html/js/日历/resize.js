; (function () {
    resize()
    window.onresize = resize;
})()    

function resize () {
    if (document.documentElement.clientWidth >= 750) {
        document.documentElement.style.fontSize = '75px';
        return
    }
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px'
}
