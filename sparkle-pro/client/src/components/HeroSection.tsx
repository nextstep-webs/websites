/*
  SPARKLE PRO — Hero Section
  Full-bleed hero with large serif headline overlaid on lifestyle photo
  Dark overlay for text contrast, gold CTA button
*/

import { ArrowRight, Star, CheckCircle2 } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485395811/LJ2oYt3suxSZGJq92XTH3s/hero-cleaning-8yrZTgefijNVFvemisYNcR.webp";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Dark overlay — image is light, so use a dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-white text-sm font-semibold">Rated 4.9/5 by 1000+ Happy Clients</span>
          </div>

          {/* Headline */}
          <h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Professional Cleaning
            <br />
            <em className="text-gold not-italic">Services</em> You Can
            <br />
            Trust
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "var(--font-body)" }}>
            Experience the difference with our eco-friendly, thorough cleaning solutions for your home or business.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-4 mb-10">
            {["Eco-friendly products", "Trained professionals", "100% satisfaction guarantee"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/90 text-sm">
                <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                <span style={{ fontFamily: "var(--font-body)" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="group flex items-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-sm hover:bg-gold-light transition-all duration-200 text-base tracking-wide uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/20 transition-all duration-200 text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View Services
            </button>
          </div>

          {/* No credit card note */}
          <p className="text-white/50 text-sm mt-4" style={{ fontFamily: "var(--font-body)" }}>
            No credit card required · Free quote in 60 seconds
          </p>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
