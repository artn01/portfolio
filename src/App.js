import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from "./components/About/About";
import Hobbies from "./components/Hobbies/Hobbies";
import Contact from "./components/Contact/Contact";
import newAbout from "./components/newAbout/newAbout";
import './app.css';
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/BlogPost/BlogPost";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
      <div className="App">
        <BrowserRouter>

          <NavBar></NavBar>

            <Routes>

              {/* // http://localhost:3000/ */}
              <Route path='/' element = {<Intro />}> </Route>

              {/* // http://localhost:3000/skills */}
              <Route path='/skills' element = {<Skills />}> </Route>

              {/* // http://localhost:3000/about */}
              {/* <Route path='/about' element = {<newAbout />}> </Route> */}
              <Route path="/about" element = {<About/>}></Route>

              {/* // http://localhost:3000/hobbies */}
              <Route path='/hobbies' element = {<Hobbies />}> </Route>

              {/* // http://localhost:3000/contact */}
              <Route path='/contact' element = {<Contact />}> </Route>

              {/* // http://localhost:3000/blog */}
              <Route path='/blog' element = {<Blog />}> </Route>

              {/* // http://localhost:3000/add-post */}
              <Route path='/add-post' element = {<BlogPost />}> </Route>

              {/* // http://localhost:3000/edit-post/1 */}
              <Route path='/edit-post/:id' element = {<BlogPost />}> </Route>

              {/* // http://localhost:3000/login */}
              <Route path='/login' element = {<LoginForm />}> </Route>
        
            </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
  );
}

export default App;
