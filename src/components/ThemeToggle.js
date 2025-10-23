<<<<<<< HEAD
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeToggle.css";

function ThemeToggle({ onToggle, darkMode }) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle dark mode">
      {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
    </button>
  );
}

export default ThemeToggle;
=======
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeToggle.css";

function ThemeToggle({ onToggle, darkMode }) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle dark mode">
      {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
    </button>
  );
}

export default ThemeToggle;
>>>>>>> b26e8e5 (first changes)
