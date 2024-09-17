import React, { useState } from 'react'
import './loginForm.css'

const LoginForm = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div id='loginForm'>
        <h1 className='blogPostPageTitle'>Create an account</h1>
        {/* <span className='blogPostDesc'>Write something!</span> */}

        {/* {pageTitle()} */}
        
        
        <form className='loginFormForm'>
            <input type='text' className='username' placeholder='Username' name='username'
              value={username} 
              onChange={(event) => setUsername(event.target.value)}></input>
              {/* {errors.username && (
                <span className='error-message'>{errors.username}</span>)} */}

            <input type='text' className='loginEmail' placeholder='Email' name='email'
              value={email} 
              onChange={(event) => setEmail(event.target.value)}>
              </input>
              {/* {errors.heading && (
                <span className='error-message'>{errors.heading}</span>)} */}

            <input className='password' name='password' placeholder='Password'
              value={password} 
              onChange={(event) => setPassword(event.target.value)}></input>
              {/* {errors.contents && (
                <span className='error-message'>{errors.contents}</span>)} */}

            <button className='loginFormSubmitBtn' type='submit' value="Send">Create</button>
        </form>
    </div>
  )
}

export default LoginForm