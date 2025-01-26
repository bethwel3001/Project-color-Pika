import React, { useState } from "react";

const GenerateColor = () => {
  const [color, setColor] = useState("#ffffff"); // Default color
  const [palette, setPalette] = useState([]); // Color palette array

  const handleGenerate = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    setColor(randomColor);
    setPalette((prevPalette) => [...prevPalette, randomColor]);
  };

  const handleCopy = (colorCode) => {
    navigator.clipboard.writeText(colorCode);
    alert(`Copied ${colorCode} to clipboard!`);
  };

  const handleClear = () => {
    setPalette([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-500 text-white flex flex-col items-center py-10">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center bg-purple-700 p-4 shadow-lg">
        <h1 className="text-xl font-bold">Color Pika</h1>
        <div className="space-x-4">
          <button className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-200 transition">
            Create Free Account
          </button>
          <button className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-200 transition">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col items-center space-y-6 mt-10">
        <div
          className="w-40 h-40 rounded-lg shadow-lg border-2 border-white"
          style={{ backgroundColor: color }}
        ></div>
        <p className="text-lg font-semibold">Current Color: {color}</p>
        <div className="space-x-4">
          <button
            onClick={handleGenerate}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition"
          >
            Generate Color
          </button>
          <button
            onClick={handleClear}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg transition"
          >
            Clear Palette
          </button>
        </div>
      </div>

      {/* Generated Palette */}
      {palette.length > 0 && (
        <div className="mt-10 w-full px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-center mb-4">Generated Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {palette.map((colorCode, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-lg text-center"
                style={{ backgroundColor: colorCode }}
              >
                <p className="text-white font-semibold">{colorCode}</p>
                <button
                  onClick={() => handleCopy(colorCode)}
                  className="mt-2 bg-white text-purple-700 px-2 py-1 rounded hover:bg-gray-200 transition"
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto bg-purple-700 w-full py-4 text-center">
        <p className="text-sm">© 2025 Color Pika. All Rights Reserved.</p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-2 bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Back to Site
        </button>
      </footer>
    </div>
  );
};

export default GenerateColor;
