"use client";
import { useState } from "react";
import Banner from "../components/bannerC";

export default function HomePage2() {
  const [bannerContent, setBannerContent] = useState({
    image: "/images/about2.jpg",
    heading: "About Us",
    text: "We are a company dedicated to providing cutting-edge digital solutions to help businesses grow.",
  });

  return (
    <div>
      <Banner
        image={bannerContent.image}
        heading={bannerContent.heading}
        text={bannerContent.text}
      />
    
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={() =>
          setBannerContent({
            image: "/images/dev.jpg",
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
