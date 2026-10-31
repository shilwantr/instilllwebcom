import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    soundEngine.playScrubTick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 15 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          data-cursor="pointer"
          aria-label="Back to top of page"
          title="Back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 text-slate-800 border-2 border-slate-900/15 shadow-cartoon-sm hover:border-pop-forest hover:bg-pop-lime hover:text-pop-forest backdrop-blur-lg flex items-center justify-center transition-colors"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
