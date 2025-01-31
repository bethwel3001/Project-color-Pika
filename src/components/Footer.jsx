export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-500 to-red-500 dark:from-gray-800 dark:to-gray-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          {/* <h3 className="text-2xl font-bold">Color Pika!</h3> */}
          <h3 className="text-2xl font-bold">Color Pika!</h3>
          <p>© 2023 Next-Space. All rights reserved.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Links</h4>
          <ul>
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#plans" className="hover:text-gray-300">Plans</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Contact</h4>
          <p>Email: support@colorpika.com</p>
        </div>
      </div>
    </footer>
  );
}