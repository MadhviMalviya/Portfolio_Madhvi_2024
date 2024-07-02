import React from 'react';
import { useInView } from 'react-intersection-observer';
import img from '../assets/img6.svg';
import imgg from '../assets/img8.svg';
import '../about/About.css';

function About() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div className='about-container'>
        <h2>About Me</h2>
      </div>

      <div className={`about-box-1 ${inView1 ? 'animate' : ''}`} ref={ref1}>
        <div className='about-img'>
          <img src={img} alt='img' />
        </div>
        <div className='about-content'>
          <p>
            Actively engaged in educational technology projects, I mentor college students, work in Govt. Scheme Deen Dayal Upadhyay Grameen Kaushal Yojna (DDUGKY), aiming to transform India's education system through innovation and collaboration.
          </p>
        </div>
      </div>

      <div className={`about-box-2 ${inView2 ? 'animate' : ''}`} ref={ref2}>
        <div className='about-content'>
          <p>
            Passionate web developer crafting user-friendly sites. Enhances supply chain efficiency with data-driven decisions, fostering customer satisfaction and business performance.
            Building seamless web experiences with MongoDB, Express, React, and Node.js.
          </p>
        </div>
        <div className='about-img'>
          <img src={imgg} alt='img' />
        </div>
      </div>
    </>
  );
}

export default About;
