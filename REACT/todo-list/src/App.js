import logo from './logo.svg';
import './App.css';
import { createRef, useState } from 'react'
import Text from './Text'
// JSX vue  里面的 render
const todoDefault = [
  {
    text: 'eat',
    done: false
  },
  {
    text: 'sleep',
    done: false
  }
]
function App() {
  const [todos, setTodos] = useState(todoDefault) // [响应式数据，修改数据方法]
  const ref = createRef()
  const arr = [1, 2, 3]
  const handleClick = () => {
    let val = ref.current.value
    console.log(val);
    // const newTodos = todos.concat({text: val, done: false})
    let newTodos = todos.slice(0)
    newTodos.unshift({text: val, done: false})
    setTodos(newTodos)
    ref.current.value = ''
  }
  const delItem = (i) => {
    let newTodos = todos.slice(0)
    newTodos.splice(i,1)
    setTodos(newTodos)
  }
  return (
    <>
      <Text name="小明" age={18} onMessage={ (msg) => {console.log(msg);}}/>
      <input type="text" ref={ref} />
      <button onClick={handleClick} ref={(el) => {
        console.log(el);
      }}>添加代办事项</button>
      {
        todos.map((todoItem, i) => {
          return <li key={i} onClick={() => {
            delItem(i)
          }}>
            {todoItem.text}
          </li>
        })
      }
      { arr }
      { true ? 'true' : 'false'}
      { console.log(1) }
    </>
  );
}

export default App;
