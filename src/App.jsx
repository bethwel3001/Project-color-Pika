import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import GenerateColor from "./pages/GenerateColor";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
      <Plans />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}