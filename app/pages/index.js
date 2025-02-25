"use client";
import { useState } from "react";
import Banner from "../components/bannerC";
import HeaderAll from "../ui/AllHeader";
import FooterAll from "../components/footerall.js";
import Head from "../components/head";
import ImageWithText from "../components/imagewithtext";
import Form from "../components/form";
import ServicesComponent from "../components/services";
import Link from "next/link";
export default function HomePage() {
  const servicesData = [
    {
      title: "Web Development",
      description: "Our web development services include custom website design, frontend and backend development, and ongoing maintenance.",
      iconColor: "text-blue-500",
      iconPath: "M3 3v18h18V3H3zm16 16H5V5h14v14zM8 8h8v2H8V8zm0 4h5v2H8v-2z",
      link: "/services/web-development",
    },
    {
      title: "SEO Optimization",
      description: "We offer keyword research, on-page SEO, link building, and performance tracking to enhance your online presence.",
      iconColor: "text-green-500",
      iconPath: "M12 2L2 7h20L12 2zm0 2.18L18.09 7H5.91L12 4.18zM4 9v9h16V9H4zm14 7H6v-5h12v5z",
      link: "/services/seo-optimization",
    },
    {
      title: "Digital Marketing",
      description: "Our digital marketing services include social media management, email marketing, and content creation to engage your audience.",
      iconColor: "text-red-500",
      iconPath: "M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v2H9V9zm0 4h4v2H9v-2z",
      link: "/services/digital-marketing",
    },
  ];
  
  const [bannerContent, setBannerContent] = useState({
    image: "/images/new.jpg",
    heading: "Welcome to Our Website",
    text: "We provide the best solutions for your business growth. Explore our services and get in touch!",
  });
  const [aboutContent, setAboutContent] = useState({
    imageSrc: "/images/aboutus2.jpg", 
    imageAlt: "About Us Image",
    title: "About Us",
    description: "Helping businesses thrive with next-gen digital solutions.We empower businesses to grow by providing innovative technologies and tailored strategies",
  });
  return (
    <div>
       <Head activeSection="home" />
      <Banner
        image={bannerContent.image}
        heading={bannerContent.heading}
        text={bannerContent.text}
         ctaText="Contact Us"
  ctaLink="/contactus"
      />
      <ImageWithText
            imageSrc={aboutContent.imageSrc}
            imageAlt={aboutContent.imageAlt}
            title={aboutContent.title}
            description={aboutContent.description}
            showCTA={true} 
            ctaText="Learn More"
            ctaLink="/aboutUs"
          />
            <ServicesComponent 
  services={servicesData} 
  ctaText="Discover More" 
  ctaLink="/services" 
/>
           
             <Form/>
    <FooterAll/>
    </div>
  );
}
