"use client";
import { useState } from "react";
import Banner from "../components/bannerC";
import HeaderAll from "../ui/AllHeader";
import FooterAll from "../components/footerall.js";
import Head from "../components/head";
import ImageWithText from "../components/imagewithtext";
import Form from "../components/form";
import ServicesComponent from "../components/services";
export default function HomePage() {
  const [bannerContent, setBannerContent] = useState({
    image: "/images/new.jpg",
    heading: "Welcome to Our Website",
    text: "We provide the best solutions for your business growth. Explore our services and get in touch!",
  });
  const [aboutContent, setAboutContent] = useState({
    imageSrc: "/images/aboutus2.jpg", 
    imageAlt: "About Us Image",
    title: "About Us",
    description: "Helping businesses thrive with next-gen digital solutions.",
  });
  return (
    <div>
       <Head activeSection="home" />
      <Banner
        image={bannerContent.image}
        heading={bannerContent.heading}
        text={bannerContent.text}
      />
      <ImageWithText
            imageSrc={aboutContent.imageSrc}
            imageAlt={aboutContent.imageAlt}
            title={aboutContent.title}
            description={aboutContent.description}
          />
            <ServicesComponent/>
             <Form/>
    <FooterAll/>
    </div>
  );
}
