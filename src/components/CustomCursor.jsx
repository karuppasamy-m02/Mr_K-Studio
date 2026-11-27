'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with pointer fine
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
    } else {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    let animationFrameId;
    const updateTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    animationFrameId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle halo */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovering
            ? 'w-12 h-12 bg-brand-yellow/15 border border-brand-yellow/60 scale-125'
            : 'w-8 h-8 border border-brand-yellow/30'
        }`}
        style={{
          transform: `translate3d(${trailing.x - 16}px, ${trailing.y - 16}px, 0)`,
          willChange: 'transform'
        }}
      />
      {/* Central crisp dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-brand-yellow transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 ${
          isHovering ? 'w-2 h-2 scale-150' : 'w-1.5 h-1.5'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          willChange: 'transform'
        }}
      />
    </>
  );
}
