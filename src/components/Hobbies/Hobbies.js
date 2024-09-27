import React from 'react'
import './hobbies.css'
import WebDev from '../../assets/web_dev.png';
import Headphones from '../../assets/headphones.png';
import NowPlaying from '../NowPlaying/NowPlaying';
import Languages from '../../assets/languages.png';
import Sports from '../../assets/sports.png';
import Reading from '../../assets/reading.png';
import Anime from '../../assets/anime.png';
import Collecting from '../../assets/collecting.png';

const Hobbies = () => {
  return (
    <section id='hobbies'>
        <span className='hobbiesTitle'>My Hobbies</span>
        <span className='hobbiesDesc'>Here you will find a list of my favourite activities and things.</span>
        
        <div className='hobbiesBars'>

            <div className='musicHobbyBar'>
                <div className='upperPart'>
                    <img src={Headphones} alt='Headphones' className='hobbyBarImg'></img>
                    
                    <div className='hobbyBarText'>
                        <h2>Music</h2>
                        <p>I enjoy listening to music, and occasionally play guitar.
                        </p>
                        <p>Below is the music I'm currently listening to :3</p>
                    </div>
                </div>
                <div className='nowPlaying'>
                    <NowPlaying/>
                </div>
            </div>

            <div className='hobbyBar'>
                <img src={Languages} alt='Languages' className='hobbyBarImg'></img>
                <div className='hobbyBarText'>
                    <h2>Language learning</h2>
                    <p>As you already know (if you looked at my skills), I fancy language learning.
                        But only if the language presents an interest to me! So at the moment I am studying Japanese.
                    </p>
                </div>
            </div>

            <div className='hobbyBar'>
                <img src={Sports} alt='Sports' className='hobbyBarImg'></img>
                <div className='hobbyBarText'>
                    <h2>Sports</h2>
                    <p>Sports, sports, sports. I used to do ice-dance semi-professionally, but in the 
                        end left it to pursue academic goals. I like playing volleyball, but lately I don't really
                        have much time to do it.
                    </p>
                </div>
            </div>

            <div className='hobbyBar'>
                <img src={Reading} alt='Reading' className='hobbyBarImg'></img>
                <div className='hobbyBarText'>
                    <h2>Reading</h2>
                    <p>I used to love reading as a kid. But then, I stopped reading almost completely.
                        But lately my girlfriend motivated me to read again. Most of all I enjoy reading 
                        something kind of philosophical, and preferrably the main character has to be of my own age.
                        That way, I can relate to the book more. I also prefer Japanese authors, such as Haruki Murakami.
                    </p>
                </div>
            </div>

            {/* <div className='hobbyBar'>
                <img src={Anime} alt='Anime' className='hobbyBarImg'></img>
                <div className='hobbyBarText'>
                    <h2>Anime</h2>
                    <p>Well, well, well, what do we have here. Probably some people consider anime "weird Japanese cartoons",
                        but for me it became a breath of fresh in highschool, and I still watch it sometimes. <a className='malLink' href='https://myanimelist.net/animelist/batboi_' target='_blank'>MyAnimeList</a>
                    </p>
                </div>
            </div> */}

            <div className='hobbyBar'>
                <img src={Collecting} alt='Collecting Things' className='hobbyBarImg'></img>
                <div className='hobbyBarText'>
                    <h2>Collecting things</h2>
                    <p>I enjoy collecting different things. I have a small collection of Hot Wheels cars, trading cards, fragrances.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hobbies