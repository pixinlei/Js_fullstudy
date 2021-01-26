function fn(leftnode, rightnode) {
  if(leftnode && rightnode && leftnode.val === rightnode.val) {
    fn(leftnode.left, rightnode.left)
    fn(leftnode.right, rightnode.right)
  } else if()
}

fn(root.left, root.right)