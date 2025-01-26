const About = () => {
    return (
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p>To provide an intuitive color-picking experience for everyone.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p>Empower creativity through beautiful palettes and design tools.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Our Team</h3>
            <p>A passionate group of developers and designers.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  