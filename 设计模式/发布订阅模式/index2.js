const EventEmit = function() {
    this.events = {};
    this.on = function(name, cb) {
      if (this.events[name]) {
        this.events[name].push(cb);
      } else {
        this.events[name] = [cb];
      }
    };
    this.trigger = function(name, ...arg) {
      if (this.events[name]) {
        this.events[name].forEach(eventListener => {
          eventListener(...arg);
        });
      }
    };
  };

  
  let event = new EventEmit();
event.trigger('success');

MessageCenter.fetch() {
  event.on('success', () => {
    console.log('更新消息中心');
  });
}
Order.update() {
  event.on('success', () => {
    console.log('更新订单信息');
  });
}
Checker.alert() {
  event.on('success', () => {
    console.log('通知管理员');
  });
}
