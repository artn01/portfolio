import React, { useState, useParams } from 'react'
import {createPost, getPost, updatePost} from '../../services/AppService'
import { useNavigate } from 'react-router-dom'
import './blogPost.css'

const BlogPost = () => {

  const [username, setUsername] = useState('')
  const [heading, setHeading] = useState('')
  const [contents, setContents] = useState('')

  const navigate = useNavigate();

  // const {id} = useParams()
    const [errors, setErrors] = useState({
      username: '',
      heading: '',
      contents: ''
    })

  function savePost(event) {
    event.preventDefault();

      const post = {username, heading, contents}
      console.log(post)

      createPost(post).then((response) => {
        console.log(response.data);
        navigate('/blog');
      }).catch(error => {
        console.error(error);
      })
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = {... errors}

    if (username.trim()) {
      errorsCopy.username = '';
    } else {
      errorsCopy.username = 'Username is required';
      valid = false;
    }

    if (heading.trim()) {
      errorsCopy.heading = '';
    } else {
      errorsCopy.heading = 'Heading is required';
      valid = false;
    }

    if (contents.trim()) {
      errorsCopy.contents = '';
    } else {
      errorsCopy.contents = 'Body is required';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid
  }

  return (
    <div id='blogPost'>
        <h1 className='blogPostPageTitle'>Create a post!</h1>
        <span className='blogPostDesc'>Write something!</span>
        <form className='blogPostForm'>
            <input type='text' className='username' placeholder='Username' name='username'
              value={username} 
              onChange={(event) => setUsername(event.target.value)}></input>

            <input type='text' className='heading' placeholder='Heading' name='heading'
              value={heading} 
              onChange={(event) => setHeading(event.target.value)}></input>

            <textarea className='contents' name='contents' rows="5" placeholder='Your message goes here'
              value={contents} 
              onChange={(event) => setContents(event.target.value)}></textarea>

            <button className='blogPostSubmitBtn' type='submit' value="Send" onClick={savePost}>Submit</button>
        </form>
    </div>
  )
}

export default BlogPost