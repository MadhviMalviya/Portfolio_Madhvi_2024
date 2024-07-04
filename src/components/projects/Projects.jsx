import React, { useState, useEffect } from 'react';
import './Project.css';
import gym from '../assets/gym.png'
import  api from '../assets/api.png'
import  ngo from '../assets/ngo.png'
import weather from '../assets/weather.png'

const Projects = () => {
  const projects = [
    { title: 'Gym Website', description: 'React JS project', image:gym, codeLink: '#hukkh', projectLink: '#' },
    { title: 'Displayed Cards using API', description: 'React JS Project ', image: api, codeLink: '#', projectLink: '#' },
    { title: 'Weather Dashboard', description: 'Weather API and React JS ', image: weather, codeLink: '#', projectLink: 'https://madhvimalviya.github.io/weather-dashboard/' },
    { title: 'Tech Website', description: 'Reavt' , image: 'path/to/image4.jpg', codeLink: '#', projectLink: '#' },
    { title: 'NGO Website', description: 'HTML5/CSS3,JS and Bootstrap5', image: ngo , codeLink: 'https://github.com/MadhviMalviya/NGO_Web.git', projectLink: 'https://6686db424948c24cda2e2bb5--willowy-pudding-887e22.netlify.app/' },
    { title: 'Book Store', description: 'React JS project', image: 'path/to/image6.jpg', codeLink: '#', projectLink: '#' },
    { title: 'Project 7', description: 'Description 7', image: 'path/to/image7.jpg', codeLink: '#', projectLink: '#' },
    { title: 'Project 8', description: 'Description 8', image: 'path/to/image8.jpg', codeLink: '#', projectLink: '#' },
    { title: 'Project 9', description: 'Description 9', image: 'path/to/image9.jpg', codeLink: '#', projectLink: '#' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = window.innerWidth < 600 ? 1 : 3;

  const handleNext = () => {
    if (currentIndex < projects.length - cardsPerPage) {
      setCurrentIndex(currentIndex + cardsPerPage);
    } else {
      setCurrentIndex(0); 
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval); 
  }, [currentIndex]); 

  return (
    <>
      
      <div className="project-main">
      <h2>Projects</h2>
    <div className="project-heading">
   
  </div>
    <div className="carousel-container">
      <button onClick={handlePrev} disabled={currentIndex === 0}>Prev</button>
      <div className="carousel">
        {projects.slice(currentIndex, currentIndex + cardsPerPage).map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.title} className="card-img-top" />
            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.codeLink} className="button"> Code</a>
              <a href={project.projectLink} className="button">See </a>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNext} disabled={currentIndex >= projects.length - cardsPerPage}>Next</button>
      </div></div>
      </>
  );
};

export default Projects;
