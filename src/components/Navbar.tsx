/*
  SPARKLE PRO — Navbar
  Sticky nav with navy background, gold accent on active links, mobile hamburger
*/

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-lg shadow-black/20" : "bg-navy/95 backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
              <span className="text-navy font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>S</span>
            </div>
            <span
              className="text-white text-xl font-semibold tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Sparkle <span className="text-gold">Pro</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-gold text-sm font-semibold tracking-wider uppercase transition-colors duration-200 relative group"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:1234567890"
              className="flex items-center gap-2 text-white/80 hover:text-gold text-sm font-semibold transition-colors"
            >
              <Phone size={14} />
              (123) 456-7890
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="bg-gold text-navy text-sm font-bold px-5 py-2.5 rounded-sm hover:bg-gold-light transition-all duration-200 tracking-wider uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-gold text-sm font-semibold tracking-wider uppercase text-left transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
              <a href="tel:1234567890" className="flex items-center gap-2 text-white/80 text-sm">
                <Phone size={14} />
                (123) 456-7890
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="bg-gold text-navy text-sm font-bold px-5 py-2.5 rounded-sm tracking-wider uppercase w-full"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
