import React from 'react'
import './hobbies.css'
import WebDev from '../../assets/web_dev.png'

const Hobbies = () => {
  return (
    <section id='hobbies'>
        <span className='hobbiesTitle'>My Hobbies</span>
        <span className='hobbiesDesc'>Here you will find a list of my favourite activities and things.</span>
        <div className='hobbiesBars'>

            <div className='hobbyBar'>
                <img src={WebDev} alt='Web Development' className='hobbyBarImg'></img>
                <div className='hobbyBarText'>
                    <h2>Web Development</h2>
                    <p>I have experience with Java, Spring Boot, React, HTML and CSS.</p>
                </div>
            </div>

            <div className='hobbyBar'>
                <img src={WebDev} alt='Web Development' className='hobbyBarImg'></img>
                <div className='hobbyBarText'>
                    <h2>Web Development</h2>
                    <p>I have experience with Java, Spring Boot, React, HTML and CSS.</p>
                </div>
            </div>

            <div className='hobbyBar'>
                <img src={WebDev} alt='Web Development' className='hobbyBarImg'></img>
                <div className='hobbyBarText'>
                    <h2>Web Development</h2>
                    <p>I have experience with Java, Spring Boot, React, HTML and CSS.</p>
                </div>
            </div>

            <div className='hobbyBar'>
                <img src={WebDev} alt='Web Development' className='hobbyBarImg'></img>
                <div className='hobbyBarText'>
                    <h2>Web Development</h2>
                    <p>I have experience with Java, Spring Boot, React, HTML and CSS.</p>
                </div>
            </div>

            <div className='hobbyBar'>
                <img src={WebDev} alt='Web Development' className='hobbyBarImg'></img>
                <div className='hobbyBarText'>
                    <h2>Web Development</h2>
                    <p>I have experience with Java, Spring Boot, React, HTML and CSS.
                        I have experience with Java, Spring Boot, React, HTML and CSS.
                    </p>
                </div>
            </div>

            <div className='hobbyBar'>
                <img src={WebDev} alt='Web Development' className='hobbyBarImg'></img>
                <div className='hobbyBarText'>
                    <h2>Web Development</h2>
                    <p>I have experience with Java, Spring Boot, React, HTML and CSS.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hobbies