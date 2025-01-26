import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Color Pika!</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:underline hover:text-gray-200 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:underline hover:text-gray-200 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/partners"
              className="hover:underline hover:text-gray-200 transition duration-200"
            >
              Partners
            </Link>
          </li>
          <li>
            <Link
              to="/plans"
              className="hover:underline hover:text-gray-200 transition duration-200"
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline hover:text-gray-200 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
