import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GenerateColor = () => {
  const [color, setColor] = useState("#ffffff");
  const [colorCode, setColorCode] = useState("");

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
      <Navbar />
      <div className="container mx-auto p-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Generate Colors</h1>
        <div className="w-full max-w-md">
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full h-16 mb-4"
          />
          <textarea
            value={colorCode}
            onChange={(e) => setColorCode(e.target.value)}
            className="w-full p-2 rounded-lg text-black mb-4"
            placeholder="Enter or paste a color code"
          />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={handleCopy}
              className="flex-1 bg-white text-purple-500 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Copy
            </button>
            <button
              onClick={handleClear}
              className="flex-1 bg-white text-purple-500 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GenerateColor;