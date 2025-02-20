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
      const slides = [
        { image: "/images/coding.jpg", text: "Business Growth" },
        { image: "/images/laptop.png", text: "Secure & Reliable"  },
        { image: "/images/programmer.jpg", text: "New Features" },
      ];
  return (
    <div>
       <Head activeSection="about" />
      <ImageWithText
        imageSrc={aboutContent.imageSrc}
        imageAlt={aboutContent.imageAlt}
        title={aboutContent.title}
        description={aboutContent.description}
      />
     <SwiperComponent slides={slides} />;

    <FooterAll/>
    </div>
  );
}
