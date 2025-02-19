"use client";
import { useState } from "react";
import HeaderAll from "../ui/AllHeader";

import Banner from "../components/bannerC";
import Image from "next/image";
import devImage from "/images/dev.jpg";
export default function HomePage() {
  
  const [bannerContent, setBannerContent] = useState({
    image: devImage,
    heading: "About Us",
    text: "We are a company dedicated to providing cutting-edge digital solutions to help businesses grow.",
  });

  return (
    <div className="min-h-screen flex flex-col items-center">
      <HeaderAll />
     
      <Banner 
        image={bannerContent.image} 
        heading={bannerContent.heading} 
        text={bannerContent.text} 
      />
      
   
        
    </div>
  );
}
