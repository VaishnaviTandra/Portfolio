import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left - Name */}
        <h1 className="text-2xl font-bold text-green-400 text-center md:text-left mb-4 md:mb-0">
          Vaishnavi Tandra
        </h1>

        {/* Right - Nav Links */}
        <nav className="space-x-8 hidden md:flex text-white text-sm font-semibold uppercase">
          <Link to="/about" className="hover:text-green-400">About</Link>
          <Link to="/experience" className="hover:text-green-400">Experience</Link>
          <Link to="/skills" className="hover:text-green-400">Skills</Link>
          <Link to="/education" className="hover:text-green-400">Education</Link>
          <Link to="/projects" className="hover:text-green-400">Projects</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
