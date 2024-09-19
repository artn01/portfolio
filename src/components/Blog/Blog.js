import React, { useEffect, useState } from 'react'
import './blog.css'
import { useNavigate } from 'react-router-dom'
import {listPosts, deletePost} from '../../services/AppService';
import EditPost from '../../assets/edit_post.png'
import DeletePost from '../../assets/delete.png'

const Blog = () => {

  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllPosts();
  }, [])

  function getAllPosts() {
    listPosts().then((response) => {
      setPosts(response.data);
    }).catch(error => {
      console.error(error);
    })
  }

  function addNewPost() {
    navigate('/add-post')
  }

  function updatePost(id) {
    navigate(`/edit-post/${id}`)
  }

  function removePost(id) {
    console.log(id)

    deletePost(id).then((response) => {
      getAllPosts();
    }).catch(error => {
      console.error(error);
    })
  }

  function timestampToDate(timestamp) {
    const dateObject = new Date(timestamp);

    // Format the date using toLocaleString with options for time zone, date, and time
    const formattedDate = dateObject.toLocaleString('en-US', {
      timeZoneName: 'short', // Display the time zone abbreviation
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false // Use 24-hour format
    })
    return formattedDate;
  }


  return (
    <section id='blog'>
        <span className='blogTitle'>Blog</span>
        <span className='blogDesc'>Here everyone can leave their thoughts, but please be considerate of other people!</span>
        <div className='blogBars'>
          {posts.map(post => 
            <div className='blogBar'>
              <a className='editPostBtn' onClick={() => updatePost(post.id)}>
                <img src={EditPost} alt='EditPost' className='editBlogBarImg'></img>
              </a>

              <a className='deletePostBtn' onClick={() => removePost(post.id)}>
                <img src={DeletePost} alt='DeletePost' className='deleteBlogBarImg'></img>
              </a>

              <div className='blogBarText'>
                <h2 className='postHeading'>{post.heading}</h2>
                <p className='postContents'>{post.contents}</p>
                <p className='postTimestamp'>Last Changed: {timestampToDate(post.timestamp)}</p>
                <p className='postUsername'>Written by: {post.username}</p>
              </div>
            </div>
          )}
        </div>
        <a className="createPostButton" onClick={addNewPost}>Write a post</a>
    </section>
  )
}

export default Blog