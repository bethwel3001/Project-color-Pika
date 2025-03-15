import { useState, useEffect } from "react";

const GenerateColor = () => {
  const [color, setColor] = useState("#ffffff");
  const [colorCode, setColorCode] = useState("");
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Handle scroll event to show/hide footer
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleColorChange = (e) => {
    setColor(e.target.value);
    setColorCode(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(colorCode);
    alert("Color code copied to clipboard!");
  };

  const handleClear = () => {
    setColor("#ffffff");
    setColorCode("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 dark:from-gray-800 dark:to-gray-900 text-white">
      {/* Custom Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg p-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-500 dark:text-purple-300">
            Color Generator
          </h1>
          <div className="flex space-x-4">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all duration-300 text-sm md:text-base shadow-md hover:shadow-lg">
              Subscribe
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 text-sm md:text-base shadow-md hover:shadow-lg">
              View Plans
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-4 flex flex-col items-center pt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Generate Colors
        </h1>
        <div className="w-full max-w-md bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full h-16 mb-4 cursor-pointer rounded-lg shadow-sm"
          />
          <textarea
            value={colorCode}
            onChange={(e) => setColorCode(e.target.value)}
            className="w-full p-2 rounded-lg text-black dark:text-white dark:bg-gray-600 mb-4 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter or paste a color code"
            rows="3"
          />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={handleCopy}
              className="flex-1 bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Copy
            </button>
            <button
              onClick={handleClear}
              className="flex-1 bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Custom Footer */}
      <footer
        className={`fixed bottom-0 left-0 right-0 bg-gray-800 dark:bg-gray-900 text-white p-4 transition-transform duration-300 ${
          isFooterVisible ? "translate-y-0" : "translate-y-full"
        } shadow-lg`}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
            {/* Links */}
            <div>
              <h3 className="font-bold mb-2">Links</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Back to Home Button */}
            <div className="flex items-center justify-center">
              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all duration-300 shadow-md hover:shadow-lg">
                Back to Home
              </button>
            </div>

            {/* Subscribe Button */}
            <div className="flex items-center justify-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>

            {/* NextSpace Software Tag */}
            <div className="flex items-center justify-center md:justify-end">
              <p className="text-gray-400">NextSpace Software</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GenerateColor;