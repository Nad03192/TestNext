"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 

export default function ImageWithText({ imageSrc, imageAlt, title, description, showCTA, ctaText, ctaLink }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-blue-100 dark:bg-gray-700 px-4 pt-20 pb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left p-4">
          <h1 className="text-5xl font-bold text-black mb-4">{title}</h1>
          <p className="text-lg text-black mb-8">{description}</p>
          {ctaText && ctaLink && (
          <Link href={ctaLink}>
            <div className="bg-blue-600 mx-auto w-44 text-white py-3 rounded-md hover:bg-blue-700 transition text-center">
              {ctaText}
            </div>
          </Link>
        )}
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image src={imageSrc} alt={imageAlt} width={500} height={300} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}
