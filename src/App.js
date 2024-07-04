
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Feedback from './components/feedback/Feedback';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/about'} element={<About />}></Route>
          <Route path={'/contact'} element={<Contact/>}></Route>
          <Route path={'/projects'} element={<Projects />}></Route>
          <Route path={'/skills'} element={<Skills/>}></Route>         
          <Route path={'/feedback'} element={<Feedback />}></Route>
          <Route path={'/experience'} element={<Experience />}></Route>
        </Routes>
        
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
