//封装队列类
function Queue() {
  //属性
  this.items = []

  //方法

  //1.将元素加入队列中
  Queue.prototype.enqueue = function (element) {
    this.items.push(element)
  }

  //2.从队列中删除前端元素
  Queue.prototype.dequeue = function () {
    return this.items.shift()
  }

  //3. 查看前端的元素
  Queue.prototype.front = function () {
    return this.items[0]
  }

  //4.查看队列是否为空
  Queue.prototype.isEmpty = function () {
    return this.items.length == 0
  }

  //5.查看队列中元素的个数
  Queue.prototype.size = function () {
    return this.items.length
  }

  //6.toString方法
  Queue.prototype.toString = function () {
    var resultString = ''
    for (var i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ''
    }
    return resultString
  }

}

// let queue = new Queue()

// //将元素加入到队列中
// queue.enqueue('aaa')
// queue.enqueue('bbb')
// queue.enqueue('ccc')
// console.log(queue);
// queue.dequeue()
// queue.dequeue()
// console.log(queue);
function passGame(nameList, num) {
  //1.创建一个队列结构
  var queue = new Queue()
  //2.将所有人加入到队列中
  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  //num这个人，直接从队列中删除
  while (queue.size() > 1) {
    //3.开始数数字，不是num的时候，重新加入到队列末尾，是num这个数字的时候，将其从队列中删除
    for (var i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  //4.获取剩下的那个人
  var endName = queue.front()
  console.log(endName);

  return nameList.indexOf(endName)
}

//测试
names = ['lily','lucy','tom','lilie','why']
console.log(passGame(names,3));