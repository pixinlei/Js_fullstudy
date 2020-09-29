function resolve (root) {
  let res = []
  function walk (node) {
    // 递
    if (node.require) {
      for (let child of node.require) {
        walk(child)
      }
    }
    // 归
    res.push(node.name)
  }
  walk(root)
}