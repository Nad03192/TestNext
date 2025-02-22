"use client";
import { useState } from "react";
import Banner from "../components/bannerC";
import HeaderAll from "../ui/AllHeader";
import FooterAll from "../components/footerall.js";
import Services from "../components/services";
import Head from "../components/head";
import ServicesSection from "../components/services";
import ServicesComponent from "../components/services";
import ServicesAccordionSection from "../components/servicesaccordions";
export default function ServicesPage() {

  const items = [
    { title: "What is Next.js?", content: "Next.js is a React framework for building web applications with SSR, SSG, and API routes." },
    { title: "Why use Next.js?", content: "It offers better performance, SEO benefits, and fast development with automatic code splitting." },
    { title: "Is Next.js free?", content: "Yes, Next.js is open-source and free to use!" }
  ];
  const [bannerContent, setBannerContent] = useState({
    image: "/images/services.jpg",
    heading: "Our Services",
    text: "Providing cutting-edge solutions tailored to meet your business needs.",
  });
  

  return (
    <div>
       <Head activeSection="services" />
   
     <Banner
        image={bannerContent.image}
        heading={bannerContent.heading}
        text={bannerContent.text}
      />
    <ServicesComponent/>
    <ServicesAccordionSection />
    <FooterAll/>
    </div>
  );
}
