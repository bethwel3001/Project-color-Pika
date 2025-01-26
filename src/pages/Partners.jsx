import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_Icon.svg" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "CSS Tricks", logo: "https://css-tricks.com/favicon.ico" },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Our Partners
      </h2>
      <div className="flex justify-center items-center space-x-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-4 bg-white dark:bg-gray-700 shadow-lg rounded-lg"
          >
            <img src={partner.logo} alt={partner.name} className="h-16 mx-auto" />
            <p className="text-center mt-4 text-lg font-semibold">
              {partner.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
