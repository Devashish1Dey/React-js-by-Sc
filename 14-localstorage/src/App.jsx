import React from 'react'

const App = () => {

  // localStorage.clear()
  // sessionStorage.clear()

  // localStorage.setItem('user','Dev')
  // localStorage.setItem('age','18')

  const user = localStorage.getItem('user')
  const age = localStorage.getItem('age')

  // console.log(user, age);
  localStorage.removeItem('age')
  
  const Partyname = {
    username:'Yash',
    age:23,
    city:'Gangtok'
  }
  // console.log(Partyname);
  // localStorage.setItem('party',JSON.stringify(Partyname))
  const p = JSON.parse(localStorage.getItem('party'))
  console.log(p);
  

  /* 
    JSON.stringify  => It converts an objects to a string and stored it in localStorage

    JSON.parse  => It converts a string to an object and getItem to console
  */
  
  return (
    <div>
      App
    </div>
  )
}

export default App
