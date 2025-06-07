import React from "react";
import { Facebook, Twitter, Linkedin, Github, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-white py-10 px-4 mt-16" style={{ backgroundColor: "#102E50" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">

        {/* Brand */}
        <div className="text-xl font-bold">MyPortfolio</div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center space-x-6 text-sm">
          <li><a href="#home" className="hover:text-blue-300 transition">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-300 transition">Projects</a></li>
          <li><a href="#about" className="hover:text-blue-300 transition">About</a></li>
          <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
        </ul>

        {/* Social Media */}
        <div className="flex space-x-4 text-white">
          <a href="https://https://web.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <Github size={20} />
          </a>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-8 flex flex-col items-center space-y-4 text-sm text-gray-300">
        <button
          onClick={handleBackToTop}
          className="flex items-center gap-1 hover:text-blue-300 transition"
        >
          <ArrowUp size={16} />
          Back to top
        </button>
        <div>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</div>
      </div>
    </footer>
  );
}
