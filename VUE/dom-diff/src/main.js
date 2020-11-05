import { createElement, render, renderDom } from './element'

let vertualDom1 =  createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['1']),
  createElement('li', {class: 'item'}, ['2']),
])

let el = render(vertualDom1)

renderDom(el, document.getElementById('app'))
console.log(vertualDom1);
console.log(el);



// DOM diff 比较两个虚拟DOM的区别，比较两个对象的区别
// 根据两个虚拟对象创建出来 补丁，描述改变的内容，将这个补丁用来更新DOM