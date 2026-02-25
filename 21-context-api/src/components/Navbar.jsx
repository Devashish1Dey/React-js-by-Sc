import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
  // console.log(props);
  const [theme] = useContext(ThemeDataContext)

  return (
    <div className={theme}>
      <h2>Devashish</h2>
      {/* {props.children} */}
      <Nav2 />
    </div>
  )
}

export default Navbar
