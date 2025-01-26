const Home = () => {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Color Pika!</h1>
        <p className="text-lg mb-8">
          Explore the best color palettes and create stunning designs.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-100 transition">
            Create Palette
          </button>
          <button className="bg-white text-purple-500 px-6 py-3 rounded-lg shadow-md hover:bg-purple-100 transition">
            Try for Free
          </button>
        </div>
      </div>
    );
  };
  
  export default Home;
  