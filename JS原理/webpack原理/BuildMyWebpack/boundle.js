// 获取主入口文件
const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

const getModuleInfo = (file) => {
  const body = fs.readFileSync(file, 'utf-8')
  // console.log(body);
  const ast = parser.parse(body, {
    sourceType: 'module' // 表示我们要解析的是ES模块
  })
  const deps = {}
  traverse(ast, {
    ImportDeclaration({node}) {
      const dirname = path.dirname(file) // 拿到index.js的绝对路径
      const abspath = './' + path.join(dirname, node.source.value) // 通过index.js的绝对路径读到模块路径
      deps[node.source.value] = abspath
      
    }
  })

  // 先将Ast  es6 > es5
  const { code } = babel.transformFormAst(ast, null, {
    presets: ['@babel/preset-env']
  })  


  const moduleInfo = {file, deps, code}
  console.log(deps);
  return moduleInfo
}

getModuleInfo('./src/index.js')

//递归做依赖收集
const parseModules = (file) => {
  const enter = getModuleInfo(file)
  const temp = [enter]
  for(let i=0;i< temp.length;i++) {
    const deps = temp[i].deps
    if(deps) {
      for(let key in deps) {
        if(deps.hasOwnProperty(key)) {
          temp.push(getModuleInfo(deps[key]))
        }
      }
    }
  }
}
parseModules('./src/index.js')