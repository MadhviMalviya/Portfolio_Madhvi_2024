import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../skills/Skills.css';
import react from '../assets/react.svg';
import redux from '../assets/redux.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import bootstrap from '../assets/bootstrap.png';
import mongodb from '../assets/mongodb.png';
import node from '../assets/nodejs.png';
import figma from '../assets/figma.png';
import mysql from '../assets/mysql.png';
import express from '../assets/express.png';

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { img: react, name: 'React' },
    { img: redux, name: 'Redux' },
    { img: node, name: 'Node.js' },
    { img: express, name: 'Express' },
    { img: mongodb, name: 'MongoDB' },
    { img: html, name: 'HTML5' },
    { img: css, name: 'CSS3' },
    { img: js, name: 'JavaScript' },
    { img: mysql, name: 'MySQL' },
    { img: bootstrap, name: 'Bootstrap' },
    { img: figma, name: 'Figma' }
  ];

  return (
    <div className='skills-list'>
      <div>
        <h2>Skills</h2>
      </div>
      <p>Here are the technologies I have been working on recently.</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} ref={ref} className={inView ? 'animate' : ''}>
            <img src={skill.img} alt={skill.name} />
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
