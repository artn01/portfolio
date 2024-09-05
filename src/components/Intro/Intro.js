import React from 'react'
import './intro.css'
import bg from '../../assets/graduation_cut.jpg'
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText">I am <span className="introName">Artjom </span><br />Junior Software Developer</span>
            <p className="introPara">I am a freshly graduated Bachelor's student, looking to apply my <br /> theoretical knowledge in the real work environment.</p>
            <Link><button className="btn"><img src={btnImg} alt="HIRE ME" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />

    </section>
  );
}

export default Intro