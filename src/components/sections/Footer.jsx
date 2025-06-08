import { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D2C4A] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
        
        {/* Left: Logo */}
        <div>
          <h2 className="text-2xl font-bold">MyPortfolio</h2>
        </div>

        {/* Center: Nav + Back to top + Copyright */}
        <div className="space-y-3">
          <div className="flex justify-center md:justify-center gap-6 text-sm">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#about" className="hover:text-gray-300">About</a>
             <a href="#blog" className="hover:text-gray-300">Blogs</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
          <button onClick={scrollToTop} className="text-xs hover:underline">
            ↑ Back to top
          </button>
          <p className="text-xs text-gray-300">
            © 2025 MyPortfolio. All rights reserved.
          </p>
        </div>

        {/* Right: Socials */}
        <div className="flex justify-center md:justify-end gap-5 text-lg">
          <a
            href="https://wa.me/971564505320?text=Hi%2C%20I%20visited%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Scroll to top floating button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-white text-[#0D2C4A] p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
