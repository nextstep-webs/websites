/*
  SPARKLE PRO — Testimonials Section
  Magazine-style quote layout with navy background
*/

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Absolutely amazing service! My house has never looked this clean. The team is professional, punctual, and pays attention to every detail. Highly recommend!",
    name: "Sarah Johnson",
    role: "Homeowner",
    avatar: "SJ",
    rating: 5,
  },
  {
    quote: "We've been using their commercial cleaning services for over a year. Our office always looks pristine, and they work efficiently around our schedule.",
    name: "Michael Chen",
    role: "Business Owner",
    avatar: "MC",
    rating: 5,
  },
  {
    quote: "Perfect for move-out cleanings! They handle multiple properties for us and consistently deliver exceptional results. Very reliable and thorough.",
    name: "Emily Rodriguez",
    role: "Property Manager",
    avatar: "ER",
    rating: 5,
  },
  {
    quote: "The deep cleaning service exceeded my expectations. They tackled areas I didn't even think about. Great value for the quality of work provided.",
    name: "David Thompson",
    role: "Homeowner",
    avatar: "DT",
    rating: 5,
  },
];

const summaryStats = [
  { value: "4.9/5", label: "Average Rating" },
  { value: "1000+", label: "Happy Clients" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "15K+", label: "Cleanings Done" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-navy overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
              Testimonials
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2
            className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-white/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-navy-light border border-white/10 rounded-lg p-8 fade-up hover:border-gold/30 transition-colors duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote size={28} className="text-gold mb-4 opacity-60" />
              <p
                className="text-white/80 text-base leading-relaxed mb-6 italic"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-navy font-bold text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      {t.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      {t.name}
                    </div>
                    <div className="text-white/50 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {summaryStats.map((stat, i) => (
              <div key={i} className="fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div
                  className="text-gold text-3xl md:text-4xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm font-semibold tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
