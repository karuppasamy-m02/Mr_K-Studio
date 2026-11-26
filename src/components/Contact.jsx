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
import { 
  WHATSAPP_NUMBER, 
  DISPLAY_PHONE, 
  BUSINESS_LOCATION, 
  formatEnquiryMessage, 
  buildWhatsAppUrl 
} from '../utils/whatsapp';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    whatsapp: '',
    email: '',
    location: '',
    service: 'Brand Identity & Personal Branding',
    budget: '₹10,000 - ₹25,000',
    projectDetails: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const servicesList = [
    'Brand Identity & Personal Branding',
    'Social Media Management (Monthly Retainer)',
    'Video Production & Creative Media (Reels)',
    'Website Development',
    'Digital Marketing & Paid Ads (Meta/Google)',
    'Local SEO & Business Growth (Trichy)',
    'AI & Business Automation',
    'Comprehensive 360° Growth Retainer'
  ];

  const budgetTiers = [
    'Under ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000+ (Custom Scope)'
  ];

  const validate = () => {
    const errs = {};
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Prepare formatted enquiry message
    const formattedMessage = formatEnquiryMessage(formData);
    const whatsappUrl = buildWhatsAppUrl(formattedMessage);
    setLastWhatsAppUrl(whatsappUrl);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD943', '#FFFFFF', '#F5F2E9']
      });
    } catch {
      // Confetti fallback
    }

    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.businessName || 'New Client'} — MR K`);
    const body = encodeURIComponent(formatEnquiryMessage(formData));
    return `mailto:hello@mrkagency.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 bg-brand-deepBlack border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-yellow/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customer Acquisition System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brand-warmWhite uppercase tracking-tight">
            START YOUR PROJECT WITH MR K
          </h2>
          <p className="text-base text-brand-grey max-w-2xl mx-auto leading-relaxed">
            Fill out your project details below to instantly generate a structured WhatsApp briefing. We review and respond within hours.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Business Information & Contact Hub */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6 shadow-xl">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-brand-yellow font-bold font-display block mb-1">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-display font-black text-brand-warmWhite">
                  Let's Discuss Growth
                </h3>
                <p className="text-xs text-brand-grey mt-2 leading-relaxed">
                  Whether you are launching a new enterprise in Tiruchirappalli or scaling an established brand across Tamil Nadu, we are ready to accelerate your trajectory.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-brand-charcoal border border-white/5 hover:border-brand-yellow/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-grey font-semibold block">
                      Direct WhatsApp
                    </span>
                    <span className="text-sm font-display font-bold text-brand-warmWhite group-hover:text-brand-yellow transition-colors">
                      {DISPLAY_PHONE}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-charcoal border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 border border-brand-yellow/40 flex items-center justify-center text-brand-yellow">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-grey font-semibold block">
                      Agency Base
                    </span>
                    <span className="text-xs font-semibold text-brand-warmWhite">
                      {BUSINESS_LOCATION}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-charcoal border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-brand-yellow">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-grey font-semibold block">
                      Response Expectation
                    </span>
                    <span className="text-xs font-semibold text-brand-warmWhite">
                      Typically within 2 to 4 business hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reassurance Notice */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-brand-yellow text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Spam Guarantee</span>
              </div>
              <p className="text-xs text-brand-grey leading-relaxed">
                Your contact details are treated with utmost privacy. We do not store your data on external databases or share it with third-party marketing entities.
              </p>
            </div>

          </div>

          {/* Right Column: Project Enquiry System */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-brand-yellow/30 shadow-2xl relative">
              
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
                      Enquiry Prepared Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-grey max-w-md mx-auto leading-relaxed">
                      Your inquiry has been formatted and WhatsApp has been triggered. If your browser blocked the popup, click the button below to send your message directly.
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
                      <span>Open WhatsApp Now</span>
                    </a>

                    <a
                      href={generateMailto()}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-brand-charcoal text-brand-warmWhite hover:text-brand-yellow font-display font-semibold text-xs uppercase tracking-wider border border-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Via Email Instead</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-brand-grey hover:text-brand-yellow underline pt-2 block mx-auto"
                  >
                    ← Edit or Submit Another Project Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        Business / Company Name <span className="text-brand-yellow">*</span>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* WhatsApp Phone */}
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

                    {/* Email (Optional) */}
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Location */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider text-brand-warmWhite font-semibold font-display">
                        Business Location <span className="text-brand-yellow">*</span>
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

                    {/* Estimated Budget */}
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
                      Required Service
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

                  {/* Project Description */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-brand-warmWhite font-semibold font-display">
                      Project Goals & Details <span className="text-brand-yellow">*</span>
                    </label>
                    <textarea
                      name="projectDetails"
                      rows={3}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Tell us about your brand vision, target timeline, or what you want to improve..."
                      className={`w-full px-4 py-3 rounded-xl bg-brand-secondaryBlack border text-sm text-brand-warmWhite placeholder:text-neutral-600 focus:outline-none focus:border-brand-yellow transition-colors ${
                        errors.projectDetails ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.projectDetails && <p className="text-[11px] text-red-400">{errors.projectDetails}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-full bg-brand-yellow text-brand-deepBlack font-display font-extrabold text-sm uppercase tracking-wider hover:bg-brand-yellowHover active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(255,217,67,0.4)] flex items-center justify-center gap-2 group"
                  >
                    <span>Submit & Open WhatsApp Enquiry</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-brand-grey text-center pt-1">
                    Frontend Customer Acquisition • Opens official WhatsApp message to +91 8270374293
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
