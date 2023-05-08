import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <nav className="navBar">
        <div >
          <Link to='/'>
          <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="navLinks">
          <ul>
          <Link to={'/'}> <li>Home</li> </Link> 
          <Link to="/about"><li>About</li> </Link> 
            <li>Contact</li>

          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header