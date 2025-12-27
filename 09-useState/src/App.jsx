// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(10)
//   const [username, setUsername] = useState('Avinash')

//   function changeNum(){
//     setNum(30)
//     setUsername('Karan')
//   }
//   return (
//     <div>
//       <h1>Value of num is {num} <br /> Value of user is {username}</h1>
//       <button onClick={changeNum}>click</button>
//     </div>
//   )
// }

// export default App

//

import React, { useState } from "react";

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum(){
    console.log('increasing');
    setNum(num+1)
  }

  function decreaseNum(){
    console.log('decreasing');
    setNum(num-1)
  }

  function jump5Num(){
    console.log('decreasing');
    setNum(num+5)
  }

  return (
      <div className="main">
        <h1>Counter</h1>
        <h2>{num}</h2>
        <div>
          <button className="onebtn" onClick={increaseNum}>Increase</button>
          <button className="twobtn" onClick={decreaseNum}>Decrease</button>
          <button className="threebtn" onClick={jump5Num}>Jump by 5</button>
        </div>
      </div>
  );
};

export default App;
