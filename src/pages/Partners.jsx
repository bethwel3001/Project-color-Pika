import { motion } from "framer-motion";

const partners = [
  { name: "Adobe", logo: "https://imgs.search.brave.com/HK73mWXUYut4YMr4L9x-dQ6oIY85bYrj4ths7DTEHQM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L0Fkb2JlLUxvZ28t/NTAweDMxMy5qcGc" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
  { name: "Dribbble", logo: "https://imgs.search.brave.com/N_GtA7MQkzDmqAAlUI8salx0vb-vumDlJorfUUerS6Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/OTcwMTY0NC9maWxl/L29yaWdpbmFsLTM3/MzZhMjBiMWU1OWY1/YjRiMzUzNmNkZGZi/YzcxZGZmLnBuZz9y/ZXNpemU9NDAweDA" },
  { name: "Codepen", logo: "https://cdn.worldvectorlogo.com/logos/codepen-icon.svg" },
  { name: "Pinterest", logo: "https://imgs.search.brave.com/nS2FP2MG4O6B--Yg_IWnloleHugKiKHC_jqgW3IUz5w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2JsaWJyYXJ5Lm9y/Zy9zaXRlLWFzc2V0/cy9pbWFnZXMvcGlu/dGVyZXN0LWxvZ28v/QEBpbWFnZXMvaW1h/Z2UucG5n" },
  { name: "Unsplash", logo: "https://imgs.search.brave.com/bRTmVaelasNlAmdQmkyxbMp-h24jcrvRANNtwndnvRw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzMxMzkv/c2NyZWVuc2hvdHMv/NTY5ODAxNi9hdHRh/Y2htZW50cy8xMjMw/NzcxL3Vuc3BsYXNo/X2xvZ29fZnVsbC5q/cGc_cmVzaXplPTQw/MHgzMDAmdmVydGlj/YWw9Y2VudGVy" },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="min-h-screen bg-gradient-to-r from-red-500 to-pink-500 dark:from-gray-800 dark:to-gray-900 flex flex-col justify-center items-center text-white p-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 max-w-6xl w-full">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-4 bg-white/10 rounded-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4 object-contain"
            />
            <p className="text-sm md:text-lg font-medium">{partner.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}