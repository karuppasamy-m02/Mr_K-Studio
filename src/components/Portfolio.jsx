import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ExternalLink, X, CheckCircle, Tag, Layers } from 'lucide-react';
import { portfolioProjects, portfolioCategories } from '../data/portfolio';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  const handleDiscussSimilar = (project) => {
    const text = `Hello MR K! I saw your work on *${project.title}* (${project.industry}) and would like to discuss a similar project for my business.`;
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="work" className="relative py-28 bg-brand-deepBlack border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest font-display">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brand-warmWhite uppercase tracking-tight">
            SELECTED CLIENT WORK
          </h2>
          <p className="text-base text-brand-grey max-w-2xl mx-auto leading-relaxed">
            Real execution across branding systems, digital marketing campaigns, video reels, and responsive web applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-display uppercase tracking-wider font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-yellow text-brand-deepBlack shadow-[0_0_15px_rgba(255,217,67,0.35)] scale-105'
                    : 'glass-panel text-brand-grey hover:text-brand-warmWhite hover:border-brand-yellow/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between border border-white/10 overflow-hidden"
              >
                {/* Visual Editorial Backdrop Badge */}
                <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-brand-secondaryBlack via-brand-charcoal to-brand-secondaryBlack border border-white/10 p-5 flex flex-col justify-between relative overflow-hidden mb-6">
                  {/* Subtle Geometric Graphic */}
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full border border-brand-yellow/20 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
                  <div className="absolute right-4 bottom-4 w-16 h-16 rounded-full bg-brand-yellow/10 blur-xl pointer-events-none" />

                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-display uppercase font-bold tracking-wider bg-brand-deepBlack/80 text-brand-yellow border border-brand-yellow/30">
                      {project.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-brand-grey flex items-center gap-1 font-medium">
                      <CheckCircle className="w-3 h-3 text-brand-yellow" /> Verified Work
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="text-[11px] uppercase tracking-wider text-brand-grey block">
                      {project.industry}
                    </span>
                    <p className="text-sm font-display font-bold text-brand-warmWhite group-hover:text-brand-yellow transition-colors line-clamp-1">
                      {project.client}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-display font-bold text-brand-warmWhite mb-2.5 group-hover:text-brand-yellow transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-brand-grey leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Verified Results Highlight */}
                  {project.results && (
                    <div className="p-3 rounded-xl bg-brand-charcoal/80 border border-brand-yellow/20 mb-5">
                      <span className="text-[10px] uppercase tracking-wider text-brand-yellow font-bold block mb-0.5">
                        Outcome & Impact
                      </span>
                      <p className="text-xs text-brand-warmWhite font-medium">
                        {project.results}
                      </p>
                    </div>
                  )}

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-brand-grey"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs text-brand-warmWhite hover:text-brand-yellow font-display font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Case Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleDiscussSimilar(project)}
                    className="p-2 rounded-full bg-brand-charcoal text-brand-yellow hover:bg-brand-yellow hover:text-brand-deepBlack transition-colors"
                    title="Discuss similar project"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Project Preview */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-2xl w-full glass-panel rounded-3xl p-6 sm:p-8 border border-brand-yellow/40 bg-brand-secondaryBlack shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-brand-charcoal text-brand-grey hover:text-brand-warmWhite hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full text-xs font-display uppercase font-bold tracking-wider bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/30">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-display font-extrabold text-brand-warmWhite pt-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-brand-yellow font-medium">
                    Client: {selectedProject.client} • {selectedProject.industry}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-brand-deepBlack border border-white/10 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-brand-grey font-bold">
                    Project Architecture & Strategy
                  </h4>
                  <p className="text-sm text-brand-warmWhite leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-brand-charcoal border border-white/5 space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-brand-yellow font-semibold">
                      Verified Result
                    </span>
                    <p className="text-xs text-brand-warmWhite font-medium">
                      {selectedProject.results}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-brand-charcoal border border-white/5 space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-brand-grey font-semibold">
                      Execution Stack
                    </span>
                    <p className="text-xs text-brand-warmWhite font-medium">
                      {selectedProject.technologies.join(', ')}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-brand-grey">
                    Want similar high-impact results for your company?
                  </p>
                  <button
                    onClick={() => {
                      handleDiscussSimilar(selectedProject);
                      setSelectedProject(null);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-yellow text-brand-deepBlack font-display font-bold text-xs uppercase tracking-wider hover:bg-brand-yellowHover transition-all flex items-center justify-center gap-2"
                  >
                    <span>Discuss Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
