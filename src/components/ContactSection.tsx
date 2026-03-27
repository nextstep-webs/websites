/*
  SPARKLE PRO — Contact Section
  Quote form + contact info side by side, navy/gold theme
*/

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Deep Cleaning",
  "Carpet & Upholstery",
  "Move In/Out Cleaning",
  "Post-Construction",
];

const propertyOptions = ["Apartment", "House", "Office", "Retail Space", "Other"];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    property: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.property) newErrors.property = "Please select a property type";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
              Contact
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2
            className="text-navy text-4xl md:text-5xl font-semibold leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get Your Free Quote
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Ready to experience the cleanest space you've ever had? Fill out the form and we'll get back to you with a custom quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 fade-up">
            {submitted ? (
              <div className="bg-sky-soft rounded-lg p-12 text-center">
                <CheckCircle2 size={48} className="text-gold mx-auto mb-4" />
                <h3
                  className="text-navy text-3xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Thank You!
                </h3>
                <p className="text-gray-600 text-base" style={{ fontFamily: "var(--font-body)" }}>
                  We've received your request and will get back to you within 1 hour during business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-sm font-bold mb-2 tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={`w-full px-4 py-3 border rounded-sm text-navy placeholder-gray-400 focus:outline-none focus:border-gold transition-colors text-sm ${
                        errors.name ? "border-red-400" : "border-gray-200"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-bold mb-2 tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 border rounded-sm text-navy placeholder-gray-400 focus:outline-none focus:border-gold transition-colors text-sm ${
                        errors.email ? "border-red-400" : "border-gray-200"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-navy text-sm font-bold mb-2 tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className={`w-full px-4 py-3 border rounded-sm text-navy placeholder-gray-400 focus:outline-none focus:border-gold transition-colors text-sm ${
                      errors.phone ? "border-red-400" : "border-gray-200"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.phone}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-sm font-bold mb-2 tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
                      Service Type *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-sm text-navy focus:outline-none focus:border-gold transition-colors text-sm bg-white ${
                        errors.service ? "border-red-400" : "border-gray-200"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.service}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-bold mb-2 tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
                      Property Type *
                    </label>
                    <select
                      name="property"
                      value={formData.property}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-sm text-navy focus:outline-none focus:border-gold transition-colors text-sm bg-white ${
                        errors.property ? "border-red-400" : "border-gray-200"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <option value="">Select property type</option>
                      {propertyOptions.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    {errors.property && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.property}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-navy text-sm font-bold mb-2 tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
                    Additional Details
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your space, any special requirements..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm text-navy placeholder-gray-400 focus:outline-none focus:border-gold transition-colors text-sm resize-none"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 bg-navy text-white font-bold py-4 rounded-sm hover:bg-navy-light transition-all duration-200 tracking-wider uppercase text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Get Free Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-gray-400 text-xs text-center" style={{ fontFamily: "var(--font-body)" }}>
                  We typically respond within 1 hour during business hours
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 fade-up" style={{ transitionDelay: "200ms" }}>
            <div className="bg-sky-soft rounded-lg p-8 mb-6">
              <h3
                className="text-navy text-2xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get In Touch
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-navy font-bold text-sm mb-1" style={{ fontFamily: "var(--font-body)" }}>Phone</div>
                    <a href="tel:1234567890" className="text-gray-600 text-sm hover:text-gold transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-navy font-bold text-sm mb-1" style={{ fontFamily: "var(--font-body)" }}>Email</div>
                    <a href="mailto:info@sparklepro.com" className="text-gray-600 text-sm hover:text-gold transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                      info@sparklepro.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-navy font-bold text-sm mb-1" style={{ fontFamily: "var(--font-body)" }}>Office</div>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      123 Clean Street, Suite 100<br />
                      Your City, ST 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-navy font-bold text-sm mb-1" style={{ fontFamily: "var(--font-body)" }}>Business Hours</div>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      Monday – Friday: 7am – 7pm<br />
                      Saturday: 8am – 5pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="bg-navy rounded-lg p-6 text-center">
              <p className="text-white font-semibold mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>
                Need Same-Day Service?
              </p>
              <p className="text-white/60 text-sm mb-4" style={{ fontFamily: "var(--font-body)" }}>
                We offer emergency and same-day cleaning services.
              </p>
              <a
                href="tel:1234567890"
                className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-6 py-3 rounded-sm hover:bg-gold-light transition-colors text-sm tracking-wide uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Phone size={14} />
                Call Now for Emergency Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
