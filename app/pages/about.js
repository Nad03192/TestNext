"use client";
import { useState } from "react";
import Banner from "../components/bannerC";
import HeaderAll from "../ui/AllHeader";
import FooterAll from "../components/footerall.js";
import ImageWithText from "../components/imagewithtext";
import Head from "../components/head";
import Swip from "../components/swiper"
import SwiperComponent from "../components/swiper";
export default function AboutPage() {
    const [aboutContent, setAboutContent] = useState({
        imageSrc: "/images/dev.jpg", 
        imageAlt: "About Us Image",
        title: "About Us",
        description: "We are a company dedicated to providing cutting-edge digital solutions to help businesses grow.",
      });
      const [bannerContent, setBannerContent] = useState({
        image: "/images/bn2.jpg",
        heading: "About Us",
        text: "We specialize in delivering scalable, secure, and innovative software solutions.",
      });
      
      const slides = [
        { image: "/images/coding.jpg", title: "Scalability", text: "Build systems that grow with your business" },
        { image: "/images/laptop.png", title: "Security", text: "Enterprise-grade security & data protection" },
        { image: "/images/programmer.jpg", title: "Innovation", text: "Cutting-edge solutions & modern technologies" },
        { image: "/images/code2.jpg", title: "Performance", text: "Optimized code for high-speed applications" },
        { image: "/images/on.jpg", title: "Cloud Integration", text: "Seamless deployment & cloud-native solutions" },
        { image: "/images/nd.jpg", title: "Automation", text: "Boost efficiency with AI & DevOps tools" },
      ];
      
      
  return (
    <div>
       <Head activeSection="about" />
       <Banner
        image={bannerContent.image}
        heading={bannerContent.heading}
        text={bannerContent.text}
      />
     <SwiperComponent slides={slides} />;
     <ImageWithText
        imageSrc={aboutContent.imageSrc}
        imageAlt={aboutContent.imageAlt}
        title={aboutContent.title}
        description={aboutContent.description}
      />
    <FooterAll/>
    </div>
  );
}
