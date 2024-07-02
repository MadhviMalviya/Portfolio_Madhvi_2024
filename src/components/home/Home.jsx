import img from '../assets/img2.svg';
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import "../home/Home.css"
import About from '../about/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Feedback from '../feedback/Feedback';
import Skills from '../skills/Skills';
import Experience from '../experience/Experience';

function Home() {
  return (

    <>
      
      <div className="home">
        <div className='home-container'>
          <div className='hero-img-container'>
            <img className='hero-img' src={img} alt='img' /></div>
          <div className='hero-content'>
            <h1>I am Madhvi </h1>
            <h3>MERN Stack Developer</h3>

            <p>Crafting dynamic web applications with the power of the MERN stack.</p>

            <div className='hero-icons'>
              <div><a href='https://www.instagram.com/madhviii____?igsh=azR5ZGxlZzZnOTdq'><FaInstagram style={{fontSize:"2.5rem",color:"rgb(69, 69, 208)"}} /></a></div>
              <div  > <a href='https://www.facebook.com/madhvi.malviya.me' ><RiFacebookCircleLine style={{fontSize:"2.5rem",color:"rgb(69, 69, 208)"}}/></a></div>
              <div> <a href='https://twitter.com/Madhviiiii' ><FaXTwitter style={{fontSize:"2.5rem",color:"rgb(69, 69, 208)"}}/></a> </div>
              <div>  <a href='https://www.linkedin.com/in/madhvi-m-3a191423b' > <TbBrandLinkedin  style={{fontSize:"2.5rem",color:"rgb(69, 69, 208)"}}/></a> </div>
              <div>  <a href='https://github.com/MadhviMalviya' ><FaGithub style={{fontSize:"2.5rem",color:"rgb(69, 69, 208)"}} /></a> </div>

            </div>

            <div className='resume-container' >
              <button className='resume-btn'> <a href='https://drive.google.com/file/d/1VvGRQsQLD82HXoq8T1VunG02fYQzRuW0/view'>Resume</a></button>
            </div>
          </div>
        </div>
      
      <About />
      <Skills />
        <Projects />
        <Experience/>
      <Contact />
      <Feedback />
</div>
    </>

  )
}

export default Home  