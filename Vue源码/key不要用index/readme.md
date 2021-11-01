# 不是相同节点

- 销毁旧节点，渲染新节点，这也是为什么vue的diff是同层渲染

## 相同节点做到尽可能的复用

- 如果新VNode是文字VNode，直接调用api，替换文字

- 不是文字VNode，开始对children进行对比

- 有新 children，添加新VNode

- 有旧的children，删除old VNode

