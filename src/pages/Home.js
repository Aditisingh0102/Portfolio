import React from "react";

function Home() {
  return (
    <section style={{ textAlign: "center", padding: "50px" }}>
      {/* Image on top */}
      <img
        src={process.env.PUBLIC_URL + "/IMG-20240603-WA0059.jpg"}
        alt="My Photo"
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
      <h3>Full-Stack Web Developer & CSE Student</h3>
      <p style={{ maxWidth: "600px", margin: "20px auto" }}>
        Hi, I’m Aditi Singh, a passionate B.Tech CSE student and aspiring full-stack web developer. 
        I specialize in building interactive and user-friendly web applications, and I’m continuously 
        exploring emerging technologies. Currently, I’m diving into AI & Machine Learning, aiming to 
        integrate intelligent solutions into real-world projects and create innovative experiences.
      </p>
    </section>
  );
}

export default Home;
