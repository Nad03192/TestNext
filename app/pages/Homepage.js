"use client";
import { useState } from "react";
import HeaderAll from "../ui/AllHeader";
import Banner from "../components/Banner";

export default function HomePage() {
  const [bannerContent, setBannerContent] = useState({
    image: "/new.jpg", // Ensure the correct image path
    heading: "About Us",
    text: "We are a company dedicated to providing cutting-edge digital solutions to help businesses grow.",
  });

  return (
    <div className="min-h-screen flex flex-col items-center">
      <HeaderAll />
      <Banner 
        image={bannerContent.image} // Now passing image correctly
        heading={bannerContent.heading} 
        text={bannerContent.text} 
      />
      
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={() =>
          setBannerContent({
            image: "/new.jpg", // Keep image or change dynamically
            heading: "Our Mission",
            text: "Empowering businesses with top-tier digital solutions for growth.",
          })
        }
      >
        Update Banner Content
      </button>
    </div>
  );
}
