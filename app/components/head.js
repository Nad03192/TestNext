"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md dark:bg-gray-900 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-5">
          <Image src="/logo.png" alt="Logo" width={25} height={25} />
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            NexaNova
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link 
            href="/home" 
            className={`text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${activeSection === 'home' ? 'text-blue-600 font-bold' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/aboutUs" 
            className={`text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${activeSection === 'about' ? 'text-blue-600 font-bold' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${activeSection === 'services' ? 'text-blue-600 font-bold' : ''}`}
          >
            Services
          </Link>
          <Link 
            href="/contactus" 
            className={`text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${activeSection === 'contact' ? 'text-blue-600 font-bold' : ''}`}
          >
            Contact
          </Link>
        </nav>

        
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl w-full text-gray-800 dark:text-white">&times;</span> 
          ) : (
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className="block h-0.5 bg-gray-800 dark:bg-white"></span>
              <span className="block h-0.5 bg-gray-800 dark:bg-white"></span>
              <span className="block h-0.5 bg-gray-800 dark:bg-white"></span>
            </div>
          )}
        </button>
      </div>

      <nav className={`md:hidden bg-gray-100 dark:bg-gray-800 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link 
            href="/home" 
            className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${activeSection === 'home' ? 'text-blue-600 font-bold' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/aboutUs" 
            className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${activeSection === 'about' ? 'text-blue-600 font-bold' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${activeSection === 'services' ? 'text-blue-600 font-bold' : ''}`}
          >
            Services
          </Link>
          <Link 
            href="/contactus" 
            className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${activeSection === 'contact' ? 'text-blue-600 font-bold' : ''}`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
