import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NowPlaying from "./components/NowPlaying/NowPlaying";
import About from "./components/About/About";
import Hobbies from "./components/Hobbies/Hobbies";

function App() {
  return (
      <div className="App">
        <BrowserRouter>

          <NavBar></NavBar>
          {/* <NowPlaying></NowPlaying> */}

            <Routes>

              {/* // http://localhost:3000/ */}
              <Route path='/' element = {<Intro />}> </Route>

              {/* // http://localhost:3000/skills */}
              <Route path='/skills' element = {<Skills />}> </Route>

              {/* // http://localhost:3000/about */}
              <Route path='/about' element = {<About />}> </Route>

              {/* // http://localhost:3000/hobbies */}
              <Route path='/hobbies' element = {<Hobbies />}> </Route>
        
            </Routes>
            {/* <NowPlaying></NowPlaying> */}
          <Footer></Footer>
        </BrowserRouter>
      </div>
  );
}

export default App;
