
import Image from "next/image";

export default function Home() {
  return (
    <main>
     

      {/* Home Section (Hero Banner) */}
      <section id="home" className="h-screen flex items-center justify-center bg-blue-100 dark:bg-gray-800"
       style={{backgroundImage: "url('/banner.jpg')" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">Welcome to Our Website</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We provide the best solutions for your business growth. Explore our services and get in touch!
            </p>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Contact Us
            </a>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <Image src="/baner.jpg" alt="Banner" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex items-center justify-center bg-green-100 dark:bg-gray-700">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          {/* Image */}
          <div className="md:w-1/2">
            <Image src="/about.jpg" alt="About Us" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We are a team dedicated to delivering high-quality services to help businesses succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="h-screen flex items-center justify-center bg-yellow-100 dark:bg-gray-600">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300">We build modern, responsive websites tailored to your needs.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">SEO Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">Improve your website’s visibility with our expert SEO strategies.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Digital Marketing</h3>
              <p className="text-gray-600 dark:text-gray-300">Grow your brand with targeted marketing campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center justify-center bg-red-100 dark:bg-gray-500">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Contact Us</h2>
          <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
