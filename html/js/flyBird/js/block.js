function Block(){
  this.upDivWrap = null
  this.downDiveWrap = null
  this.downHeight = baseObj.randomNum(0,150)
  this.gapHeight = baseObj.randomNum(150,160)
  this.upHeight = 312 - this.downHeight - this.gapHeight 

  //用生成div的方法，来放管道
  this.createDiv = function(url,height,positionType,left,top){
    var newDiv = document.createElement('div')
    newDiv.style.width = '62px'
    newDiv.style.height = height
    newDiv.style.position = positionType
    newDiv.style.left = left
    newDiv.style.top = top
    newDiv.style.backgroundImage = url
    console.log(newDiv.style.top);
    return newDiv
    
  } 

  this.createBlock = function(){
    var upDiv1 = this.createDiv('url(img/up_mod.png)',this.upHeight + 'px')

    // console.log(this.upHeight);
    var upDiv2 = this.createDiv('url(img/up_pipe.png)','60px')
    this.upDivWrap = this.createDiv(null,null,'absolute','450px')
    this.upDivWrap.appendChild(upDiv1)
    this.upDivWrap.appendChild(upDiv2)  //生成上方管道

    jsWrapBg.appendChild(this.upDivWrap)
  }
}