export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 dark:from-gray-800 dark:to-gray-900 flex flex-col justify-center items-center text-white p-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Color Pika!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="bg-white/10 p-4 md:p-6 rounded-lg border-2 border-purple-500">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Quality 1</h3>
          <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white/10 p-4 md:p-6 rounded-lg border-2 border-blue-500">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Quality 2</h3>
          <p className="text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
}