import React from 'react'
import './intro.css'


const Intro = () => {

  // useEffect(() => {
  //   // Applying on mount
  //   document.body.style.overflow = "hidden";
  //   // Applying on unmount
  //   return () => {
  //     document.body.style.overflow = "scroll";
  //   };   }, []);

  return (
    <section id='intro'>
        <div className="introContent">
          <h1 className='introHeader'>Welcome to My Portfolio!</h1>
            <p className='introPara'>On this website, you will be able to find information about me, so let's get started!
            </p>

            <a className="introButton" href="/about" onClick={() => console.log("Clicked!")}>About Me</a>
            
        </div>
        {/* <img src={bg} alt="Profile" className="bg" /> */}
    </section>
  );
}

export default Intro