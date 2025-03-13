import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 dark:from-gray-800 dark:to-gray-900 flex flex-col justify-center items-center text-white p-4 opacity-0"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center transform transition-all duration-500 hover:scale-105">
        About Color Pika!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl w-full">
        {/* Box 1 */}
        <div className="bg-white/10 p-6 rounded-lg border-2 border-purple-500 sm:bg-blue-100/10 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-purple-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Color Palettes</h3>
          <p className="text-sm md:text-base text-gray-200">
            Explore a wide range of color palettes designed specifically for developers. Perfect for UI/UX design and coding projects.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-white/10 p-6 rounded-lg border-2 border-blue-500 sm:bg-green-100/10 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Easy to Use</h3>
          <p className="text-sm md:text-base text-gray-200">
            Our tools are built with simplicity in mind. Generate and copy color codes in seconds, no hassle!
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-white/10 p-6 rounded-lg border-2 border-green-500 sm:bg-purple-100/10 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-green-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Developer-Friendly</h3>
          <p className="text-sm md:text-base text-gray-200">
            Integrate Color Pika seamlessly into your workflow. Export colors as HEX, RGB, or CSS variables.
          </p>
        </div>

        {/* Box 4 */}
        <div className="bg-white/10 p-6 rounded-lg border-2 border-yellow-500 sm:bg-pink-100/10 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-yellow-300">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Always Available</h3>
          <p className="text-sm md:text-base text-gray-200">
            Access Color Pika anytime, anywhere. Our platform is fully responsive and works on all devices.
          </p>
        </div>
      </div>
    </section>
  );
}