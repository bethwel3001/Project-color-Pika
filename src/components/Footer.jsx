import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-yellow-500 to-red-500 dark:from-gray-800 dark:to-gray-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Division 1: NextSpace Company */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold mb-4">NextSpace</h3>
          <p className="text-sm md:text-base">
            Innovative software solutions for modern businesses.
          </p>
        </div>

        {/* Division 2: Links with Hover Animation */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:text-gray-300 hover:underline hover:scale-105 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-300 hover:underline hover:scale-105 transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#plans"
                className="hover:text-gray-300 hover:underline hover:scale-105 transition-all duration-300"
              >
                Plans
              </a>
            </li>
          </ul>
        </div>

        {/* Division 3: Social Media Icons */}
        <div className="text-center sm:text-left">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 hover:scale-110 transition-all duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 hover:scale-110 transition-all duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 hover:scale-110 transition-all duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Division 4: Back to Top + Contact */}
        <div className="text-center sm:text-left">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center sm:justify-start space-x-2 hover:text-gray-300 hover:scale-105 transition-all duration-300"
          >
            <FaArrowUp size={24} />
            <span className="text-xl font-semibold">Back to Top</span>
          </button>
          <div className="mt-4">
            <h4 className="text-xl font-semibold mb-2">Contact</h4>
            <p className="text-sm md:text-base">Email: support@colorpika.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-4 border-t border-white/20">
        <p className="text-sm md:text-base">
          © 2025 NextSpace. All rights reserved.
        </p>
      </div>
    </footer>
  );
}