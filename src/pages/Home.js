import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  // Smooth scroll to contact section
  const navigate = useNavigate();

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      return;
    }
    // If contact section not on this page, navigate to the contact route
    navigate("/contact");
  };

  return (
    <>
      <div className="home-bg" />
      <section style={{ textAlign: "center", padding: "50px", position: "relative", zIndex: 1 }}>
        {/* Image from public folder */}
        <img
          src={process.env.PUBLIC_URL + '/profile.jpg'}
          alt="My Photo"
          className="profile-img"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "20px"
          }}
        />

        {/* Bio text */}
        <h1>Aditi Singh</h1>
        <h3>
          <span className="highlight">Full-Stack Web Developer</span> & <span className="bold">CSE Student</span>
        </h3>
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          Hi, I’m Aditi Singh, a passionate B.Tech CSE student and aspiring full-stack web developer. I specialize in building interactive and user-friendly web applications, and I’m continuously exploring emerging technologies. Currently, I’m diving into <span className="highlight">AI &amp; Machine Learning</span>, aiming to integrate intelligent solutions into real-world projects and create innovative experiences.
        </p>
        <button className="contact-btn" onClick={handleContactClick}>
          Contact Me
        </button>
      </section>
    </>
  );
}

export default Home;
