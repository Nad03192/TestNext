"use client";
import { useState } from "react";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section 
      id="home"
      className="h-[100vh] max-h-[1000px] flex items-center justify-center bg-blue-100 dark:bg-gray-800 relative"
      style={{
        backgroundImage: 'url(new.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 px-6">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-white mb-6 max-w-[600px] mx-auto">
          We provide the best solutions for your business growth. Explore our services and get in touch!
        </p>
        <button
          onClick={() => window.location.href = "#contact"}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
