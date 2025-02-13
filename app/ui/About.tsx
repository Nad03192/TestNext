"use client";
import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
     
      <section id="about" className="h-screen flex items-center justify-center  bg-blue-400 dark:bg-gray-700 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 gap-6">
        
          
          <div className="container mx-auto flex flex-col md:flex-row items-center px-6 ">
          <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-lg text-white">
              We are a team dedicated to delivering high-quality services to help businesses succeed.
            </p>
          
          </div>
          </div>
          <div className="md:w-1/2">
            <Image src="/dev.jpg" alt="About Us" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </>
  );
}
