import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/travliLogo.png'
import { LuMenu } from "react-icons/lu";
import '../navbar/Navbar.css'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const toggleNavItems = () => {
        setShowNavbar(!showNavbar)
    }
   
  return (
    <section className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
               <img src={Logo} alt="travli" />
            </Link>
            <div className='menu-icon' onClick={toggleNavItems}>
                <LuMenu/>
            </div>
            <div className={`nav-elements ${showNavbar && 'active'}`}>
                <ul>
                    <li>
                        <Link to ='/' className='nav-link'>HOME</Link>
                    </li>
                    <li>
                        <Link to ='/packages' className='nav-link'>PACKAGES</Link>
                    </li>
                    <li>
                        <Link to ='/about' className='nav-link'>ABOUT</Link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Navbar