import React from 'react'
import './contact.css'
import FacebookIcon from '../../assets/facebook-icon.png';
import YouTube from '../../assets/youtube.png';

const Contact = () => {
  return (
    <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'> Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm'>
            <input type='text' className='name' placeholder='Your Name'></input>
            <input type='email' className='email' placeholder='Your Email'></input>
            <textarea className='msg' name='message' rows="5" placeholder='Your message goes here'></textarea>
            <button className='submitBtn' type='submit' value="Send">Submit</button>
            <div className='links'>
                <img className='link' src={FacebookIcon} alt='Facebook'></img>
                <img className='link' src={YouTube} alt='YouTube'></img>
            </div>
        </form>
    </div>
  )
}

export default Contact