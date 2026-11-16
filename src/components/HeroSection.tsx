import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Palette, Volume2, ShieldCheck, Heart, Smile, ChevronDown } from 'lucide-react';
import { LivingCanvas, LivingTheme } from './LivingCanvas';
import { AdaptiveScreenshotFrame } from './AdaptiveScreenshotFrame';
import { CartoonStickerCluster } from './CartoonStickerCluster';
import { soundEngine } from '../utils/audio';

interface HeroSectionProps {
  currentTheme: LivingTheme;
  onThemeSelect: (theme: LivingTheme) => void;
  onOpenSoundModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentTheme,
  onThemeSelect,
  onOpenSoundModal,
}) => {
  const [selectedDashboardVariant, setSelectedDashboardVariant] = useState<'light' | 'dark' | 'cosmic' | 'mascot'>('light');
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const springConfig = { damping: 28, stiffness: 140, mass: 0.6 };
  const leftY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -40]), springConfig);
  const rightY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 30]), springConfig);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const promptOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const promptY = useTransform(scrollYProgress, [0, 0.2], [0, 15]);

  const dashboardImages = {
    light: './assets/screenshots/dashboard-light.jpeg',
    dark: './assets/screenshots/dashboard-dark.jpeg',
    cosmic: './assets/screenshots/dashboard-cosmic.jpeg',
    mascot: './assets/screenshots/splash-mascot.jpeg',
  };

  const themePills: { id: LivingTheme; label: string }[] = [
    { id: 'CW', label: 'Clean White' },
    { id: 'FW', label: 'Ferris Wheel' },
    { id: 'MS', label: 'Midnight Sage' },
    { id: 'CD', label: 'Cosmic Dusk' },
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen pt-32 pb-24 px-4 sm:px-8 flex flex-col justify-center overflow-hidden bg-pop-cream">
      {/* Living Canvas Interactive Pastel Background */}
      <div className="absolute inset-0 -z-20 pointer-events-auto">
        <LivingCanvas theme={currentTheme} />
      </div>

      <motion.div style={{ opacity: heroOpacity }} className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Vision, Headline, Tagline, CTAs with subtle scroll parallax */}
        <motion.div
          style={{ y: leftY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-start text-left"
        >
          {/* Playful Pill Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-pop-lime text-pop-forest border border-pop-forest/20 shadow-cartoon-sm mb-6">
            <span className="text-base">🌸</span>
            <span>Mindful Presence & Daily Balance</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-6xl xl:text-7xl font-sans font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6">
            The Art of Presence.{' '}
            <span className="font-serif italic font-normal text-pop-forest underline decoration-pop-lime decoration-wavy decoration-2">
              The Science of Calm.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm xs:text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl mb-8">
            A luxury digital wellness ecosystem engineered with 60 FPS liquid canvas shaders,
            bio-responsive breathwork, telehealth therapy, companion pets, and digital wellbeing interventions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#today"
              data-cursor="pointer"
              onClick={() => soundEngine.playBreatheBell()}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-slate-950 text-white font-bold text-sm tracking-wide shadow-cartoon hover:bg-slate-800 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2.5 text-center"
            >
              <span>Explore Dashboard</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                onOpenSoundModal();
                soundEngine.playKalimba(3);
              }}
              data-cursor="pointer"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-slate-900 font-bold text-sm tracking-wide border-2 border-slate-900/15 shadow-cartoon-sm hover:border-pop-forest hover:bg-pop-lime/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-center"
            >
              <Volume2 className="w-4 h-4 text-pop-coral flex-shrink-0" />
              <span>Listen to Soundscapes</span>
            </button>
          </div>

          {/* Living Canvas Theme Quick Switcher */}
          <div className="p-4 rounded-3xl bg-white/90 border-2 border-slate-900/10 shadow-cartoon-sm max-w-lg w-full">
            <div className="text-xs uppercase tracking-widest text-slate-600 font-bold mb-2.5 flex items-center gap-2">
              <Palette className="w-3.5 h-3.5 text-pop-forest" />
              <span>Switch Living Canvas Theme</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {themePills.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    onThemeSelect(t.id);
                    soundEngine.playStepClick();
                  }}
                  data-cursor="pointer"
                  aria-label={`Select canvas theme: ${t.label}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                    currentTheme === t.id
                      ? 'bg-pop-lime text-pop-forest border-2 border-pop-forest shadow-cartoon-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Cartoon Sticker Cluster + Clean White Mockup with subtle scroll parallax */}
        <motion.div
          style={{ y: rightY }}
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-center justify-center relative"
        >
          {/* Tilted Cartoon Sticker Cluster */}
          <CartoonStickerCluster />

          {/* Theme Variant Tabs for Mockup */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-4 p-1.5 rounded-full bg-white border-2 border-slate-900/10 shadow-cartoon-sm z-20">
            <button
              onClick={() => {
                setSelectedDashboardVariant('light');
                soundEngine.playScrubTick();
              }}
              data-cursor="pointer"
              aria-label="Switch mockup to Clean White theme"
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                selectedDashboardVariant === 'light'
                  ? 'bg-pop-lime text-pop-forest border border-pop-forest shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Clean White (CW)
            </button>
            <button
              onClick={() => {
                setSelectedDashboardVariant('dark');
                soundEngine.playScrubTick();
              }}
              data-cursor="pointer"
              aria-label="Switch mockup to Ferris Wheel theme"
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                selectedDashboardVariant === 'dark'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Ferris Wheel
            </button>
            <button
              onClick={() => {
                setSelectedDashboardVariant('cosmic');
                soundEngine.playScrubTick();
              }}
              data-cursor="pointer"
              aria-label="Switch mockup to Cosmic Dusk theme"
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all ${
                selectedDashboardVariant === 'cosmic'
                  ? 'bg-pop-lime text-pop-forest border border-pop-forest shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Cosmic Dusk
            </button>
            <button
              onClick={() => {
                setSelectedDashboardVariant('mascot');
                soundEngine.playCatPurr();
              }}
              data-cursor="pointer"
              aria-label="Switch mockup to Splash Mascot"
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all flex items-center gap-1 ${
                selectedDashboardVariant === 'mascot'
                  ? 'bg-pop-lavender text-slate-900 border border-slate-900/20 shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <span>🐱</span>
              <span>Mascot</span>
            </button>
          </div>

          {/* Adaptive Phone Mockup in Light Porcelain Frame */}
          <AdaptiveScreenshotFrame
            src={dashboardImages[selectedDashboardVariant]}
            alt={`instilll ${selectedDashboardVariant === 'mascot' ? 'Mascot Splash' : 'Dashboard'}`}
            orientation="vertical"
            tiltDirection="left"
            glowColor={selectedDashboardVariant === 'mascot' ? 'rgba(203, 180, 245, 0.6)' : 'rgba(210, 245, 108, 0.5)'}
            badge={
              selectedDashboardVariant === 'mascot'
                ? 'inSTILLL • Welcome Splash'
                : selectedDashboardVariant === 'cosmic'
                ? 'Cosmic Dusk • 60 FPS'
                : selectedDashboardVariant === 'dark'
                ? 'Ferris Wheel • Fluid'
                : 'DashboardScreen.kt'
            }
            hotspots={
              selectedDashboardVariant === 'mascot'
                ? [
                    {
                      x: 50,
                      y: 45,
                      label: 'Cuddling Cats Mascot',
                      detail: 'The yin-yang feline companions embodying unconditional warmth, tranquility, and presence.',
                    },
                    {
                      x: 50,
                      y: 59,
                      label: 'inSTILLL Identity',
                      detail: 'Mindful presence & daily balance ecosystem crafted for genuine neurological peace.',
                    },
                  ]
                : [
                    {
                      x: 48,
                      y: 22,
                      label: 'Daily Reflection',
                      detail: 'Dynamic daily wisdom quote with favorite heart and instant re-roll interactions.',
                    },
                    {
                      x: 48,
                      y: 43,
                      label: '5-State Mood Bar',
                      detail: 'Tactile mood check-in with spring physics and gentle haptic acoustic feedback.',
                    },
                    {
                      x: 48,
                      y: 63,
                      label: 'Glass Bubble Breathwork',
                      detail: 'Instant quick-launch for guided breath sessions with animated progress badge.',
                    },
                  ]
            }
          />
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Cue Pill */}
      <motion.div
        style={{ opacity: promptOpacity, y: promptY }}
        className="relative z-20 flex justify-center mt-12 pointer-events-auto"
      >
        <a
          href="#today"
          data-cursor="pointer"
          onClick={() => soundEngine.playScrubTick()}
          aria-label="Scroll to explore features"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200/90 shadow-sm text-xs font-bold text-slate-600 hover:text-pop-forest hover:border-pop-forest/40 transition-all backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-pop-forest animate-ping" />
          <span>Scroll to explore</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-pop-forest transition-transform group-hover:translate-y-0.5" />
        </a>
      </motion.div>
    </section>
  );
};
