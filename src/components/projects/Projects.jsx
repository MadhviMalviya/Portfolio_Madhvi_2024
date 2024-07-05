import React, { useState, useEffect } from 'react';
import './Project.css';
import gym from '../assets/gym.png';
import book from '../assets/book.png';
import api from '../assets/api.png';
import tech from '../assets/tech.png';
import ngo from '../assets/ngo.png';
import weather from '../assets/weatherr.png';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Projects = () => {
  const projects = [
    { title: 'Gym Website', description: 'React JS project', image: gym, codeLink: '#hukkh', projectLink: '#' },
    { title: 'Weather Dashboard', description: 'Weather API and React JS ', image: weather, codeLink: '#', projectLink: 'https://madhvimalviya.github.io/weather-dashboard/' },
    { title: 'Cards API', description: 'React JS Project ', image: api, codeLink: '#', projectLink: '#' },
    { title: 'Tech Website', description: 'React JS', image: tech, codeLink: '#', projectLink: 'https://marvelous-tanuki-a0f635.netlify.app/#home' },
    { title: 'NGO Website', description: 'HTML5/CSS3,JS and Bootstrap5', image: ngo, codeLink: 'https://github.com/MadhviMalviya/NGO_Web.git', projectLink: 'https://6686db424948c24cda2e2bb5--willowy-pudding-887e22.netlify.app/' },
    { title: 'Book Store', description: 'React JS project', image: book, codeLink: '', projectLink: 'https://relaxed-croquembouche-4621e6.netlify.app/' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = window.innerWidth < 600 ? 1 : 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsPerPage) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - cardsPerPage + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="project-main">
        <h2>Projects</h2>
        <div className="project-heading"></div>
        <div className="carousel-container">
          <button className="pvs-btn" onClick={handlePrev}><GrPrevious style={{fontSize:"2.5rem",color:"rgb(69, 69, 208)"}} /></button>
          <div className="carousel">
            {projects.slice(currentIndex, currentIndex + cardsPerPage).map((project, index) => (
              <div className="card" key={index}>
                <img src={project.image} alt={project.title} className="card-img-top" />
                <div className="card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="card-btn">
                    <a href={project.codeLink} className="button">Code</a>
                    <a href={project.projectLink} className="button">See</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="next-btn" onClick={handleNext}><GrNext style={{fontSize:"2.5rem",color:"rgb(69, 69, 208)"}} /></button>
        </div>
      </div>
    </>
  );
};

export default Projects;
