// Date.prototype.Format = function (fmt) {
//   var o = {
//     'M+': this.getMonth() + 1,
//     'd+': this.getDate(),
//     'H+': this.getHours(),
//     'm+': this.getMinutes(),
//     's+': this.getSeconds(),
//     'S+': this.getMilliseconds()
//   };
//   //因为date.getFullYear()出来的结果是number类型的,所以为了让结果变成字符串型，下面有两种方法：
//   if (/(y+)/.test(fmt)) {
//     //第一种：利用字符串连接符“+”给date.getFullYear()+''，加一个空字符串便可以将number类型转换成字符串。
//     fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
//   }
//   for (var k in o) {
//     if (new RegExp('(' + k + ')').test(fmt)) {
//       //第二种：使用String()类型进行强制数据类型转换String(date.getFullYear())，这种更容易理解。
//       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(String(o[k]).length)));
//     }
//   }
//   return fmt;
// };

// let day = new Date(); day.Format('yyyy-MM-dd HH:mm:ss');


let getNowFormatDate = function () {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  if (month >= 1 && month <=9) {
    month = '0' + month
  }
  if (strDate >=1 && strDate <= 9) {
    strDate = '0' + strDate
  }
  var currentDate = year + '年' + month + '月' + strDate + '日'
  return currentDate
}

module.exports = {
  getNowFormatDate
}