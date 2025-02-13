"use client";
import { useState } from "react";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-blue-100 dark:bg-gray-800 relative"
      style={{
        backgroundImage: 'url(new.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto flex flex-col justify-end items-center md:items-start p-4 h-full">
        <div className="text-center md:text-left mb-10"> 
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to Our Website</h1>
          <p className="text-lg text-white mb-6">
            We provide the best solutions for your business growth. Explore our services and get in touch!
          </p>
          <button 
  onClick={() => window.location.href = "#contact"} 
  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
>
  Contact Us
</button>

        </div>
      </div>
    </section>
  );
}
