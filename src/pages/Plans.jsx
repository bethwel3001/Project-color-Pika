import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particlesInit = async (main) => {
  await loadFull(main);
};

const particlesOptions = {
  particles: {
    number: {
      value: 50,
    },
    color: {
      value: "#ffffff",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 3,
    },
    move: {
      enable: true,
      speed: 2,
    },
  },
};

export default function Plans() {
  return (
    <section
      id="plans"
      className="min-h-screen bg-gradient-to-r from-green-500 to-yellow-500 dark:from-gray-800 dark:to-gray-900 flex flex-col justify-center items-center text-white p-4 relative overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Plans</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl w-full">
          {/* Free Trial Plan */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 p-6 rounded-lg border-2 border-purple-500 hover:border-purple-300 transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">1️⃣ Free Trial</h3>
            <p className="text-sm md:text-base mb-4">
              ✅ Basic features <br />✅ Limited palettes
            </p>
            <p className="text-lg md:text-xl font-bold">$0/month</p>
          </motion.div>

          {/* Basic Plan */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 p-6 rounded-lg border-2 border-blue-500 hover:border-blue-300 transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">2️⃣ Basic</h3>
            <p className="text-sm md:text-base mb-4">
              ✅ Unlimited palettes <br />✅ Save up to 10 palettes
            </p>
            <p className="text-lg md:text-xl font-bold">$5/month</p>
          </motion.div>

          {/* Unique Plan */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 p-6 rounded-lg border-2 border-green-500 hover:border-green-300 transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">3️⃣ Unique</h3>
            <p className="text-sm md:text-base mb-4">
              ✅ Custom gradients <br />✅ Export to CSS/SCSS
            </p>
            <p className="text-lg md:text-xl font-bold">$10/month</p>
          </motion.div>

          {/* Nova Plan */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 p-6 rounded-lg border-2 border-yellow-500 hover:border-yellow-300 transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">4️⃣ Nova</h3>
            <p className="text-sm md:text-base mb-4">
              ✅ AI-generated palettes <br />✅ Priority support
            </p>
            <p className="text-lg md:text-xl font-bold">$15/month</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}