import React from 'react';

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
          <a href="#about" className="hover:text-green-400">About</a>
          <a href="#experience" className="hover:text-green-400">Experience</a>
          <a href="#skills" className="hover:text-green-400">Skills</a>
          <a href="#education" className="hover:text-green-400">Education</a>
          <a href="#projects" className="hover:text-green-400">Projects</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
