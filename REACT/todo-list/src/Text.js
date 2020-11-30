import { useEffect } from 'react'
function Text(props) {
  console.log(props);
  const node = (
    <h1>title</h1>
  )

  useEffect(() => {
    setTimeout(() => {
      // props.onMessage('子组件传给父组件')
      console.log(3333333333);
    }, 3000)
  }, [])
  return (
    <>
      测试数据
      { node}
      {/* { props } */}
    </>
  )
}

export default Text