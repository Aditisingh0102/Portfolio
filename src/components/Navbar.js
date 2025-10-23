import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar({ darkMode, onToggle }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar sticky-navbar">
      <h2 className="logo">Portfolio</h2>

      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle navigation"
      >
        <span className="hamburger" />
      </button>

      <ul
        className={`nav-links ${open ? 'open' : ''}`}
        style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: 0 }}
      >
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/certificate" onClick={closeMenu}>Certificate</Link></li>
        <li><ThemeToggle darkMode={darkMode} onToggle={onToggle} /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
