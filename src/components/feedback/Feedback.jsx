import React from 'react'
import img from '../assets/img11.svg';
import "../feedback/Feedback.css"
import Navbar from '../nav/Navbar';
import Footer from '../footer/Footer';



function Feedback() {
  return (
    <>
      
      <div className='feedback-heading'>
        <h2>Give your Feedback</h2>
      </div>
      <div className='feedback-container'>
        
        <div className='hero-img-container-feedback'>
          <img className='hero-img-feedback' src={img} alt='img' />
        </div>

        <div className='feedback-textarea'>
          <textarea placeholder='Write your feedback here ...' ></textarea>
          <button className='feedback-btn'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Feedback