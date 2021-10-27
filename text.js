setTimeout(() => {
    console.log('外层的');
    setTimeout(() => {
        console.log('内层的');
    }, 1000)
}, 2000)