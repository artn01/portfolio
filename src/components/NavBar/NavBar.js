import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';

const navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt='Logo' className='logo'></img>
        <div className="desktopMenu">
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Portfolio</Link>
          <Link className="desktopMenuListItem">Clients</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="Contact Me" className="desktopMenuImg" />Contact Me</button>
    </nav>
  )
}

export default navbar