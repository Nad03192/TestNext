"use client";
import { useState } from "react";
import Banner from "../components/bannerC";
import HeaderAll from "../ui/AllHeader";
import FooterAll from "../components/footerall.js";
import Services from "../components/services";
import Head from "../components/head";
import ServicesSection from "../components/services";
import ServicesComponent from "../components/services";
export default function ServicesPage() {


  return (
    <div>
       <Head activeSection="services" />
     <ServicesComponent/>
    
    <FooterAll/>
    </div>
  );
}
