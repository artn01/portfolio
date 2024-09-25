import React from 'react';
import './skills.css';
import Languages from '../../assets/languages.png';
import WebDev from '../../assets/web_dev.png';
import SoftSkills from '../../assets/soft_skills.png';
import UiUx from '../../assets/ui_ux.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>My Skills</span>
        <span className='skillDesc'>I am a passionate and eager to learn junior developer.</span>
        <div className='skillBars'>

            <div className='skillBar'>
                <img src={WebDev} alt='Web Development' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Web Development</h2>
                    <p>I have experience with Java, Spring Boot, React, HTML and CSS.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={SoftSkills} alt='SoftSkills' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Soft Skills</h2>
                    <p>Communication and listening skills, time management, problem-solving, adaptability.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={Languages} alt='Languages' className='skillBarImg'></img>
                <div className='skillBarText'>
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
            </div>

            <div className='skillBar'>
                <img src={UiUx} alt='Figma' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>I have experience with Figma.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills