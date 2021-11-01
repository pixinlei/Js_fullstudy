# 生命周期

## beforeCreate

- 先后初始化inject

- state, props, methods, data, computed, watch

- provide

## created

- 调用$mount,挂载组件到dom，

- 将template或html编译成render函数(将template编译生成ast抽象语法树，优化ast,标记静态节点，根据ast,生成render函数)

## beforeMount

- 拿上一步的render函数生成VNode， vm.update方法对VNode进行patch操作，然后通过createElm函数创建新节点，并且渲染到dom节点

## mounted

- 执行生命周期，父子组件的执行顺序()

父 -beforeCreate
父 -created
父 -beforeMount
子 -beforeCreate
子 -created
子 -beforeMount
子 -mounted
父 -mounted
