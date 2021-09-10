import {React, ref} from 'react'


const Home = () => (
  <div>
    <h1>这里是newtodoList</h1>
    <input ref={ref}></input> <button >确定</button>
  </div>
)
 
export default Home