import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky top-0 z-50" style={{ backgroundColor: "#102E50" }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo with clickable link */}
        <a href="#home" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-white">MyPortfolio</h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li><a href="#home" className="hover:text-blue-300 transition">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-300 transition">Projects</a></li>
          <li><a href="#about" className="hover:text-blue-300 transition">About</a></li>
          <li><a href="#blog" className="hover:text-blue-300 transition">Blogs</a></li>
          <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
        </ul>

        {/* Hamburger (Mobile) */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4" style={{ backgroundColor: "#102E50" }}>
          <ul className="flex flex-col space-y-2 font-medium text-white">
            <li><a href="#home" onClick={toggleMenu} className="hover:text-blue-300">Home</a></li>
            <li><a href="#projects" onClick={toggleMenu} className="hover:text-blue-300">Projects</a></li>
            <li><a href="#about" onClick={toggleMenu} className="hover:text-blue-300">About</a></li>
            <li><a href="#blog" onClick={toggleMenu} className="hover:text-blue-300">Blogs</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="hover:text-blue-300">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
