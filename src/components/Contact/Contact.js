import React, { useRef, useState } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import YouTube from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const emailJsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value,
      });
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.from_name.trim()) {
        errors.from_name = 'Username is required';
    } else if ((data.from_name.length < 1) || (data.from_name.length > 100)) {
        errors.from_name = 'Username must be between 1 and 100 characters long';
    }

    if (!data.from_email.trim()) {
        errors.from_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.from_email)) {
        errors.from_email = 'Email is invalid';
    }

    if (!data.message) {
        errors.message = 'Message is required';
    } else if ((data.message.length < 1) || (data.message.length > 500)) {
        errors.message = 'Message must be between 1 and 500 characters long';
    }

    return errors;
  };


  const sendEmail = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      emailjs.sendForm(emailJsServiceId, emailJsTemplateId, form.current, {
          publicKey: emailJsPublicKey,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            // e.target.reset();
            alert('Email Sent');

            setFormData({
              from_name: "",
              from_email: "",
              message: ""
            });
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } else {
      console.log('Form submission failed due to validation errors.');
    }
  };

  return (
    <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'> Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='from_name'
              value={formData.from_name} onChange={handleChange}></input>
              {errors.from_name && (
                        <span className="error-message">
                            {errors.from_name}
                        </span>
                    )}

            <input type='email' className='email' placeholder='Your Email' name='from_email'
              value={formData.from_email} onChange={handleChange}></input>
              {errors.from_email && (
                        <span className="error-message">
                            {errors.from_email}
                        </span>
                    )}

            <textarea className='msg' name='message' rows="5" placeholder='Your message goes here'
              value={formData.message} onChange={handleChange}></textarea>
              {errors.message && (
                        <span className="error-message">
                            {errors.message}
                        </span>
                    )}

            <button className='submitBtn' type='submit' value="Send">Submit</button>
            <div className='links'>
                {/* <a href=''>
                  <img className='link' src={FacebookIcon} alt='Facebook' href></img>
                </a> */}
                <a href='https://www.youtube.com/@batboi_7788' target='_blank'>
                  <img className='link' src={YouTube} alt='YouTube'></img>
                </a>
            </div>
        </form>
    </div>
  )
}

export default Contact