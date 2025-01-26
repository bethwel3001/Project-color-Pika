import { useState } from "react";

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggler;
