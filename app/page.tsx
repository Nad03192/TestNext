"use client";
import { useState } from "react";
import Image from "next/image";
import HomeSection from "./ui/Home";
import AboutSection from "./ui/About";
import ServicesSection from "./ui/Services";
import ContactSection from "./ui/contact";
import HeaderAll from "./ui/AllHeader";
import FooterAll from "./ui/footerall";
export default function Home() {

  return (
    <main>
      <HeaderAll/>
      <HomeSection/>
   <AboutSection/>
      <ServicesSection/>
      <ContactSection/>
      <FooterAll/>
    </main>
  );
}
