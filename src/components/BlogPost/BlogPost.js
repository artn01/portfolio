import React, { useState } from 'react'
import {createPost, getPost, updatePost} from '../../services/AppService'
import { useNavigate, useParams } from 'react-router-dom'
import './blogPost.css'
import EditPost from '../../assets/edit_post.png'

const BlogPost = () => {

  const [username, setUsername] = useState('')
  const [heading, setHeading] = useState('')
  const [contents, setContents] = useState('')
  const [timestamp, setTimestamp] = useState('')

  const navigate = useNavigate();

    const {id} = useParams()
    const [errors, setErrors] = useState({
      username: '',
      heading: '',
      contents: ''
    })

    function pageTitle() {
      if(id) {
          return <h2 className='text-center'>Update Employee</h2>
      } else {
        return <h2 className='text-center'>Add Employee</h2>
      }

    }

  function savePost(event) {
    event.preventDefault();
    console.log(errors)
    if (validateForm()) {
      const post = {username, heading, contents}
      console.log(post)

      createPost(post).then((response) => {
        console.log(response.data);
        navigate('/blog');
      }).catch(error => {
        console.error(error);
      })
    }
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
              {errors.username && (
                <span className='error-message'>{errors.username}</span>)}

            <input type='text' className='heading' placeholder='Heading' name='heading'
              value={heading} 
              onChange={(event) => setHeading(event.target.value)}>
              </input>
              {errors.heading && (
                <span className='error-message'>{errors.heading}</span>)}

            <textarea className='contents' name='contents' rows="5" placeholder='Your message goes here'
              value={contents} 
              onChange={(event) => setContents(event.target.value)}></textarea>
              {errors.contents && (
                <span className='error-message'>{errors.contents}</span>)}

            <button className='blogPostSubmitBtn' type='submit' value="Send" onClick={savePost}>Submit</button>
        </form>
    </div>
  )
}

export default BlogPost