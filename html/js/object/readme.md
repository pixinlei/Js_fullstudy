1. 目前对对象的认知

2. 对象属性的增  删 改  查

3.对象的创建方法
  - 字面量
  - 构造函数
    1)  系统自带的构造函数 Object()
    2)  自定义

# 构造函数的内部原理  2.js
1. 在函数体最前面隐式加上一个this = {}
2. 执行 this.xxx = xxx
3. 隐式的返回这个this
(构造函数中显式的return 对象，会干扰原隐式的return值，原始值不会)

# 包装类
1. 原始值是没有属性和方法的，这是对象独有的
<!-- 字符串对象，天生就具备length属性 -->