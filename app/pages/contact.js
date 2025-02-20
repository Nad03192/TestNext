"use client";
import { useState } from "react";
import Banner from "../components/bannerC";
import HeaderAll from "../ui/AllHeader";
import FooterAll from "../components/footerall.js";
import ContactSection from "../ui/contact";
import Head from "../components/head";
import Form from "../components/form";
export default function ContactPage() {


  return (
    <div>
       <Head activeSection="contact" />
     <Form/>
    
    <FooterAll/>
    </div>
  );
}
