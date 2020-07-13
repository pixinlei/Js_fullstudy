// 先获取DOM结构
var myli = document.getElementsByTagName('li')    //获取li
var mycontainter = document.getElementsByClassName('containter') //获取最大的盒子
// console.log(mycontainter);
// console.log(myli);
// 获取第一排图片的个数
var mynum = Math.floor(mycontainter[0].offsetWidth/myli[0].offsetWidth) //第一排图片的数量
// console.log(mynum);

var myArr = []  //空数组存放第一排图片的高度
var saveMyPic = []  //空数组存放第一排li和图片
for(var i=0;i<myli.length;i++){
  if(i<=mynum){ //在myArr中存放第一排图片的高度
    myArr.push(myli[i].offsetHeight)
    saveMyPic.push(myli[i])
  }else{
    myArr.sort(function (a, b) {
      return a-b;
    });
    // myArr[0] //第一排图片高度最小值
    myli[i].style.left = saveMyPic[duiyin(saveMyPic)].offsetLeft + 'px'
    myli[i].style.top = saveMyPic[duiyin(saveMyPic)].offsetTop + 'px'
    saveMyPic[duiyin(saveMyPic)].style.top = myli[i].style.top
  }
}

function duiyin(shuzu){  //图片与高度对应
  // console.log(myArr[0])
  for(var i=0;i<shuzu.length;i++){
    if(myArr[0] == shuzu[i].offsetHeight){
      // console.log(i)
      return i
    }
  }
}