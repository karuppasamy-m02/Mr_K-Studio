import React from 'react';
import { Sparkles } from 'lucide-react';

interface AiDirectAnswerProps {
  question: string;
  answer: string;
  category?: string;
}

export default function AiDirectAnswer({ question, answer, category = "QUICK ANSWER / AI SUMMARY" }: AiDirectAnswerProps) {
  return (
    <aside
      aria-label={`Direct Answer: ${question}`}
      className="my-8 p-5 sm:p-6 bg-[#0E0E0E] border-l-4 border-brand-yellow border-y border-r border-white/[0.08] rounded-r-2xl text-left shadow-lg"
    >
      <div className="flex items-center gap-2 mb-2 text-[10px] font-mono uppercase tracking-[0.2em] text-brand-yellow font-bold">
        <Sparkles className="w-3.5 h-3.5" />
        <span>{category}</span>
      </div>
      <h3 className="font-display font-bold text-sm sm:text-base text-brand-warmWhite mb-2">
        {question}
      </h3>
      <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">
        {answer}
      </p>
    </aside>
  );
}
