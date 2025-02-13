"use client";
import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
     
      <section id="about" className="h-screen flex items-center justify-center bg-green-100 dark:bg-gray-700">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">

          <div className="md:w-1/2">
            <Image src="/dev.jpg" alt="About Us" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>

          <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We are a team dedicated to delivering high-quality services to help businesses succeed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
