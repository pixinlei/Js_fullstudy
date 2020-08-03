var a = 10  //window.a = 10
function foo(a){
  var b = a + 2

  function bar(c){
    console.log(window.a,b,c);
  }
  bar(b*3)
}

foo(2)