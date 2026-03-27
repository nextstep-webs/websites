/*
  SPARKLE PRO — Home Page
  Design: Luxe Coastal Elegance
  Palette: Deep Navy + Crisp White + Warm Gold
  Font: Cormorant Garamond (headings) + Nunito Sans (body)
*/

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <WhyChooseSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
