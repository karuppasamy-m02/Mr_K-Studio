'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2.5px] bg-transparent z-[60] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-amber-400 via-brand-yellow to-yellow-200 transition-all duration-100 ease-out shadow-[0_0_8px_rgba(255,217,67,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
