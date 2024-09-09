import React, { useRef } from 'react'
import './contact.css'
import FacebookIcon from '../../assets/facebook-icon.png';
import YouTube from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const emailJsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(emailJsServiceId, emailJsTemplateId, form.current, {
        publicKey: emailJsPublicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'> Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='from_name'></input>
            <input type='email' className='email' placeholder='Your Email' name='from_email'></input>
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