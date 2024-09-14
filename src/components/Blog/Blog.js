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
        <span className='blogTitle'>My blogs</span>
        <span className='blogDesc'>I am a passionate and eager to learn junior developer.</span>
        <div className='blogBars'>

            <div className='blogBar'>
                <img src={WebDev} alt='Web Development' className='blogBarImg'></img>
                <div className='blogBarText'>
                    <h2>{posts.map(post => 
                      <p>key={post.username}</p>
                    )}</h2>
                    <p></p>
                </div>
            </div>

            {/* <div className='blogBar'>
                <img src={SoftSkills} alt='Softblogs' className='blogBarImg'></img>
                <div className='blogBarText'>
                    <h2>Soft blogs</h2>
                    <p>Communication and listening blogs, time management, problem-solving, adaptability.</p>
                </div>
            </div> */}

            {/* <div className='blogBar'>
                <img src={Languages} alt='Languages' className='blogBarImg'></img>
                <div className='blogBarText'>
                    <h2>Languages</h2>
                    <p>
                        <ul className='languageList'>
                            <li className='languageEntry'>English (C1, Cambridge Certificate)</li>
                            <li className='languageEntry'>Estonian (B2, highschool exam 94/100)</li>
                            <li className='languageEntry'>German (B2, Goethe Certificate)</li>
                            <li className='languageEntry'>Japanese (currently learning basics)</li>
                            <li className='languageEntry'>Russian (Native)</li>
                        </ul>
                    </p>
                </div>
            </div> */}

            <div className='blogBar'>
                <img src={UiUx} alt='Figma' className='blogBarImg'></img>
                <div className='blogBarText'>
                    <h2>UI/UX Design</h2>
                    <p>I have experience with Figma.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog