import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-500 dark:from-gray-800 dark:to-gray-900 flex flex-col justify-center items-center text-white p-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 rounded-lg text-black"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 rounded-lg text-black"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg mb-2">Message</label>
          <textarea
            id="message"
            className="w-full p-2 rounded-lg text-black"
            placeholder="Your message"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-white text-purple-500 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-lg md:rounded-l-lg md:rounded-r-none text-black mb-2 md:mb-0"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="bg-white text-purple-500 px-4 py-2 rounded-lg md:rounded-r-lg md:rounded-l-none font-semibold hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}