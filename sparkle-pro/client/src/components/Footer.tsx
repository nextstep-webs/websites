/*
  SPARKLE PRO — Footer
  Dark navy footer with gold logo, links, contact info
*/

import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Our Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Deep Cleaning",
  "Carpet & Upholstery",
  "Move In/Out Cleaning",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                <span className="text-navy font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>S</span>
              </div>
              <span
                className="text-white text-xl font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Sparkle <span className="text-gold">Pro</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Professional cleaning services you can trust. Making your spaces shine since 2015.
            </p>
            {/* Social icons placeholder */}
            <div className="flex gap-3">
              {["f", "in", "tw"].map((s) => (
                <div key={s} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors cursor-pointer">
                  <span className="text-white/60 text-xs font-bold">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5" style={{ fontFamily: "var(--font-body)" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 hover:text-gold text-sm transition-colors text-left"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5" style={{ fontFamily: "var(--font-body)" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-white/50 hover:text-gold text-sm transition-colors text-left"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5" style={{ fontFamily: "var(--font-body)" }}>
              Contact Info
            </h4>
            <div className="space-y-4">
              <a href="tel:1234567890" className="flex items-center gap-3 text-white/50 hover:text-gold text-sm transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                <Phone size={14} className="text-gold flex-shrink-0" />
                (123) 456-7890
              </a>
              <a href="mailto:info@sparklepro.com" className="flex items-center gap-3 text-white/50 hover:text-gold text-sm transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                <Mail size={14} className="text-gold flex-shrink-0" />
                info@sparklepro.com
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" />
                <span>123 Clean Street, Suite 100<br />Your City, ST 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            © 2026 Sparkle Pro Cleaning. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <button
                key={item}
                className="text-white/30 hover:text-gold text-sm transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
