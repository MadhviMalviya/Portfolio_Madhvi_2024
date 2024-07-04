import React from 'react';
import { motion } from 'framer-motion'; 
import '../experience/Experience.css'; 
import ddu from '../assets/dduu.jpg';
import fup from '../assets/fup.svg';
import dt from '../assets/dt.svg';

function Experience() {
    const experiences = [
        {
            title: 'Frontend Developer Trainee',
            company: 'Function Up',
            description: 'As a Frontend Developer Trainee, I learned HTML, CSS,JavaScript ,Git React JS fundamentals. I collaborated with senior developers on various projects, gaining hands-on experience in front-end web development.',
            logo: fup,
            duration: 'Feb 2023 - Sept 2023',
        },
        {
            title: 'Web Developer Intern',
            company: 'Deep Thought',
            description: 'During my internship, I worked on frontend and backend development tasks using React, Node.js, and MongoDB. I contributed to building responsive web applications and gained insights into agile development practices.',
            logo: dt,
            duration: 'Sept 2023 - Apr 2023',
        },
        {
            title: 'IT Skills Trainer',
            company: 'DDU-GKY',
            description: 'As an IT Skills Trainer, I conducted training sessions on programming languages like JavaScript, and frameworks like React, Figma, MS Office. I facilitated hands-on workshops and mentored aspiring developers.',
            logo: ddu,
            duration: 'Dec 2023 - Present',
        }
    ];

    return (
        <div className="experience-container">
            <h2>Work Experience</h2>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="experience-content"
            >
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="experience-item"
                        >
                            <div className='company'>
                                <img src={exp.logo} alt={`${exp.company} Logo`} className="company-logo" />
                                <h5>{exp.company}</h5>
                            </div>
                            <h3>{exp.title}</h3>
                            <p>{exp.description}</p>
                            <p className="duration">{exp.duration}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Experience;
