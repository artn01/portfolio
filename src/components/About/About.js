import React from 'react'
import './about.css'
import bg from '../../assets/graduation_cut.jpg'
const About = () => {
  return (
    <section id='about'>
        <div className="aboutContent">
            <span className="hello">Hello! </span>
            <span className="aboutText">I am <span className="aboutName">Artjom</span>,<br />Junior Software Developer</span>
            <div className='aboutDiv'> 
            
                <ul className='timeline'>
                  <li className='entry'>
                    <span className="year">2024 - present</span>
                    <p className='entryPara'>
                      Student at Tallinn University of Technology (TalTech), School of Information Technologies, 
                      <span className='faculty'> Digital Health</span> (Master of Science in Engineering)
                    </p>
                  </li>

                  <li className='entry'>
                    <span className="year">2021 - 2024</span>
                    <p className='entryPara'>
                      Student at Tallinn University of Technology (TalTech), School of Information Technologies, 
                      <span className='faculty'> Informatics</span> (Bachelor of Science in Engineering)
                      
                      <p className='thesisPara'><a className='thesisLink' href="https://digikogu.taltech.ee/et/Item/f193724a-684d-4ccb-a349-4573a139bbe9" target="_blank">
                      Bachelor's thesis:</a> “Object mapping application for motion registration system”</p>
                        <ul className='thesis'>
                          
                          <li className='thesisEntry'><a className='redirectLink' href="https://www.youtube.com/watch?v=aftpTiHgzuc" target='_blank'>
                          Public project demo</a>
                          </li>
                          
                          <li className='thesisEntry'>Thesis is partially supported by the Estonian Research Council <a className='redirectLink' href="https://www.etis.ee/Portal/Projects/Display/0fcfd090-5e3e-4ea3-92fe-5d691c857f0c" target='_blank'>
                          ETAG grant PRG 2100</a></li>
                          
                          <li className='thesisEntry'>GitHub repository for the thesis can be shown in person (project cannot be shared publicly)</li>
                        </ul>
                      </p>
                  </li>

                  <li className='entry'>
                    <span className="year">2009 - 2021</span>
                    <p className='entryPara'>
                    Tallinna Õismäe Vene Lütseum (silver medal)
                    </p>
                  </li>

                </ul>
            </div>

              

            {/* <a className="btn"><img src={btnImg} alt="HIRE ME" className='btnImg'/>Hire Me</a> */}
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default About