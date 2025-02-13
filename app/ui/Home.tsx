"use client";
import { useState } from "react";
import Image from "next/image";
export default function HomeSection() {
return(
      <section id="home" className="h-screen flex items-center justify-center bg-blue-100 dark:bg-gray-800"
            >
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
                <Image src="/about2.jpg" alt="Banner" width={500} height={300} className="rounded-lg shadow-lg" />
              </div>
            </div>
          </section>
)
}