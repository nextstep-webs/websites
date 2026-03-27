/*
  SPARKLE PRO — Services Section
  Asymmetric card grid with hover effects, gold accent on featured cards
*/

import { Home, Building2, Sparkles, Sofa, MoveRight, HardHat, ArrowRight } from "lucide-react";

const RESIDENTIAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485395811/LJ2oYt3suxSZGJq92XTH3s/residential-cleaning-iFAa7K4nh28TNz8dCy4oDm.webp";
const COMMERCIAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485395811/LJ2oYt3suxSZGJq92XTH3s/commercial-cleaning-edx3aFWazgxnTD2NavvNcG.webp";
const DEEP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485395811/LJ2oYt3suxSZGJq92XTH3s/deep-cleaning-HGj8L5NKkwjT3vwjA9ZGaL.webp";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Keep your home spotless with our comprehensive residential cleaning services. From regular maintenance to deep cleaning.",
    features: ["Living areas", "Kitchens & bathrooms", "Bedrooms", "Windows & surfaces"],
    image: RESIDENTIAL_IMG,
    featured: false,
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional cleaning solutions for offices, retail spaces, and commercial properties. Maintain a pristine business environment.",
    features: ["Office spaces", "Retail stores", "Common areas", "Restroom facilities"],
    image: COMMERCIAL_IMG,
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive cleaning service that reaches every corner. Perfect for move-ins, move-outs, or seasonal refreshes.",
    features: ["Detailed scrubbing", "Hard-to-reach areas", "Appliance cleaning", "Full sanitization"],
    image: DEEP_IMG,
    featured: false,
  },
  {
    icon: Sofa,
    title: "Carpet & Upholstery",
    description: "Specialized cleaning for carpets, rugs, and furniture. Remove stains, odors, and allergens effectively.",
    features: ["Steam cleaning", "Stain removal", "Odor elimination", "Fabric protection"],
    image: null,
    featured: false,
  },
  {
    icon: MoveRight,
    title: "Move In/Out Cleaning",
    description: "Complete cleaning for properties in transition. Ensure a fresh start or leave a great impression.",
    features: ["Full property clean", "Appliance deep clean", "Wall & baseboard", "Final inspection"],
    image: null,
    featured: false,
  },
  {
    icon: HardHat,
    title: "Post-Construction",
    description: "Remove dust, debris, and construction residue. Get your newly built or renovated space move-in ready.",
    features: ["Dust removal", "Surface polishing", "Debris cleanup", "Window cleaning"],
    image: null,
    featured: false,
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16 fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
              Our Services
            </span>
          </div>
          <h2
            className="text-navy text-4xl md:text-5xl font-semibold leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Professional Cleaning Solutions Tailored to Your Needs
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            From residential homes to commercial spaces, we've got you covered with expert cleaning services.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-lg overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl fade-up ${
                  service.featured
                    ? "border-gold shadow-lg shadow-gold/10"
                    : "border-gray-100 hover:border-gold/30"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {service.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                    Popular
                  </div>
                )}

                {/* Image or Color Block */}
                {service.image ? (
                  <div className="h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-20 bg-sky-soft flex items-center justify-center">
                    <Icon size={32} className="text-navy/30" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center ${service.featured ? "bg-gold" : "bg-sky-soft"}`}>
                      <Icon size={16} className={service.featured ? "text-navy" : "text-navy"} />
                    </div>
                    <h3
                      className="text-navy text-xl font-semibold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700" style={{ fontFamily: "var(--font-body)" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToContact}
                    className={`group/btn flex items-center gap-2 text-sm font-bold tracking-wide transition-colors ${
                      service.featured ? "text-gold" : "text-navy hover:text-gold"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Book This Service
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom quote CTA */}
        <div className="mt-12 text-center fade-up">
          <p className="text-gray-600 mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Need a custom cleaning solution?
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 border-2 border-navy text-navy font-bold px-8 py-3 rounded-sm hover:bg-navy hover:text-white transition-all duration-200 tracking-wide uppercase text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Request Custom Quote
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
