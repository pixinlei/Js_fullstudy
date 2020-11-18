var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = compose(greet, exclaim);
welcome('moe');

function compose(...args) {
  return function(str) {
   while(args.length) {
     let fn = args.pop()
     str = fn(str)
   }
   return str
  }
}