import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Devashish Dey' age={20} img='https://images.unsplash.com/photo-1763411711221-40166c5e20cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user='Karan Singh' age={18} img='https://images.unsplash.com/photo-1730451306804-f7d3b0a3c4d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
      <Card user='Uttam Kumar' age={18} img='https://images.unsplash.com/photo-1762170905134-e9e3b5692286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
    </div>
  )
}

export default App
