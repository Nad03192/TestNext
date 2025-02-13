"use client";
import { useState } from "react";
import Image from "next/image";

export default function Section() {
  return (
    <>
     
     <section id="services" className="h-screen flex items-center justify-center  dark:bg-gray-600">
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
    </>
  );
}
