import React, { useEffect, useState } from 'react'
import './blog.css'
import { useNavigate } from 'react-router-dom'
import Languages from '../../assets/languages.png';
import WebDev from '../../assets/web_dev.png';
import SoftSkills from '../../assets/soft_skills.png';
import UiUx from '../../assets/ui_ux.png';
import {listPosts, createPost, getPost, updatePost, deletePost} from '../../services/AppService';

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


  return (
    <section id='blog'>
        <span className='blogTitle'>Blog</span>
        <span className='blogDesc'>Here everyone can leave their thoughts, but please be considerate of other people!</span>
        <div className='blogBars'>
          {posts.map(post => 
            <div className='blogBar'>
              <div className='blogBarText'>
                <h2 className='postHeading'>{post.heading}</h2>
                <p className='postContents'>{post.contents}</p>
                <p className='postTimestamp'>{post.timestamp}</p>
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