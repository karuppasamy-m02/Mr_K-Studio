'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone, 
  Sparkles, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '@/data/config';
import { formatEnquiryMessage, buildWhatsAppUrl } from '@/utils/whatsapp';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    whatsapp: '',
    email: '',
    location: '',
    service: 'Personal Branding & Growth',
    budget: '₹10,000 - ₹25,000',
    projectDetails: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const servicesList = [
    'Personal Branding & Executive Growth',
    'Full-Stack Website Development (Next.js)',
    'Social Media Management & Instagram Growth',
    'Cinematic Video Production (Reels & Ads)',
    'Local SEO & Google Business Profile Ranking',
    'Logo & Brand Identity System Design',
    'Paid Performance Advertising (Meta/Google Ads)',
    '360° Comprehensive Growth Retainer'
  ];

  const budgetTiers = [
    'Under ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000+ (Custom Scope)'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name.';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business or company name.';
    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'Please provide a valid WhatsApp contact number.';
    } else if (formData.whatsapp.trim().length < 8) {
      errs.whatsapp = 'Phone number looks too short.';
    }
    if (!formData.location.trim()) errs.location = 'Please state your city / location (e.g. Trichy, TN).';
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please share a brief note about what you are looking to achieve.';
    }
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formattedMessage = formatEnquiryMessage(formData);
    const whatsappUrl = buildWhatsAppUrl(formattedMessage);
    setLastWhatsAppUrl(whatsappUrl);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD943', '#FFFFFF', '#F5F2E9']
      });
    } catch {
      // fallback
    }

    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.businessName || 'New Client'} — MR K`);
    const body = encodeURIComponent(formatEnquiryMessage(formData));
    return `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 bg-brand-deepBlack border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-yellow/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customer Acquisition System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brand-warmWhite uppercase tracking-tight">
            START YOUR PROJECT WITH MR K
          </h2>
          <p className="text-base text-brand-grey max-w-2xl mx-auto leading-relaxed">
            Fill out your project details below to instantly generate a structured WhatsApp briefing for Karuppasamy M (Mr K). We review and respond within hours.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Business Information & Embedded Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0E0E0E] border border-white/10 rounded-3xl p-7 space-y-5 shadow-xl text-left">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-brand-yellow font-bold font-mono block mb-1">
                  DIRECT CONSULTATION
                </span>
                <h3 className="text-2xl font-display font-black text-brand-warmWhite">
                  Let's Discuss Growth
                </h3>
                <p className="text-xs text-brand-grey mt-1.5 leading-relaxed">
                  Headquartered in Tiruchirappalli (Trichy), partnering with visionary business leaders across Tamil Nadu and India.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3 pt-1">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-brand-charcoal border border-white/5 hover:border-brand-yellow/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-grey font-semibold block">
                      Direct WhatsApp
                    </span>
                    <span className="text-sm font-display font-bold text-brand-warmWhite group-hover:text-brand-yellow transition-colors">
                      {siteConfig.contact.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-brand-charcoal border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-brand-yellow/15 border border-brand-yellow/40 flex items-center justify-center text-brand-yellow">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-grey font-semibold block">
                      Headquarters
                    </span>
                    <span className="text-xs font-semibold text-brand-warmWhite">
                      {siteConfig.contact.address.streetAddress}, {siteConfig.contact.address.addressLocality}, TN - {siteConfig.contact.address.postalCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-brand-charcoal border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-brand-yellow">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-grey font-semibold block">
                      Turnaround Time
                    </span>
                    <span className="text-xs font-semibold text-brand-warmWhite">
                      Response typically within 2 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Embedded Interactive Google Map for Trichy */}
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-grey block mb-2">
                  Trichy Headquarters Map Location
                </span>
                <div className="w-full h-44 rounded-xl overflow-hidden border border-white/10 relative">
                  <iframe
                    title="MR K Agency Headquarters Tiruchirappalli Map"
                    src="https://maps.google.com/maps?q=Tiruchirappalli%2C%20Tamil%20Nadu%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(1.2)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Zero Spam Guarantee */}
            <div className="bg-[#0E0E0E] p-5 rounded-2xl border border-white/10 space-y-1.5 text-left">
              <div className="flex items-center gap-2 text-brand-yellow text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidentiality & Privacy</span>
              </div>
              <p className="text-xs text-brand-grey leading-relaxed">
                Direct founder conversation. Your details are strictly confidential and will never be shared or spammed.
              </p>
            </div>

          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0E0E0E] rounded-3xl p-7 sm:p-10 border border-brand-yellow/30 shadow-2xl relative text-left">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-yellow/20 border-2 border-brand-yellow mx-auto flex items-center justify-center text-brand-yellow">
                    <CheckCircle className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-black text-brand-warmWhite uppercase">
                      Briefing Ready for WhatsApp!
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-grey max-w-md mx-auto leading-relaxed">
                      Your project inquiry has been formatted. Click below to deliver your brief directly to Karuppasamy M (Mr K).
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#25D366] text-white font-display font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp Chat</span>
                    </a>

                    <a
                      href={generateMailto()}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-brand-charcoal text-brand-warmWhite hover:text-brand-yellow font-display font-semibold text-xs uppercase tracking-wider border border-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Via Email</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-brand-grey hover:text-brand-yellow underline pt-2 block mx-auto"
                  >
                    ← Edit or Submit Another Briefing
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider text-brand-warmWhite font-semibold font-display">
                        Your Name <span className="text-brand-yellow">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Anand Kumar"
                        className={`w-full px-4 py-3 rounded-xl bg-brand-secondaryBlack border text-sm text-brand-warmWhite placeholder:text-neutral-600 focus:outline-none focus:border-brand-yellow transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-400">{errors.fullName}</p>}
                    </div>

                    {/* Business Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider text-brand-warmWhite font-semibold font-display">
                        Business / Brand Name <span className="text-brand-yellow">*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Traders"
                        className={`w-full px-4 py-3 rounded-xl bg-brand-secondaryBlack border text-sm text-brand-warmWhite placeholder:text-neutral-600 focus:outline-none focus:border-brand-yellow transition-colors ${
                          errors.businessName ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.businessName && <p className="text-[11px] text-red-400">{errors.businessName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider text-brand-warmWhite font-semibold font-display">
                        WhatsApp Number <span className="text-brand-yellow">*</span>
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-brand-secondaryBlack border text-sm text-brand-warmWhite placeholder:text-neutral-600 focus:outline-none focus:border-brand-yellow transition-colors ${
                          errors.whatsapp ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.whatsapp && <p className="text-[11px] text-red-400">{errors.whatsapp}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider text-brand-warmWhite font-semibold font-display">
                        Email Address <span className="text-brand-grey text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@business.com"
                        className="w-full px-4 py-3 rounded-xl bg-brand-secondaryBlack border border-white/10 text-sm text-brand-warmWhite placeholder:text-neutral-600 focus:outline-none focus:border-brand-yellow transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Location */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider text-brand-warmWhite font-semibold font-display">
                        Location / City <span className="text-brand-yellow">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Thillai Nagar, Trichy"
                        className={`w-full px-4 py-3 rounded-xl bg-brand-secondaryBlack border text-sm text-brand-warmWhite placeholder:text-neutral-600 focus:outline-none focus:border-brand-yellow transition-colors ${
                          errors.location ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.location && <p className="text-[11px] text-red-400">{errors.location}</p>}
                    </div>

                    {/* Budget */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider text-brand-warmWhite font-semibold font-display">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-secondaryBlack border border-white/10 text-sm text-brand-warmWhite focus:outline-none focus:border-brand-yellow transition-colors"
                      >
                        {budgetTiers.map((b) => (
                          <option key={b} value={b} className="bg-brand-deepBlack text-brand-warmWhite">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Required Service Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-brand-warmWhite font-semibold font-display">
                      Primary Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-brand-secondaryBlack border border-white/10 text-sm text-brand-warmWhite focus:outline-none focus:border-brand-yellow transition-colors"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc} className="bg-brand-deepBlack text-brand-warmWhite">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-brand-warmWhite font-semibold font-display">
                      Project Goals & Vision <span className="text-brand-yellow">*</span>
                    </label>
                    <textarea
                      name="projectDetails"
                      rows={3}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Tell us about your brand challenges, current website, or growth goals..."
                      className={`w-full px-4 py-3 rounded-xl bg-brand-secondaryBlack border text-sm text-brand-warmWhite placeholder:text-neutral-600 focus:outline-none focus:border-brand-yellow transition-colors ${
                        errors.projectDetails ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.projectDetails && <p className="text-[11px] text-red-400">{errors.projectDetails}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-none bg-brand-yellow text-brand-deepBlack font-display font-extrabold text-xs uppercase tracking-[0.16em] hover:bg-[#F2CA2C] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(255,217,67,0.4)] flex items-center justify-center gap-2 group"
                  >
                    <span>Submit & Open WhatsApp Briefing</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-brand-grey text-center pt-1">
                    Direct founder consultation · Response guaranteed within 2 hours
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
