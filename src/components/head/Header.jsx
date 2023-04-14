import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <>
            <nav className="navBar">
            <div >
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="navLinks">
                <ul> 
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header