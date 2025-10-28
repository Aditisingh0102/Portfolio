import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
  <img className="hero-photo" src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Aditi Singh" />
        <h1>Aditi Singh</h1>
        <h2><span className="highlight-dev">Full-Stack Web Developer</span> & CSE Student</h2>
        <p>
          Hi, I’m Aditi Singh, a passionate B.Tech CSE student and aspiring <span className="highlight-dev">full-stack web developer</span>. I specialize in building interactive and user-friendly web applications, and I’m continuously exploring emerging technologies. Currently, I’m diving into <span className="highlight-ai">AI &amp; Machine Learning</span>, aiming to integrate intelligent solutions into real-world projects and create innovative experiences.
        </p>
  <Link className="hero-cta" to="/contact">Contact Me</Link>
      </div>
    </section>
  );
}

export default Hero;
