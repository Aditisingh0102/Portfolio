import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section page" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:aditisingh@example.com" className="contact-icon" title="Email" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={32} />
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/aditi-singh-18639331a" className="contact-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/Aditisingh0102" className="contact-icon" title="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
          <span>GitHub</span>
        </a>
        <a href="https://leetcode.com/u/Aditisingh_74/" className="contact-icon" title="LeetCode" target="_blank" rel="noopener noreferrer">
          <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt="LeetCode" style={{width:32, height:32}} />
          <span>LeetCode</span>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
