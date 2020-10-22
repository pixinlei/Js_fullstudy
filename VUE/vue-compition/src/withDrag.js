import { defineComponent, h } from 'vue';

// template 被打包成h('div',{class:'cls'},'123')
// h 被调用
// div节点就被创建出来
// 拖拽的行为
// 什么东西需要拖拽

export default function(Com) {
  console.log(Com)
  // 第二个参数 script 中间那一段
  return defineComponent({
    // render 返回就是 该组件需要渲染的
    render() {
      // return h('h3',{},'[hhh]')
      // return <h3>hhhh</h3>
    return h('div',{
      on:{touchmove:this.handleMove},
      style: {position:'absolute',left:this.x,top:this.y}
    },[h(Com)])
    },
    data() {
      return {
        x: 0,
        y: 0
      }
    },
    methods: {
      handleMove(e) {
        const x = e.touches[0].pageX;
        const y = e.touches[0].pageY;
        this.x = x;
        this.y = y;  
      }
    }
  })
}