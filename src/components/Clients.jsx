import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Building2, MapPin, Sparkles, Handshake } from 'lucide-react';
import { trustedClients } from '../data/clients';

export default function Clients() {
  return (
    <section className="relative py-24 bg-brand-secondaryBlack border-y border-white/5 overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-subtle-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest font-display">
            <Handshake className="w-3.5 h-3.5" />
            <span>Proven Business Relationships</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-brand-warmWhite uppercase tracking-tight">
            BRANDS THAT TRUST MR K
          </h2>
          <p className="text-xs sm:text-sm text-brand-grey max-w-xl mx-auto leading-relaxed">
            Proudly partnering with 10+ established enterprises, retail outlets, clinics, and service providers across Tiruchirappalli and Tamil Nadu.
          </p>
        </div>

        {/* Client Logos & Badges Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {trustedClients.map((client, idx) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center border border-white/10 group min-h-[140px] transition-all duration-300"
            >
              {/* Top Mini Icon */}
              <div className="w-10 h-10 rounded-xl bg-brand-charcoal border border-white/5 flex items-center justify-center text-brand-yellow group-hover:border-brand-yellow/50 group-hover:scale-105 transition-all">
                <Building2 className="w-4 h-4" />
              </div>

              {/* Client Title */}
              <div className="py-2">
                <h3 className="font-display font-bold text-xs sm:text-sm text-brand-warmWhite group-hover:text-brand-yellow transition-colors leading-snug">
                  {client.name}
                </h3>
                <span className="text-[10px] text-brand-grey block mt-0.5">
                  {client.industry}
                </span>
              </div>

              {/* Region Tag */}
              <span className="text-[9px] uppercase tracking-wider font-medium text-brand-yellow/80 px-2 py-0.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20">
                {client.region}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Authenticity Note */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs text-brand-grey glass-panel px-4 py-2 rounded-full border border-white/5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Actual company relationships managed with utmost confidentiality & commercial integrity.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
