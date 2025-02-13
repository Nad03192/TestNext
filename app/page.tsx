"use client";
import { useState } from "react";
import Image from "next/image";
import HomeSection from "./ui/Home";
import AboutSection from "./ui/About";
import ServicesSection from "./ui/Services";
import ContactSection from "./ui/contact";
export default function Home() {

  return (
    <main>
      <HomeSection/>
   <AboutSection/>
      <ServicesSection/>
      <ContactSection/>
    </main>
  );
}
