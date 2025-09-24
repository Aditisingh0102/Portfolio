import React from "react";
import { FaCertificate } from "react-icons/fa";
import "./CertificationsSection.css";


const certificates = [
  {
    title: "HackerRank – React Certificate",
    issuer: "HackerRank",
    description: "Hands-on experience in frontend development, component creation, and responsive UI.",
    icon: <FaCertificate size={28} />,
  link: "https://www.hackerrank.com/certificates/30aacd5c1c15",
  },
  {
    title: "OneRoadmap – Full Stack Developer Certificate",
    issuer: "OneRoadmap",
    description: "Awarded for successfully completing the Full Stack Developer program, covering MERN stack, REST APIs, and deployment.",
    icon: <FaCertificate size={28} />,
    link: "#",
  },
];


function CertificateSection() {
  return (
    <section className="certifications-section page">
      <h2>Certificates</h2>
      <div className="certifications-list">
        {certificates.map((certificate, idx) => (
          <div className="cert-card" key={idx}>
            <div className="cert-icon">{certificate.icon}</div>
            <h3>{certificate.title}</h3>
            <p><strong>{certificate.issuer}</strong></p>
            <p>{certificate.description}</p>
            {certificate.link && (
              <a href={certificate.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificateSection;
