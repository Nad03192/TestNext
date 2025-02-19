"use client";
import Link from "next/link";
import Image from "next/image";

export default function FooterAll() {
  return (
    
      <footer className="bg-white shadow-md dark:bg-gray-900 pt-10 pb-10 mt-auto">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className="flex flex-col items-start gap-2">
              <Link href="/" className="flex items-center gap-5">
                <Image src="/logo.png" alt="Logo" width={25} height={25} />
                <span className="text-xl font-bold text-gray-800 dark:text-white">
                  NexaNova
                </span>
              </Link>
              <p className="text-gray-600 mt-2 pr-6 md:pr-12 text-left">
                Empowering your business with cutting-edge solutions for a brighter digital future.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                <li><a href="#about" className="hover:text-blue-400">About</a></li>
                <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.413c0-2.507 1.493-3.89 3.777-3.89 1.096 0 2.238.195 2.238.195v2.46h-1.26c-1.244 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.2c3.2 0 3.584.012 4.849.07 3.252.147 4.771 1.685 4.918 4.918.058 1.265.07 1.648.07 4.849s-.012 3.584-.07 4.849c-.147 3.252-1.685 4.771-4.918 4.918-1.265.058-1.648.07-4.849.07s-3.584-.012-4.849-.07c-3.252-.147-4.771-1.685-4.918-4.918C2.212 15.632 2.2 15.249 2.2 12s.012-3.584.07-4.849C2.417 3.9 3.955 2.362 7.188 2.215 8.453 2.157 8.837 2.2 12 2.2m0-2.2C8.691 0 8.3.012 7.05.07 2.686.245 0 2.931 0 7.293c-.058 1.25-.07 1.641-.07 4.857s.012 3.607.07 4.857c.245 4.362 2.931 7.048 7.293 7.293 1.25.058 1.641.07 4.857.07s3.607-.012 4.857-.07c4.362-.245 7.048-2.931 7.293-7.293.058-1.25.07-1.641.07-4.857s-.012-3.607-.07-4.857c-.245-4.362-2.931-7.048-7.293-7.293C15.632.012 15.249 0 12 0z"/>
                    <path d="M12 5.838A6.162 6.162 0 105.838 12 6.169 6.169 0 0012 5.838m0-2.2A8.362 8.362 0 113.638 12 8.371 8.371 0 0112 3.638zm5.5 1.82a1.5 1.5 0 11-1.5-1.5 1.503 1.503 0 011.5 1.5z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.06 20.49H3.56V9h3.5zm-1.75-13.09a2.02 2.02 0 110-4.04 2.02 2.02 0 010 4.04zM20.49 20.49h-3.5v-5.5c0-1.32-.47-2.23-1.65-2.23a1.79 1.79 0 00-1.68 1.2 2.23 2.23 0 00-.1.8v5.73h-3.5V9h3.35v1.56h.05a3.7 3.7 0 013.3-1.82c3.55 0 4.21 2.34 4.21 5.39z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>
  
  );
}
