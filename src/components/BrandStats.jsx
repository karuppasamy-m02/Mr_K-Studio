'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Award, Zap, Compass } from 'lucide-react';

function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutQuad)
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function BrandStats() {
  const stats = [
    {
      id: 1,
      icon: Building2,
      numeric: 10,
      suffix: "+",
      label: "Companies Served",
      subtext: "Real business clients across Tamil Nadu & beyond",
      highlight: "Verified Partnerships"
    },
    {
      id: 2,
      icon: Award,
      numeric: 100,
      suffix: "%",
      label: "Focus on Quality",
      subtext: "Zero compromise on aesthetics, strategy & code",
      highlight: "Uncompromising Standards"
    },
    {
      id: 3,
      icon: Zap,
      numeric: 360,
      suffix: "°",
      label: "Digital Solutions",
      subtext: "Brand identity, web, video, ads & automation",
      highlight: "Full-Spectrum Growth"
    },
    {
      id: 4,
      icon: Compass,
      customDisplay: "Trichy Based",
      suffix: "",
      label: "Worldwide Vision",
      subtext: "Rooted in Tiruchirappalli with global capabilities",
      highlight: "Local Soul, Global Craft"
    }
  ];

  return (
    <section id="stats" className="relative py-20 bg-brand-secondaryBlack border-y border-white/5 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-xs uppercase tracking-widest text-brand-yellow font-bold font-display">
            Business Credibility & Reality
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-warmWhite uppercase">
            Grounded in Real Work. Driven by Results.
          </h2>
          <p className="text-sm text-brand-grey">
            Authentic business facts reflecting genuine client relationships and deliberate growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between border border-white/10 group overflow-hidden"
              >
                {/* Top Corner Glow Indicator */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/5 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:bg-brand-yellow/10" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-brand-charcoal text-brand-yellow border border-brand-yellow/20 group-hover:border-brand-yellow/50 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/5 text-brand-grey group-hover:text-brand-yellow transition-colors">
                      {stat.highlight}
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-display font-black text-brand-warmWhite tracking-tight mb-2 group-hover:text-brand-yellow transition-colors">
                    {stat.customDisplay ? (
                      stat.customDisplay
                    ) : (
                      <Counter end={stat.numeric} suffix={stat.suffix} />
                    )}
                  </div>

                  <h3 className="text-base font-display font-bold text-brand-warmWhite mb-1">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-xs text-brand-grey leading-relaxed mt-3 pt-3 border-t border-white/5">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
