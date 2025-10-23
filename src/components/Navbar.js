<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar({ darkMode, onToggle }) {
  return (
    <nav className="navbar sticky-navbar">
  <h2 className="logo">Portfolio</h2>
      <ul style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/certificate">Certificate</Link></li>
        <li><ThemeToggle darkMode={darkMode} onToggle={onToggle} /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
=======
import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar({ darkMode, onToggle }) {
  return (
    <nav className="navbar sticky-navbar">
  <h2 className="logo">Portfolio</h2>
      <ul className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/certificate">Certificate</Link></li>
        <li><ThemeToggle darkMode={darkMode} onToggle={onToggle} /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
>>>>>>> b26e8e5 (first changes)
