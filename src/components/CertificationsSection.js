<<<<<<< HEAD
import React from "react";
import { FaCertificate, FaAward, FaUserGraduate, FaExternalLinkAlt } from "react-icons/fa";
import "./CertificationsSection.css";

const certifications = [
  {
    title: "HackerRank – Frontend Developer (React)",
    issuer: "HackerRank",
    description: "Hands-on experience in frontend development, component creation, and responsive UI.",
    icon: <FaCertificate size={28} />,
    link: "https://www.hackerrank.com/certificates/30aacd5c1c15",
  },
  {
    title: "Accenture – Software Engineering Job Simulation Certificate",
    issuer: "Accenture",
    description: "Completed a virtual job simulation focused on real-world software engineering tasks, teamwork, and project delivery best practices.",
    icon: <FaCertificate size={28} />,
    link: "https://www.theforage.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_ygeFbDMwZivJGtn3y_1748940645321_completion_certificate.pdf",
  },
  {
    title: "Infosys Springboard – Cloud Computing Certificate",
    issuer: "Infosys Springboard",
    description: "Gained foundational knowledge of cloud computing concepts, services, and real-world applications.",
    icon: <FaUserGraduate size={28} />,
    link: "file:///C:/Users/aditi/Desktop/Certificates/cloud%20computing%20Inforsys%20certificate.pdf",
  },
  {
    title: "TCS iON Career Edge – Young Professional Certificate",
    issuer: "TCS iON",
    description: "Completed the TCS iON Career Edge – Young Professional program, gaining essential workplace and professional skills for career readiness.",
    icon: <FaAward size={28} />,
    link: "https://drive.google.com/file/d/1Ae0TJG6g20lEMwVHWvPbAcBg8-3OvMXB/view?usp=sharing",
  },
  {
    title: "Simplilearn|Skillup – Introduction to Front End Development",
    issuer: "Simplilearn|Skillup",
    description: "Completed the 'Introduction to Front End Development' course, covering HTML, CSS, JavaScript, and modern web fundamentals.",
    icon: <FaCertificate size={28} />,
  link: "https://simpli-web.app.link/e/oiuRj7xGVWb",
  },
  {
    title: "OneRoadmap – Full Stack Developer Certificate",
    issuer: "OneRoadmap",
    description: "Awarded for successfully completing the Full Stack Developer program, covering MERN stack, REST APIs, and deployment.",
    icon: <FaCertificate size={28} />,
    link: "https://oneroadmap.io/skills/fs/certificate/CERT-CF53E886",
  },
];

function CertificationsSection() {
  return (
    <section className="certifications-section page">
      <h2>Certifications & Internships</h2>
      <div className="certifications-list">
        {certifications.map((cert, idx) => (
          <div className="cert-card" key={idx}>
            <div className="cert-icon">{cert.icon}</div>
            <h3>{cert.title}</h3>
            <p><strong>{cert.issuer}</strong></p>
            <p>{cert.description}</p>
            {cert.link && (
              <a
                href={cert.link}
                className="certificate-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate <FaExternalLinkAlt className="download-icon" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;
=======
import React from "react";
import { FaCertificate, FaAward, FaUserGraduate, FaExternalLinkAlt } from "react-icons/fa";
import "./CertificationsSection.css";

const certifications = [
  {
    title: "HackerRank – Frontend Developer (React)",
    issuer: "HackerRank",
    description: "Hands-on experience in frontend development, component creation, and responsive UI.",
    icon: <FaCertificate size={28} />,
    link: "https://www.hackerrank.com/certificates/30aacd5c1c15",
  },
  {
    title: "Accenture – Software Engineering Job Simulation Certificate",
    issuer: "Accenture",
    description: "Completed a virtual job simulation focused on real-world software engineering tasks, teamwork, and project delivery best practices.",
    icon: <FaCertificate size={28} />,
    link: "https://www.theforage.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_ygeFbDMwZivJGtn3y_1748940645321_completion_certificate.pdf",
  },
  {
    title: "Infosys Springboard – Cloud Computing Certificate",
    issuer: "Infosys Springboard",
    description: "Gained foundational knowledge of cloud computing concepts, services, and real-world applications.",
    icon: <FaUserGraduate size={28} />,
    link: "file:///C:/Users/aditi/Desktop/Certificates/cloud%20computing%20Inforsys%20certificate.pdf",
  },
  {
    title: "TCS iON Career Edge – Young Professional Certificate",
    issuer: "TCS iON",
    description: "Completed the TCS iON Career Edge – Young Professional program, gaining essential workplace and professional skills for career readiness.",
    icon: <FaAward size={28} />,
    link: "https://drive.google.com/file/d/1Ae0TJG6g20lEMwVHWvPbAcBg8-3OvMXB/view?usp=sharing",
  },
  {
    title: "Simplilearn|Skillup – Introduction to Front End Development",
    issuer: "Simplilearn|Skillup",
    description: "Completed the 'Introduction to Front End Development' course, covering HTML, CSS, JavaScript, and modern web fundamentals.",
    icon: <FaCertificate size={28} />,
  link: "https://simpli-web.app.link/e/oiuRj7xGVWb",
  },
  {
    title: "OneRoadmap – Full Stack Developer Certificate",
    issuer: "OneRoadmap",
    description: "Awarded for successfully completing the Full Stack Developer program, covering MERN stack, REST APIs, and deployment.",
    icon: <FaCertificate size={28} />,
    link: "https://oneroadmap.io/skills/fs/certificate/CERT-CF53E886",
  },
];

function CertificationsSection() {
  return (
    <section className="certifications-section page">
      <h2>Certifications & Internships</h2>
      <div className="certifications-list">
        {certifications.map((cert, idx) => (
          <div className="cert-card" key={idx}>
            <div className="cert-icon">{cert.icon}</div>
            <h3>{cert.title}</h3>
            <p><strong>{cert.issuer}</strong></p>
            <p>{cert.description}</p>
            {cert.link && (
              <a
                href={cert.link}
                className="certificate-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate <FaExternalLinkAlt className="download-icon" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;
>>>>>>> b26e8e5 (first changes)
