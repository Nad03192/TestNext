"use client";
import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="flex flex-col md:flex-row items-center justify-center bg-blue-100 dark:bg-gray-700 px-4 pt-20 pb-40"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left p-4">
          <h1 className="text-5xl font-bold text-black mb-4">About Us</h1>
          <p className="text-lg text-black mb-8">
            We are a team dedicated to delivering high-quality services to help businesses succeed.
          </p>
          <button 
            onClick={() => window.location.href = "#services"} 
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition mb-7"
          >
            Discover our services
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image src="/dev.jpg" alt="About Us" width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}