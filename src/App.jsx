import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// pages that contain 
import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
import GenerateColor from "./pages/GenerateColor";

function App() {
  return (
    <Router>
    <div className="font-sans bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/generate-color" element={<GenerateColor />} />
      </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
    </Router>
  );
};

export default App;
