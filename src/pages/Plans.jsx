export default function Plans() {
  return (
    <section id="plans" className="min-h-screen bg-gradient-to-r from-green-500 to-yellow-500 dark:from-gray-800 dark:to-gray-900 flex flex-col justify-center items-center text-white p-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        <div className="bg-white/10 p-4 md:p-6 rounded-lg border-2 border-purple-500">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Free Trial</h3>
          <p className="text-sm md:text-base">Basic features, limited palettes.</p>
          <p className="text-lg md:text-xl font-bold mt-2 md:mt-4">$0/month</p>
        </div>
        <div className="bg-white/10 p-4 md:p-6 rounded-lg border-2 border-blue-500">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Basic</h3>
          <p className="text-sm md:text-base">Unlimited palettes, save up to 10 palettes.</p>
          <p className="text-lg md:text-xl font-bold mt-2 md:mt-4">$5/month</p>
        </div>
        <div className="bg-white/10 p-4 md:p-6 rounded-lg border-2 border-green-500">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Unique</h3>
          <p className="text-sm md:text-base">Custom gradients, export to CSS/SCSS.</p>
          <p className="text-lg md:text-xl font-bold mt-2 md:mt-4">$10/month</p>
        </div>
        <div className="bg-white/10 p-4 md:p-6 rounded-lg border-2 border-yellow-500">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Nova</h3>
          <p className="text-sm md:text-base">AI-generated palettes, priority support.</p>
          <p className="text-lg md:text-xl font-bold mt-2 md:mt-4">$15/month</p>
        </div>
      </div>
    </section>
  );
}