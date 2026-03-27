/*
  SPARKLE PRO — Why Choose Us Section
  Navy background with team photo, feature grid with gold icons
*/

import { Shield, Leaf, Clock, Award, Users, Star } from "lucide-react";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485395811/LJ2oYt3suxSZGJq92XTH3s/team-cleaning-9BAVnCRroWHPh3U9fiUmFY.webp";

const features = [
  {
    icon: Shield,
    title: "Fully Insured & Bonded",
    description: "Complete peace of mind with comprehensive insurance coverage and background-checked staff.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Safe, green cleaning solutions that protect your family, pets, and the environment.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book services at your convenience — daily, weekly, monthly, or one-time cleaning options.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Not satisfied? We'll re-clean the area for free. Your satisfaction is our priority.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Experienced team members with ongoing training in the latest cleaning techniques.",
  },
  {
    icon: Star,
    title: "Trusted by 1000+ Clients",
    description: "Join our growing family of satisfied customers who trust us with their spaces.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 md:py-28 bg-sky-soft overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative fade-up order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={TEAM_IMG}
                alt="Sparkle Pro professional cleaning team"
                className="w-full h-[480px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-navy rounded-lg p-6 shadow-xl">
              <div className="text-gold text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>10+</div>
              <div className="text-white/80 text-sm font-semibold tracking-wide" style={{ fontFamily: "var(--font-body)" }}>Years of Excellence</div>
            </div>
            {/* Gold accent line */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold rounded-lg opacity-40" />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold text-sm font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
                  Why Choose Us
                </span>
              </div>
              <h2
                className="text-navy text-4xl md:text-5xl font-semibold leading-tight mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We're More Than Just a Cleaning Service
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10" style={{ fontFamily: "var(--font-body)" }}>
                We're your partner in maintaining a healthy, beautiful space. Every service is delivered with care, precision, and a commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="fade-up group"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                        <Icon size={16} className="text-gold group-hover:text-navy transition-colors duration-300" />
                      </div>
                      <div>
                        <h3
                          className="text-navy font-semibold text-base mb-1"
                          style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
