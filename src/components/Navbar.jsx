import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-gray-800 dark:to-gray-900 fixed w-full z-50 md:relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-white text-3xl font-extrabold hover:font-black transition-all duration-300"
        >
          Kala-Pika🔥!
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <FaBars size={24} />
          </button>
        </div>

        {/* Overlay for Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm ${
            isMenuOpen ? "block" : "hidden"
          } md:hidden`}
          onClick={toggleMenu}
        ></div>

        {/* Nav Links */}
        <div
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg rounded-lg p-8 w-11/12 max-w-md ${
            isMenuOpen ? "block" : "hidden"
          } md:static md:bg-transparent md:backdrop-blur-0 md:transform-none md:p-0 md:w-auto md:max-w-none md:flex md:items-center`}
          style={{ zIndex: 1000 }}
        >
          {/* Close Button for Mobile Menu */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white hover:text-gray-200 md:hidden"
          >
            <FaTimes size={24} />
          </button>

          {/* Links */}
          <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-8">
            <a
              href="#home"
              className="text-white text-lg font-medium hover:text-gray-200 hover:scale-105 transition-all duration-300"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white text-lg font-medium hover:text-gray-200 hover:scale-105 transition-all duration-300"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#plans"
              className="text-white text-lg font-medium hover:text-gray-200 hover:scale-105 transition-all duration-300"
              onClick={toggleMenu}
            >
              Plans
            </a>
            <a
              href="#partners"
              className="text-white text-lg font-medium hover:text-gray-200 hover:scale-105 transition-all duration-300"
              onClick={toggleMenu}
            >
              Partners
            </a>
            <a
              href="#contact"
              className="text-white text-lg font-medium hover:text-gray-200 hover:scale-105 transition-all duration-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <button
              onClick={toggleDarkMode}
              className="text-white text-lg hover:text-gray-200 hover:scale-105 transition-all duration-300 mt-4 md:mt-0"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}