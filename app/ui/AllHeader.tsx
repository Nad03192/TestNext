"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function HeaderAll() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md dark:bg-gray-900 fixed w-full top-0 left-0 z-50">
    <div className="container mx-auto flex items-center justify-between p-4">
      
      <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={10} height={10} className="h-5 w-5" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            NexaNova
          </span>
      </Link>

      <nav className="hidden md:flex space-x-6">
        <Link href="#home" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
          Home
        </Link>
        <Link href="#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
          About
        </Link>
        <Link href="#services" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
          Services
        </Link>
        <Link href="#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <div className="w-6 h-6 flex flex-col justify-between">
          <span className={`block h-0.5 bg-gray-800 dark:bg-white transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block h-0.5 bg-gray-800 dark:bg-white transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block h-0.5 bg-gray-800 dark:bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </div>
      </button>
    </div>

    {/* Mobile Navbar */}
    <nav className={`md:hidden bg-gray-100 dark:bg-gray-800 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
      <div className="flex flex-col items-center space-y-4 py-4">
        <Link href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
          Home
        </Link>
        <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
          About
        </Link>
        <Link href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
          Services
        </Link>
        <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
          Contact
        </Link>
      </div>
    </nav>
  </header>
  );
}
