function say(msg){
  console.log('hello' + msg);
}

//导出say方法

module.exports = {
  say:say
}