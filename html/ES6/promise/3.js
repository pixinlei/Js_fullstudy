let xq = new Promise(function (resolve,reject) {
  setTimeout(() =>{
    console.log('元隆详情');
    resolve('相亲成功')
    // marry()
  },2000)
})
  xq.then((res) =>{
    if(res === '相亲成功'){
      return marry()
    }
    // console.log(res);
  })
  .then((res) => {
    baby1()
  })
  .then((res) => {
     baby2()
  })
// function xq () {
//   setTimeout(() =>{
//     console.log('元隆详情');
//     // marry()
//   },2000)
// }

function marry () {
  return new  Promise((resolve,reject) =>{
    setTimeout(() =>{
      console.log('元隆结婚了');
      // baby1()
      resolve('元隆结婚顺利')
    },1000)
  })
}

function baby1 () {
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      console.log('校园龙1出生');
      resolve('baby1出生完成')
    },500)
  })
}

function baby2 () {
  setTimeout(()=>{
    console.log('校园龙2出生');
  },300)
}

// xq()
// marry()
// baby1()