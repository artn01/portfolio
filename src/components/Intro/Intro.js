import React from 'react'
import './intro.css'
import bg from '../../assets/graduation_cut.jpg'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'
import { useEffect } from 'react';
import Footer from '../Footer/Footer';


const Intro = () => {

  // useEffect(() => {
  //   // Applying on mount
  //   document.body.style.overflow = "hidden";
  //   // Applying on unmount
  //   return () => {
  //     document.body.style.overflow = "scroll";
  //   };   }, []);

  return (
    <section id='intro'>
        <div className="introContent">

            {/* <span className="hello" id='helloId'>Hello, </span> */}
            {/* <span className="introText" id='introTextId'>I am <span className="introName" id='introNameId'>Artjom </span><br />Junior Software Developer</span> */}
            {/* <a className="btn"><img src={btnImg} alt="HIRE ME" className='btnImg'/>Hire Me</a> */}
        </div>
        {/* <img src={bg} alt="Profile" className="bg" /> */}
    </section>
  );
}

export default Intro