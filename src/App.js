
import './App.css';
import { BrowserRouter as Router, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Feedback from './components/feedback/Feedback';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <BrowserRouter>
        <Router>
          <Routes path={'/'} element={<Home />}></Routes>
          <Routes path={'/about'} element={<About />}></Routes>
          <Routes path={'/contact'} element={<Contact />}></Routes>
          <Routes path={'/projects'} element={<Projects />}></Routes>
          <Routes path={'/feedback'} element={<Feedback />}></Routes>
        </Router>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
