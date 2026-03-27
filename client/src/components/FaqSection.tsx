/*
  SPARKLE PRO — FAQ Section
  Accordion-style questions with gold accent, light background
*/

import { useState } from "react";
import { ChevronDown, Phone, Mail } from "lucide-react";

const faqs = [
  {
    question: "What areas do you service?",
    answer: "We currently service the greater metropolitan area and surrounding suburbs within a 50-mile radius. Contact us to confirm service availability in your specific location.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer: "No! We bring all necessary eco-friendly cleaning supplies and professional-grade equipment. If you have specific product preferences, just let us know and we'll do our best to accommodate.",
  },
  {
    question: "Are your cleaners background checked?",
    answer: "Absolutely. All of our cleaning professionals undergo thorough background checks, reference verification, and comprehensive training before joining our team. Your safety and trust are our top priorities.",
  },
  {
    question: "How long does a typical cleaning take?",
    answer: "A standard cleaning for a 2-bedroom home typically takes 2–3 hours. Deep cleanings may take 4–6 hours depending on the size and condition of the space. We'll provide a time estimate when you book.",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer: "We stand behind our work with a 100% satisfaction guarantee. If you're not completely happy with any area we've cleaned, contact us within 24 hours and we'll return to re-clean that area at no additional charge.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "It's entirely up to you. Many clients provide us with a key or access code and go about their day. We're fully insured and bonded, so you can have complete peace of mind.",
  },
  {
    question: "How do I schedule a cleaning?",
    answer: "You can schedule online through our contact form, call us at (123) 456-7890, or email us at info@sparklepro.com. We typically respond within 1 hour during business hours.",
  },
  {
    question: "Do you offer recurring cleaning services?",
    answer: "Yes! We offer weekly, bi-weekly, and monthly recurring cleaning plans with discounted rates. Regular clients also get priority scheduling and a dedicated cleaning team.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-sky-soft">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left: Header */}
          <div className="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-sm font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
                FAQ
              </span>
            </div>
            <h2
              className="text-navy text-4xl md:text-5xl font-semibold leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
              Got questions? We've got answers. Find everything you need to know about our services.
            </p>

            {/* Contact CTA */}
            <div className="bg-navy rounded-lg p-6">
              <p className="text-white font-semibold mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem" }}>
                Still have questions?
              </p>
              <p className="text-white/60 text-sm mb-5" style={{ fontFamily: "var(--font-body)" }}>
                Our team is here to help! Reach out and we'll get back to you promptly.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:1234567890"
                  className="flex items-center gap-3 text-gold hover:text-gold-light text-sm font-semibold transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Phone size={16} />
                  Call (123) 456-7890
                </a>
                <a
                  href="mailto:info@sparklepro.com"
                  className="flex items-center gap-3 text-gold hover:text-gold-light text-sm font-semibold transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Mail size={16} />
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-gray-100 overflow-hidden fade-up"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-sky-soft/50 transition-colors"
                >
                  <span
                    className="text-navy font-semibold text-base pr-4"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gold/20 mb-4" />
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
