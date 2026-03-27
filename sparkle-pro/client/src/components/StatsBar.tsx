/*
  SPARKLE PRO — Stats Bar
  Navy background with gold accents, animated counters
*/

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1000, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "K+", label: "Cleanings Completed" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 24, suffix: "/7", label: "Customer Support" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-navy py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/70 text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-body)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
