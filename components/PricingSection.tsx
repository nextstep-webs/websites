/*
  SPARKLE PRO — Pricing Section
  Elegant card format with gold accent on featured plan
*/

import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Basic Clean",
    tagline: "Perfect for regular maintenance cleaning",
    price: 99,
    features: [
      "Dusting all surfaces",
      "Vacuum & mop floors",
      "Kitchen cleaning",
      "Bathroom sanitization",
      "Trash removal",
      "Surface disinfection",
    ],
    featured: false,
    cta: "Select Plan",
  },
  {
    name: "Deep Clean",
    tagline: "Comprehensive cleaning for a thorough refresh",
    price: 199,
    features: [
      "Everything in Basic Clean",
      "Inside appliances",
      "Baseboards & doors",
      "Window sills & tracks",
      "Light fixtures",
      "Cabinet exteriors",
      "Behind furniture (movable)",
    ],
    featured: true,
    cta: "Select Plan",
  },
  {
    name: "Premium Package",
    tagline: "Ultimate cleaning experience with extra care",
    price: 299,
    features: [
      "Everything in Deep Clean",
      "Interior windows",
      "Refrigerator deep clean",
      "Oven deep clean",
      "Wall spot cleaning",
      "Organizing services",
      "Priority scheduling",
      "Dedicated team",
    ],
    featured: false,
    cta: "Select Plan",
  },
];

export default function PricingSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
              Pricing
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2
            className="text-navy text-4xl md:text-5xl font-semibold leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Choose the perfect cleaning package for your needs. All plans include our satisfaction guarantee.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-lg overflow-hidden fade-up transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "bg-navy shadow-2xl shadow-navy/30 ring-2 ring-gold"
                  : "bg-white border border-gray-100 shadow-lg hover:shadow-xl"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.featured && (
                <div className="bg-gold text-navy text-center text-xs font-bold py-2 tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3
                  className={`text-2xl font-semibold mb-1 ${plan.featured ? "text-white" : "text-navy"}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${plan.featured ? "text-white/60" : "text-gray-500"}`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {plan.tagline}
                </p>

                <div className="flex items-end gap-1 mb-8">
                  <span className={`text-lg font-semibold ${plan.featured ? "text-gold" : "text-navy"}`} style={{ fontFamily: "var(--font-body)" }}>$</span>
                  <span
                    className={`text-5xl font-bold leading-none ${plan.featured ? "text-white" : "text-navy"}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1 ${plan.featured ? "text-white/60" : "text-gray-500"}`} style={{ fontFamily: "var(--font-body)" }}>
                    / per visit
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${plan.featured ? "text-gold" : "text-navy"}`}
                      />
                      <span
                        className={`text-sm ${plan.featured ? "text-white/80" : "text-gray-700"}`}
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`group w-full flex items-center justify-center gap-2 py-3.5 rounded-sm font-bold text-sm tracking-wider uppercase transition-all duration-200 ${
                    plan.featured
                      ? "bg-gold text-navy hover:bg-gold-light"
                      : "bg-navy text-white hover:bg-navy-light"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {plan.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8 fade-up" style={{ fontFamily: "var(--font-body)" }}>
          All prices are estimates. Final quote based on space size and specific needs.{" "}
          <button onClick={scrollToContact} className="text-gold font-semibold hover:underline">
            Get accurate pricing
          </button>
        </p>
      </div>
    </section>
  );
}
