<<<<<<< HEAD
import React from "react";
import { FaExternalLinkAlt, FaLightbulb, FaChartBar } from "react-icons/fa";
import "./ProjectsSection.css";

const projects = [
  {
    title: "DSA Sorting Visualizer",
    description:
      "Interactive frontend app to visualize sorting algorithms (Bubble, Quick, Merge, Insertion). Smooth animations, responsive UI, and plans for backend/AI features.",
    skills: ["React", "Bootstrap", "JavaScript", "Algorithm Visualization", "DSA"],
    icon: <FaChartBar size={28} />,
    link: "#",
  },
  {
    title: "IdeaConnect",
    description:
      "Dual-dashboard platform connecting startup ideas with recruiters/investors. User-friendly UI, planned AI-powered matching, and full-stack project planning.",
    skills: ["React", "UI/UX Design", "Project Planning", "AI/ML (future)", "Full-stack"],
    icon: <FaLightbulb size={28} />,
    link: "#",
  },
];

function ProjectsSection() {
  return (
    <section className="projects-section page">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-skills">
              {project.skills.map((skill, i) => (
                <span className="project-skill" key={i}>{skill}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
=======
import React from "react";
import { FaExternalLinkAlt, FaLightbulb, FaChartBar } from "react-icons/fa";
import "./ProjectsSection.css";

const projects = [
  {
    title: "DSA Sorting Visualizer",
    description:
      "Interactive frontend app to visualize sorting algorithms (Bubble, Quick, Merge, Insertion). Smooth animations, responsive UI, and plans for backend/AI features.",
    skills: ["React", "Bootstrap", "JavaScript", "Algorithm Visualization", "DSA"],
    icon: <FaChartBar size={28} />,
    link: "#",
  },
  {
    title: "IdeaConnect",
    description:
      "Dual-dashboard platform connecting startup ideas with recruiters/investors. User-friendly UI, planned AI-powered matching, and full-stack project planning.",
    skills: ["React", "UI/UX Design", "Project Planning", "AI/ML (future)", "Full-stack"],
    icon: <FaLightbulb size={28} />,
    link: "#",
  },
];

function ProjectsSection() {
  return (
    <section className="projects-section page">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-skills">
              {project.skills.map((skill, i) => (
                <span className="project-skill" key={i}>{skill}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
>>>>>>> b26e8e5 (first changes)
