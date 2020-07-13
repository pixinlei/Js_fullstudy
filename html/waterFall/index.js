window.onload = function(){
  imgLocation("contenter","box")
}
// 获取当前有多少张图片要摆放
function imgLocation(parent,content){
  // 将parent下的所有内容全部取出
  var cparent = document.getElementById(parent)//cntenter盒子
  // console.log(cparent)
  var ccontent = getChildElement(cparent,content)//box装图片的盒子

  // console.log(ccontent);
  var imgWidth = ccontent[0].offsetWidth
  var num = Math.floor(document.documentElement.clientWidth  / imgWidth)
  cparent.style.cssText = "width:" + imgWidth *num + "px"

  var BoxHeightArr = [] //存放第一排图片的高度
  for(var i=0;i< ccontent.length;i++){
    if(i<num){
      BoxHeightArr[i] = ccontent[i].offsetHeight  //第一排的每张图片的高度
      // console.log(BoxHeightArr[i]);
    }else{
      //将Math.min借给数组用
      var minHeight = Math.min.apply(null,BoxHeightArr) //第一排图片最小的高度
      var minIndex = gitminheightLocation(BoxHeightArr,minHeight) //获取最小高度图片的那个下标
      // console.log(minHeight);
      ccontent[i].style.position = "absolute"
      ccontent[i].style.top = minHeight +'px' //要摆放图片的纵坐标
      ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'  //要摆放图片的横坐标
      BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight  //改变原来最小高度的数值，变换高度
    }
  }
}

function getChildElement(parent,content){
  var contentArr = []
  var allContent = parent.getElementsByTagName('*')
  // console.log(allContent)
  for(var i=0;i<allContent.length;i++){
    if(allContent[i].className == content){
      contentArr.push(allContent[i])
    }
  }
  return contentArr
}

function gitminheightLocation(BoxHeightArr,minHeight){
  for(var i in BoxHeightArr){
    if(BoxHeightArr[i] === minHeight){
      return i
    }
  }
}