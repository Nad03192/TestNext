"use client";
import { useState } from "react";

export default function Services() {
  return (
    <>
      <section id="services" className="pt-20 pb-40 flex items-center justify-center dark:bg-gray-600 px-4">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-20">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-[0_-8px_16px_rgba(0,0,0,0.2)] flex flex-col items-center relative">
              <svg className="w-12 h-12 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM8 8h8v2H8V8zm0 4h5v2H8v-2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-8">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300">We build modern, responsive websites tailored to your needs.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-[0_-8px_16px_rgba(0,0,0,0.2)] flex flex-col items-center relative">
              <svg className="w-12 h-12 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7h20L12 2zm0 2.18L18.09 7H5.91L12 4.18zM4 9v9h16V9H4zm14 7H6v-5h12v5z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-8">SEO Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">Improve your website’s visibility with our expert SEO strategies.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-[0_-8px_16px_rgba(0,0,0,0.2)] flex flex-col items-center relative">
              <svg className="w-12 h-12 text-red-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v2H9V9zm0 4h4v2H9v-2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-8">Digital Marketing</h3>
              <p className="text-gray-600 dark:text-gray-300">Grow your brand with targeted marketing campaigns.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
