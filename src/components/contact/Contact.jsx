import React from "react";
import { useInView } from "react-intersection-observer";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import { GrLocation } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import "../contact/Contact.css";

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1, // trigger when 10% of the element is in view
  });

  return (
    <div className="contact-container">
      <div className="contact-child-container">
        <h2>Contact Me</h2>
        <p className="p">Feel free to reach out to me. I'm always here to help.</p>
      </div>

    
      <div className={`info-container ${inView ? "animate" : ""}`} ref={ref}>
        <ul className="contact-content">
          <li>
            <MdOutlineEmail style={{ color: "rgb(69, 69, 208)", fontSize: "1.5em" }} />{" "}
            <a href="mailto:madhvimalviya1@gmail.com"> madhvimalviya1@gmail.com</a>
          </li>
          <li>
            <FiPhone style={{ color: "rgb(69, 69, 208)", fontSize: "1.5em" }} />{" "}
            <a href="tel:+918770430763">+91 87704 30763</a>
          </li>
          <li>
            <SiWhatsapp style={{ color: "rgb(69, 69, 208)", fontSize: "1.5em" }} />{" "}
            <a href="https://wa.me/918827933033">+91 88279 33033</a>
          </li>
          <li>
            <AiOutlineLinkedin style={{ color: "rgb(69, 69, 208)", fontSize: "1.5em" }} />{" "}
            <a href="https://www.linkedin.com/in/madhvi-m-3a191423b" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </li>
          <li>
            <GrLocation style={{ color: "rgb(69, 69, 208)", fontSize: "1.5em" }} />{" "}
            <a href="Sehore,M.P."> Sehore,M.P.</a>
          </li>
          <li className="hero-icons">
            <div>
              <a href="https://www.instagram.com/madhviii____?igsh=azR5ZGxlZzZnOTdq">
                <FaInstagram style={{ color: "rgb(69, 69, 208)" }} />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/madhvi.malviya.me">
                <RiFacebookCircleLine  style={{ color: "rgb(69, 69, 208)" }}/>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/Madhviiiii">
                <FaXTwitter style={{ color: "rgb(69, 69, 208)" }} />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/madhvi-m-3a191423b">
                <TbBrandLinkedin style={{ color: "rgb(69, 69, 208)" }} />
              </a>
            </div>
            <div>
              <a href="https://github.com/MadhviMalviya">
                <FaGithub  style={{ color: "rgb(69, 69, 208)" }}/>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
