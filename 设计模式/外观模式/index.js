// 理解设计模式
// 外观模式就是，有很多个复杂的子系统接口，为这些复杂的子系统提供一个更高级的统一接口，
// 对底层结构兼容性做统一封装，简化用户使用



// example1
// 兼容ie

// var getEvent = function (event) {
//     return event || window.event;
//   }
  
//   var getTarget = function (event) {
//     var event = getEvent(event);
//     return event.target || event.srcElement;
//   }
  
//   var preventDefault = function (event) {
//     var event = getEvent(event);
//     if (event.preventDefault) {
//       event.preventDefault();
//     } else {
//       event.returnValue = false;
//     }
//   }
  
//   var stopBubble = function (event) {
//     var event = getEvent(event);
//     if (event.stopPropagation) {
//       event.stopPropagation();     
//     } else {
//       event.cancelBubble = true;
//     }
//   }
  
// example2
// 简化底层操作
var T = {
    g : function (id) {
      return document.getElementById(id);
    },
    css : function (id, key, value) {
      document.getElementById(id).style[key] = value;
    },
    attr : function (id, key, value) {
      document.getElementById(id)[key] = value;
    },
    html : function (id, html) {
      document.getElementById(id).innerHTML = html;
    },
    on : function (id, type, fn) {
      document.getElementById(id)['on' + type] = fn;
    }
  };
  
  T.css('box', 'background', 'red');
  T.attr('box', 'className', 'box');
  T.html('box', '这是新添加的内容');
  T.on('box', 'click', function() {
    T.css('box', 'width', '500px');
  })
  
