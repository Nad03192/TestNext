"use client";
import { useState } from "react";
import Banner from "../components/bannerC";
import HeaderAll from "../ui/AllHeader";
import FooterAll from "../components/footerall.js";
import Head from "../components/head";
export default function HomePage() {
  const [bannerContent, setBannerContent] = useState({
    image: "/images/new.jpg",
    heading: "Welcome to Our Website",
    text: "We provide the best solutions for your business growth. Explore our services and get in touch!",
  });

  return (
    <div>
       <Head activeSection="home" />
      <Banner
        image={bannerContent.image}
        heading={bannerContent.heading}
        text={bannerContent.text}
      />
    
    <FooterAll/>
    </div>
  );
}
