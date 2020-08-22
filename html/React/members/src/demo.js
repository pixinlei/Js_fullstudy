// import React from "react";
// import "./demo.css";

// export const MyComponent = () => {
//   // setState setData
//   // data: {
// //      myNmae:'john doe
//   // }
//   // MVVM
//   // react hooks setData
//   const [myName,setMyName] = React.useState('John Doe');

// return (
//   // template 不是HTML
//   <div>
//     <h2 className="title">{myName}</h2>
//     <input value={myName} onChange={(e) => setMyName(e.target.value)}/>
//   </div>
// )
// }

import react from "react";

export const MyComponent = () => {
  const [username,setUsername] = React.useState("");
  const [list,setlist] = React.useState([]);
  // onload
  React.useEffect(() => {
    setTimeout(()=> {
      setUsername("John");
    },1500)
    fetch('http://neteasecloudmusicapi.zhaoboy.com/toplist/detail')
    .then(data => {
      data.json()
      .then(data => {
        // console.log(data);
        setlist(data.list)
      })
    })
  },[]) //onLoad
  return (
    <div>
      <h4>{username}</h4>
      <input value={username} onChange={e => setUsername (e.target.value)} />
      <ul>
      {
        list.map(item => `<li>${item.description}</li>`)
      }
      </ul>
    </div>
  )
}