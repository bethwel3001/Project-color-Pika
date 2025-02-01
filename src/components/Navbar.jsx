import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-gray-800 dark:to-gray-900 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-white text-2xl font-bold">Kala-Pika🔥!</a>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`${isMenuOpen ? "block" : "hidden"} md:flex md:space-x-4`}>
          <a href="#home" className="block text-white hover:text-gray-200 py-2 md:py-0">Home</a>
          <a href="#about" className="block text-white hover:text-gray-200 py-2 md:py-0">About</a>
          <a href="#plans" className="block text-white hover:text-gray-200 py-2 md:py-0">Plans</a>
          <a href="#partners" className="block text-white hover:text-gray-200 py-2 md:py-0">Partners</a>
          <a href="#contact" className="block text-white hover:text-gray-200 py-2 md:py-0">Contact</a>
          <button onClick={toggleDarkMode} className="text-white">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}