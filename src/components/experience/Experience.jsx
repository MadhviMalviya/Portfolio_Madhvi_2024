import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion library
import '../experience/Experience.css'; // Import your CSS for styling

function Experience() {
    // Define data for each experience entry
    const experiences = [
        {
            title: 'Frontend Developer Trainee',
            company: 'Tech Solutions Ltd.',
            description: 'As a Frontend Developer Trainee, I learned HTML, CSS, and JavaScript fundamentals. I collaborated with senior developers on various projects, gaining hands-on experience in front-end web development.',
            logo: 'https://example.com/techsolutionslogo.png', // Replace with actual logo URL
        },
        {
            title: 'Web Developer Intern',
            company: 'Digital Innovators Inc.',
            description: 'During my internship, I worked on frontend and backend development tasks using React, Node.js, and MongoDB. I contributed to building responsive web applications and gained insights into agile development practices.',
            logo: 'https://example.com/digitalinnovatorslogo.png', // Replace with actual logo URL
        },
        {
            title: 'IT Skills Trainer',
            company: 'Deen Dayal Upadhyay Grameen Kaushal Yojna',
            description: 'As an IT Skills Trainer, I conducted training sessions on programming languages like JavaScript, Python, and frameworks like React and Django. I facilitated hands-on workshops and mentored aspiring developers.',
            logo: 'https://example.com/skillsacademylogo.png', // Replace with actual logo URL
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
                            <img src={exp.logo} alt={`${exp.company} Logo`} className="company-logo" />
                            <h3>{exp.title}</h3>
                            <p>{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Experience;
