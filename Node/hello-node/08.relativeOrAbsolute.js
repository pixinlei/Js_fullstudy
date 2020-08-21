const fs = require('fs')
const path = require('path')

console.log(path.join(__dirname,'helloWorld.js'))
fs.readFile(path.join(__dirname,'helloWorld.js'),'utf8',(err,doc)=>{
  console.log(err);
  console.log(doc);
})