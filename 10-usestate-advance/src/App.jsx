import React, { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState({user:'Karan',age:20})
  // const [num, setNum] = useState([10,20,30])

  const [num, setNum] = useState(10)

  const btnClicked = ()=>{
    // const newNum = {...num}
    // newNum.user = 'Aman'
    // newNum.age = 29
    // setNum(newNum)
    // console.log(newNum);    

    // shortcut method 
    setNum(prev=>({...prev,age:50}))

  }

  // const btnCk = ()=>{
  //   const newNum = [...num]
  //   newNum.push(99)
  //   console.log(newNum);
  //   setNum(newNum)
  // }

  const clickbtn = ()=>{
    
    // It normally increase to +1 
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)

    // It increases to +3 (Batch update)
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  }

  return (
    <div>
      {/* <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button> */}

      {/* <h1>{num}</h1>
      <button onClick={btnCk}>Click</button> */}

      <h1>{num}</h1>
      <button onClick={clickbtn}>Click</button>
    </div>
  )
}

export default App
