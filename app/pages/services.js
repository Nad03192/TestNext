"use client";
import { useState } from "react";
import Banner from "../components/bannerC";
import FooterAll from "../components/footerall.js";
import ServicesComponent from "../components/services";
import Head from "../components/head";
import ServicesAccordionSection from "../components/servicesaccordions";

export default function ServicesPage() {
  const bannerContent = {
    image: "/images/services.jpg",
    heading: "Our Services",
    text: "Providing cutting-edge solutions tailored to meet your business needs.",
  };

  const webDevelopmentServices = [
    {
      title: "Custom Website Design",
      description: "Tailored website designs to meet your unique business needs.",
      iconPath: "M3 3v18h18V3H3zm16 16H5V5h14v14zM8 8h8v2H8V8zm0 4h5v2H8v-2z",
      iconColor: "text-blue-500"
    },
    {
      title: "Frontend Development",
      description: "Build engaging and responsive user interfaces with modern web technologies.",
      iconPath: "M12 2L2 7h20L12 2zm0 2.18L18.09 7H5.91L12 4.18zM4 9v9h16V9H4zm14 7H6v-5h12v5z",
      iconColor: "text-blue-500"
    },
    {
      title: "Backend Development",
      description: "Robust server-side development for seamless data processing and management.",
      iconPath: "M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v2H9V9zm0 4h4v2H9v-2z",
      iconColor: "text-blue-500"
    },
  ];

  const seoOptimizationServices = [
    {
      title: "Keyword Research",
      description: "Discover the best keywords to target for your business growth.",
      iconPath: "M12 2L2 7h20L12 2zm0 2.18L18.09 7H5.91L12 4.18zM4 9v9h16V9H4zm14 7H6v-5h12v5z",
      iconColor: "text-green-500"
    },
    {
      title: "On-page SEO",
      description: "Optimize your website’s content and structure for better search engine ranking.",
      iconPath: "M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v2H9V9zm0 4h4v2H9v-2z",
      iconColor: "text-green-500"
    },
    {
      title: "Link Building",
      description: "Improve your site’s authority and rankings with high-quality backlinks.",
      iconPath: "M8 8h8v2H8V8zm0 4h5v2H8v-2z",
      iconColor: "text-green-500"
    },
  ];

  const digitalMarketingServices = [
    {
      title: "Social Media Management",
      description: "Engage your audience with effective social media strategies and campaigns.",
      iconPath: "M12 2L2 7h20L12 2zm0 2.18L18.09 7H5.91L12 4.18zM4 9v9h16V9H4zm14 7H6v-5h12v5z",
      iconColor: "text-red-500"
    },
    {
      title: "Email Marketing",
      description: "Reach your customers directly with personalized and targeted email campaigns.",
      iconPath: "M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v2H9V9zm0 4h4v2H9v-2z",
      iconColor: "text-red-500"
    },
    {
      title: "Content Creation",
      description: "Develop high-quality content to attract and retain your target audience.",
      iconPath: "M3 3v18h18V3H3zm16 16H5V5h14v14zM8 8h8v2H8V8zm0 4h5v2H8v-2z",
      iconColor: "text-red-500"
    },
  ];

  const servicesData = {
    webDevelopment: webDevelopmentServices,
    seoOptimization: seoOptimizationServices,
    digitalMarketing: digitalMarketingServices,
  };

  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const categories = [
    { label: "Web Development", value: "webDevelopment" },
    { label: "SEO Optimization", value: "seoOptimization" },
    { label: "Digital Marketing", value: "digitalMarketing" },
  ];

  return (
    <div>
      <Head activeSection="services" />
      <Banner
        image={bannerContent.image}
        heading={bannerContent.heading}
        text={bannerContent.text}
      />
      
      <ServicesComponent 
        services={servicesData} 
        showFilter={true} 
        categories={categories}
        selectedCategory={selectedService}
        onCategoryChange={handleServiceChange}
      />
      
      <ServicesAccordionSection />
      <FooterAll />
    </div>
  );
}
