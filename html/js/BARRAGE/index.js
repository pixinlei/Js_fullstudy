let data = [
  {value:'周杰伦的听妈妈的话，阿巴巴巴',time:5,color:'red',speed:1,fontSize:22},
  {value:'hahahah，阿巴巴巴',time:6,color:'yellow',speed:5,fontSize:22},
  {value:'academic擦擦擦哪看出，阿巴巴巴',time:20,color:'blue',speed:10,fontSize:30},
  {value:'龙龙龙龙湖，阿巴巴巴',time:10},
]

//获取所有需要的DOM元素
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $txt = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')

// 创建 CanvasBarrage类
class CanvasBarrage{  // opts ={}表示如果没有传值，就默认为空，防止报错，es6的语法
  constructor(canvas,video,opts = {}){  //constructor是一种创建和初始化class对象的特殊方法
    if(!canvas || video) return

    this.video = video  //将传进来的参数挂载到this上
    this.canvas = canvas
    // 设置canvas画布的宽高和video一致
    this.canvas.width = video.width
    this.canvas.height = video.height

    //获取画布。操作画布
    this.ctx = canvas.getContext('2d')

    // 设置默认参数，如果没传就给带上
    let defOpts = {
      color:'#e91e63',
      speed:1.5,
      opacity:0.5,
      fontSize:20,
      data:[]
    }

    //合并对象，再挂载到this上
    Object.assign(this,defOpts,opts)
    //添加属性，用来判断播放暂停，默认是true为暂停
    this.isPaused = true
    // 得到所有的弹幕消息
    this.barrages = this.data.map(item => new Barrage(item,this))

  }
}

  // 创建Barrage类，用来实例化每一条弹幕
  class Barrage{
    constructor(obj,ctx) {
      this.value = obj.value  //弹幕的内容
      this.time = obj.time  // 弹幕出现的时间
      // 把obj和ctx都挂载到this上方便获取
      this.obj = obj
      this.context = ctx
    }

    // 初始化弹幕
    init() {
      // 如果数据里面没有涉及到这4种参数，就直接取默认参数
      this.color = this.obj.color || this.context.color
      this.speed = this.obj.speed || this.context.speed
      this.opacity = this.obj.opacity || this.context.opacity
      this.fontSize = this.obj.fontSize || this.context.fontSize

      // 计算每一条弹幕的宽度
      let p = document.createElement('p')
      p.style.fontSize = this.fontSize + 'px'
      p.innerHTML = this.value
      document.body.appendChild(p)

      //把p标签添加到body里，这样就可以拿到宽度
      //设置弹幕的宽度
      this.width = p.clientWidth
      // 得到了弹幕的宽度后，就把p标签移除
      document.body.removeChild(p)

      // 设置当前弹幕出现的位置
      this.x = this.context.canvas.width
      this.y = this.context.canvas.height * Math.random()

      // 做超出范围的处理
      if(this.y<this.fontSize){
        this.y = this.fontSize
      }else if(this.y>this.context.canvas.height-this.fontSize){
        this.y = this.context.canvas.height-this.fontSize
      }
    }
  }

// 创建canvasbarrage的实例
let canvasBarrage = new CanvasBarrage(canvas,video,{data})
