import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'
import {Link} from 'react-scroll';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
        <img src={logo} alt='Logo' className='logo'></img>
        <div className="desktopMenu">
          <Link className="desktopMenuListItem"
                activeClass='active' 
                to='intro' 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}>Home</Link>

          <Link className="desktopMenuListItem" 
                activeClass='active' 
                to='skills' 
                spy={true} 
                smooth={true} 
                offset={-1} 
                duration={500}>About</Link>

          <Link className="desktopMenuListItem"
                activeClass='active' 
                to='' 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500}>Portfolio</Link>

          <Link className="desktopMenuListItem"
                activeClass='active' 
                to='' 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500}>Clients</Link>

        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('skills').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt="Contact Me" className="desktopMenuImg" />Contact Me</button>

        <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)}></img>
        <div className="navMenu" style={{display: showMenu ? 'flex':'none'}}>

          <Link className="listItem"
                onClick={() => setShowMenu(false)}
                activeClass='active' 
                to='intro' 
                spy={true} 
                smooth={true} 
                offset={-100}
                duration={500}>Home</Link>

          <Link className="listItem"
                onClick={() => setShowMenu(false)}
                activeClass='active' 
                to='skills' 
                spy={true} 
                smooth={true} 
                offset={-1} 
                duration={500}>About</Link>

          <Link className="listItem"
                onClick={() => setShowMenu(false)}
                activeClass='active' 
                to='' 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500}>Portfolio</Link>

          <Link className="listItem"
                onClick={() => setShowMenu(false)}
                activeClass='active' 
                to='' 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500}>Clients</Link>

        </div>
    </nav>
  )
}

export default Navbar