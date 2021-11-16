# 虚拟DOM

(是什么，为什么，怎么样，会怎样)

是什么： Vue采用VNode类，来实例化出不同类型的虚拟dom，本质是使用JS的对象模拟虚拟dom

为什么：使用JS的计算性能换取操作真实dom所消耗的性能

## DOM-diff

VNode 可以在数据变化前后生成新旧两份虚拟DOM,对比两份VNode，进行patch(打补丁)，达到以最少操作真实DOM更新视图的目的

创建节点： new VNode中有的，而old VNode 没有，就在old VNode中创建
删除节点： new VNode中没有的，而old VNode 中有的，就在old VNode中删除
更新节点： 新的和旧的都有，就以新的为准，更新旧的VNode
