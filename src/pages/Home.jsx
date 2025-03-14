  import { motion } from "framer-motion";

  const Home = () => {
    const openGenerateColorPage = () => {
      window.open("/generate-color.html", "_blank");
    };  
    return (
      <section
        id="home"
        className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 dark:from-gray-800 dark:to-gray-900 flex flex-col justify-center items-center text-white p-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
        >
          Welcome to Color Pika!🎨
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl mb-8 text-center"
        >
          Generate beautiful color palettes for your projects.🛠
        </motion.p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-2 bg-white text-purple-500 rounded-lg font-semibold"
          >
            Explore✨
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openGenerateColorPage}
            className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-lg font-semibold"
          >
            Free Trial📱
          </motion.button>
        </div>
      </section>
    );
  };

  export default Home;
