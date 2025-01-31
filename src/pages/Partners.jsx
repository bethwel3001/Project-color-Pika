import { motion } from "framer-motion";

const partners = [
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Adobe_Creative_Cloud_logo.svg/1200px-Adobe_Creative_Cloud_logo.svg.png" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
  { name: "Dribbble", logo: "https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg" },
  { name: "Codepen", logo: "https://cdn.worldvectorlogo.com/logos/codepen-icon.svg" },
  { name: "Pinterest", logo: "https://cdn.worldvectorlogo.com/logos/pinterest-1.svg" },
];

export default function Partners() {
  return (
    <section id="partners" className="min-h-screen bg-gradient-to-r from-red-500 to-pink-500 dark:from-gray-800 dark:to-gray-900 flex flex-col justify-center items-center text-white p-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center"
          >
            <img src={partner.logo} alt={partner.name} className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4" />
            <p className="text-sm md:text-lg">{partner.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}