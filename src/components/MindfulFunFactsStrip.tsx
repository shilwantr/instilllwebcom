import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight, BookOpen, Volume2 } from 'lucide-react';
import { WELLNESS_FACTS, WellnessFact } from '../data/wellnessFacts';
import { soundEngine } from '../utils/audio';

interface MindfulFunFactsStripProps {
  className?: string;
  variant?: 'compact' | 'expanded';
}

export const MindfulFunFactsStrip: React.FC<MindfulFunFactsStripProps> = ({
  className = '',
  variant = 'compact',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentFact: WellnessFact = WELLNESS_FACTS[currentIndex];

  const handlePrev = () => {
    try {
      soundEngine.playScrubTick();
    } catch {
      // Audio might not be unlocked yet; fail silently
    }
    setCurrentIndex((prev) => (prev === 0 ? WELLNESS_FACTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    try {
      soundEngine.playScrubTick();
    } catch {
      // Audio might not be unlocked yet; fail silently
    }
    setCurrentIndex((prev) => (prev === WELLNESS_FACTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`relative rounded-3xl p-5 sm:p-7 bg-white/85 backdrop-blur-xl border-2 border-slate-900/10 shadow-cartoon transition-all duration-300 ${className}`}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-pop-lime flex items-center justify-center text-pop-forest shadow-cartoon-sm flex-shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-pop-forest">
              Did You Know? • Mindful Science
            </div>
            <div className="text-xs font-semibold text-slate-500">
              Biometric &amp; Nervous System Fun Facts
            </div>
          </div>
        </div>

        {/* Counter and Arrows */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-slate-500 mr-1 select-none">
            {currentIndex + 1} / {WELLNESS_FACTS.length}
          </span>
          <button
            onClick={handlePrev}
            data-cursor="pointer"
            aria-label="Previous mindful science fact"
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            data-cursor="pointer"
            aria-label="Next mindful science fact"
            className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Animated Fact Content */}
      <div className="relative min-h-[96px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFact.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-base select-none">💡</span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                {currentFact.title}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {currentFact.fact}
            </p>
            {currentFact.sourceOrContext && (
              <div className="pt-1 flex items-center gap-1.5 text-[11px] font-mono text-slate-600">
                <BookOpen className="w-3 h-3 text-pop-forest" />
                <span>Source: {currentFact.sourceOrContext}</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-4 pt-3 border-t border-slate-100">
        {WELLNESS_FACTS.map((fact, idx) => (
          <button
            key={fact.id}
            onClick={() => {
              try {
                soundEngine.playScrubTick();
              } catch {}
              setCurrentIndex(idx);
            }}
            data-cursor="pointer"
            aria-label={`Jump to fact ${idx + 1}: ${fact.title}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'w-6 bg-slate-900'
                : 'w-1.5 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
