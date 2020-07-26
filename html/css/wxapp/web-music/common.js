  //ajax
  //wx.request 从本地小程序 -》服务器 localhost:1234
  // fetch web 做接口请求的地方
  const bannerEle = document.querySelector('#banner')

  fetch('http://neteasecloudmusicapi.zhaoboy.com/banner')
  .then(data=>data.json())
  .then(data=>{
    // console.log(data);
    if(data.code == 200){ //状态码
      const banners = data.banners
      banners.map((banner)=>{
        // console.log(banner);
        return `
          <img src="${banner.imageUrl}">
        `
      })
      console.log(html);
      bannerEle.innerHTML = html.join(' ')
      // console.log(banners,'+++++++++++++++');
      // let mybanners = document.getElementById('banner')
      // for(let i=0;i<banners.length;i++){
      //   mybanners.innerHTML=``
      // }
      // bannerEle.innerHTML = banners.map()
    //   for(let banner of banners){
    //     // console.log(banner);
    //     bannerEle.innerHTML +=`<img src="${banner.imageUrl}">`
    //   }
    // }else{
    //   console.log('请求失败');
    }
  })
