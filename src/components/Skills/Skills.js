import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>My Skills</span>
        <span className='skillDesc'>I am a passionate and skilled junior developer.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UiDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum. "Sed ut perspiciatis unde omnis iste natus error sit 
                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum. "Sed ut perspiciatis unde omnis iste natus error sit 
                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo."</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum. "Sed ut perspiciatis unde omnis iste natus error 
                        sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills