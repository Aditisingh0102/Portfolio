<<<<<<< HEAD
import React from "react";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";
import "./AchievementsSection.css";

const achievements = [
  {
    title: "HackerRank React Certification",
    description: "Successfully completed, demonstrating strong frontend development skills.",
    icon: <FaAward size={28} />,
  },
  {
    title: "DSA Problem Solving",
    description: "Consistently solved problems on LeetCode for 100+ days, strengthening algorithmic skills.",
    icon: <FaMedal size={28} />,
  },
  {
    title: "SIH Participation",
    description: "Participated in Smart India Hackathon and received a certificate of participation.",
    icon: <FaTrophy size={28} />,
  },
  {
    title: "DevToDSA Hackathon",
    description: "Achieved 5th rank in Phase 1 and selected for Phase 2, demonstrating strong coding and teamwork skills.",
    icon: <FaAward size={28} />,
  },
];

function AchievementsSection() {
  return (
    <section className="achievements-section page">
      <h2>Achievements</h2>
      <div className="achievements-list">
        {achievements.map((ach, idx) => (
          <div className="achievement-card" key={idx}>
            <div className="achievement-icon">{ach.icon}</div>
            <h3>{ach.title}</h3>
            <p>{ach.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AchievementsSection;
=======
import React from "react";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";
import "./AchievementsSection.css";

const achievements = [
  {
    title: "HackerRank React Certification",
    description: "Successfully completed, demonstrating strong frontend development skills.",
    icon: <FaAward size={28} />,
  },
  {
    title: "DSA Problem Solving",
    description: "Consistently solved problems on LeetCode for 100+ days, strengthening algorithmic skills.",
    icon: <FaMedal size={28} />,
  },
  {
    title: "SIH Participation",
    description: "Participated in Smart India Hackathon and received a certificate of participation.",
    icon: <FaTrophy size={28} />,
  },
  {
    title: "DevToDSA Hackathon",
    description: "Achieved 5th rank in Phase 1 and selected for Phase 2, demonstrating strong coding and teamwork skills.",
    icon: <FaAward size={28} />,
  },
];

function AchievementsSection() {
  return (
    <section className="achievements-section page">
      <h2>Achievements</h2>
      <div className="achievements-list">
        {achievements.map((ach, idx) => (
          <div className="achievement-card" key={idx}>
            <div className="achievement-icon">{ach.icon}</div>
            <h3>{ach.title}</h3>
            <p>{ach.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AchievementsSection;
>>>>>>> b26e8e5 (first changes)
