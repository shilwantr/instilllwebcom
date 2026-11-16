import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Heart, RefreshCw, Droplet, Flame, Footprints, Clock, ArrowRight, UserCheck } from 'lucide-react';
import { AdaptiveScreenshotFrame } from './AdaptiveScreenshotFrame';
import { soundEngine } from '../utils/audio';

const quotesList = [
  {
    quote: 'Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.',
    author: 'Hermann Hesse',
  },
  {
    quote: 'The present moment is filled with joy and happiness. If you are attentive, you will see it.',
    author: 'Thich Nhat Hanh',
  },
  {
    quote: 'Quiet the mind, and the soul will speak. In stillness, we find clarity.',
    author: 'Jaya Ram',
  },
  {
    quote: 'Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.',
    author: 'Thich Nhat Hanh',
  },
];

export const TodayDashboardSection: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string>('Okay');
  const [waterMl, setWaterMl] = useState(750);
  const [dashboardTheme, setDashboardTheme] = useState<'light' | 'dark'>('light');
  const [history, setHistory] = useState<number[]>([750]);
  const [steps, setSteps] = useState(4820);
  const [scrubberDay, setScrubberDay] = useState(4);

  const moodData = [
    { day: 'Mon', mood: 78, label: 'Calm & Productive' },
    { day: 'Tue', mood: 65, label: 'Reflective' },
    { day: 'Wed', mood: 84, label: 'Energized' },
    { day: 'Thu', mood: 70, label: 'Centered' },
    { day: 'Fri', mood: 92, label: 'Joyful Balance' },
    { day: 'Sat', mood: 88, label: 'Restful Calm' },
    { day: 'Sun', mood: 95, label: 'Deep Stillness' },
  ];

  const handleNextQuote = () => {
    soundEngine.playScrubTick();
    setQuoteIndex((prev) => (prev + 1) % quotesList.length);
  };

  const addWater = (amount: number) => {
    soundEngine.playWaterPour();
    setHistory((prev) => [...prev, waterMl]);
    setWaterMl((prev) => Math.min(2500, prev + amount));
  };

  const undoWater = () => {
    if (history.length > 0) {
      soundEngine.playStepClick();
      const last = history[history.length - 1];
      setWaterMl(last);
      setHistory((prev) => prev.slice(0, -1));
    }
  };

  const moods = [
    { id: 'Happy', emoji: '😊', symbol: '~', bg: 'bg-pop-yellow text-slate-900 border-amber-400' },
    { id: 'Okay', emoji: '😌', symbol: '•', bg: 'bg-pop-lime text-pop-forest border-pop-forest' },
    { id: 'Low', emoji: '🌧️', symbol: '⌢', bg: 'bg-pop-periwinkle text-slate-900 border-blue-400' },
    { id: 'Anxious', emoji: '⚡', symbol: '~', bg: 'bg-pop-coral text-white border-rose-400' },
    { id: 'Tired', emoji: '😴', symbol: '≈', bg: 'bg-pop-lavender text-purple-950 border-purple-400' },
  ];

  const caloriesBurned = (0.04 * steps).toFixed(0);
  const distanceKm = (0.000762 * steps).toFixed(2);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const springConfig = { damping: 26, stiffness: 120, mass: 0.5 };
  const aura1Y = useSpring(useTransform(scrollYProgress, [0, 1], [-50, 50]), springConfig);
  const aura2Y = useSpring(useTransform(scrollYProgress, [0, 1], [50, -50]), springConfig);
  const rightColY = useSpring(useTransform(scrollYProgress, [0, 1], [25, -25]), springConfig);

  return (
    <section ref={sectionRef} id="today" className="py-24 px-4 sm:px-8 relative bg-white text-slate-900 overflow-hidden border-t border-b border-slate-100">
      {/* Light background auras with subtle scroll parallax */}
      <motion.div style={{ y: aura1Y }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-pop-lime/20 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: aura2Y }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pop-periwinkle/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header with subtle scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-pop-lime text-pop-forest border border-pop-forest/20 shadow-cartoon-sm mb-4">
            <span>✨ Section 03</span>
            <span>•</span>
            <span>DashboardScreen.kt</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight mb-4 text-slate-900">
            Today: The Daily Balance Hub
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Every morning begins with mindful presence. Track your emotional climate, log pure hydration,
            and monitor sensory telemetry seamlessly in real time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Cards & Micro-Interactions */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 1. Daily Reflection Card */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-7 relative overflow-hidden border-2 border-slate-900/10 shadow-cartoon-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-pop-forest font-bold font-mono flex items-center gap-1.5">
                  <span className="text-lg">”</span> Daily Reflection
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsFavorited(!isFavorited);
                      soundEngine.playKalimba(1);
                    }}
                    data-cursor="pointer"
                    aria-label={isFavorited ? 'Remove quote from favorites' : 'Add quote to favorites'}
                    className="p-2 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-700 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                    title="Favorite Quote"
                  >
                    <Heart className={`w-4 h-4 ${isFavorited ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>
                  <button
                    onClick={handleNextQuote}
                    data-cursor="pointer"
                    aria-label="Generate new daily reflection quote"
                    className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                    title="Re-roll Quote"
                  >
                    <RefreshCw className="w-4 h-4 hover:rotate-180 transition-transform duration-500" />
                  </button>
                </div>
              </div>

              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg sm:text-xl font-serif italic text-slate-800 leading-relaxed mb-3"
              >
                &ldquo;{quotesList[quoteIndex].quote}&rdquo;
              </motion.p>
              <div className="text-xs text-pop-forest font-bold font-mono tracking-wider">
                — {quotesList[quoteIndex].author}
              </div>
            </motion.div>

            {/* 2. 5-State Mood Check-In Bar */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="bg-white rounded-3xl p-4 sm:p-6 border-2 border-slate-900/10 shadow-cartoon-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  How are you feeling right now?
                </span>
                <span className="text-xs text-pop-forest font-bold px-3 py-1 rounded-full bg-pop-lime">
                  {selectedMood}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-1.5 sm:gap-3">
                {moods.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSelectedMood(m.id);
                      soundEngine.playKalimba(idx);
                    }}
                    data-cursor="pointer"
                    aria-label={`Log mood state: ${m.id}`}
                    className={`flex flex-col items-center justify-center p-1.5 xs:p-2 sm:p-3 rounded-2xl transition-all duration-200 cartoon-sticker min-h-[52px] ${
                      selectedMood === m.id
                        ? `${m.bg} border-2 shadow-cartoon scale-105 font-bold`
                        : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-lg xs:text-xl sm:text-2xl mb-0.5 sm:mb-1 select-none">{m.emoji}</span>
                    <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-semibold tracking-tight truncate max-w-full">{m.id}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* 3. Hydration & Walking Telemetry Grid */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Hydration Intake Card */}
              <div className="bg-white rounded-3xl p-5 border-2 border-slate-900/10 shadow-cartoon-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-mono font-bold text-sky-800 flex items-center gap-1.5">
                      <Droplet className="w-3.5 h-3.5 text-sky-600 fill-current" /> Hydration
                    </span>
                    <span className="text-xs font-bold text-slate-600">{((waterMl / 2500) * 100).toFixed(0)}%</span>
                  </div>
                  <div className="text-2xl font-sans font-extrabold text-slate-900 mb-1">
                    {(waterMl / 1000).toFixed(2)} <span className="text-sm font-normal text-slate-600">/ 2.5 L</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden mb-4 border border-slate-200">
                    <div
                      className="h-full bg-gradient-to-r from-sky-400 to-pop-lime rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (waterMl / 2500) * 100)}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => addWater(150)}
                    data-cursor="pointer"
                    aria-label="Add 150ml of water"
                    className="flex-1 py-1.5 text-xs font-bold rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 transition-colors"
                  >
                    +150ml
                  </button>
                  <button
                    onClick={() => addWater(250)}
                    data-cursor="pointer"
                    aria-label="Add 250ml of water"
                    className="flex-1 py-1.5 text-xs font-bold rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 transition-colors"
                  >
                    +250ml
                  </button>
                  <button
                    onClick={() => addWater(500)}
                    data-cursor="pointer"
                    aria-label="Add 500ml of water"
                    className="flex-1 py-1.5 text-xs font-bold rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 transition-colors"
                  >
                    +500ml
                  </button>
                  <button
                    onClick={undoWater}
                    data-cursor="pointer"
                    aria-label="Undo last water intake"
                    className="px-2.5 py-1.5 text-xs rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors font-semibold"
                    title="Undo last log"
                  >
                    Undo
                  </button>
                </div>
              </div>

              {/* Walking Activity Telemetry Card */}
              <div className="bg-white rounded-3xl p-5 border-2 border-slate-900/10 shadow-cartoon-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-mono font-bold text-pop-forest flex items-center gap-1.5">
                      <Footprints className="w-3.5 h-3.5" /> Walking Activity
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-pop-lime text-pop-forest font-mono font-bold text-[10px]">
                      Live Sensor
                    </span>
                  </div>
                  <div className="text-2xl font-sans font-extrabold text-slate-900 mb-1">
                    {steps.toLocaleString()} <span className="text-sm font-normal text-slate-500">/ 10,000 steps</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden mb-4 border border-slate-200">
                    <div
                      className="h-full bg-gradient-to-r from-pop-lime to-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (steps / 10000) * 100)}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 pt-1 border-t border-slate-100">
                  <div className="flex items-center gap-1 font-bold text-amber-700">
                    <Flame className="w-3.5 h-3.5 text-amber-500 fill-current" />
                    <span>{caloriesBurned} kcal</span>
                  </div>
                  <div className="font-mono text-slate-500">{distanceKm} km</div>
                  <button
                    onClick={() => {
                      setSteps((prev) => prev + 500);
                      soundEngine.playStepClick();
                    }}
                    data-cursor="pointer"
                    className="text-[11px] font-bold text-pop-forest hover:underline"
                  >
                    +500 steps
                  </button>
                </div>
              </div>
            </motion.div>

            {/* 4. Interactive Mood Trend Wave Graph with Scrubber */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="bg-white rounded-3xl p-6 border-2 border-slate-900/10 shadow-cartoon-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">7-Day Emotional Climate</h4>
                  <p className="text-xs text-slate-500">Drag scrubber to hear microscopic glass ticks</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-pop-forest px-3 py-1 rounded-full bg-pop-lime">
                    {moodData[scrubberDay].day}: {moodData[scrubberDay].label} ({moodData[scrubberDay].mood}%)
                  </span>
                </div>
              </div>

              {/* Scrubber slider */}
              <input
                type="range"
                min="0"
                max="6"
                step="1"
                value={scrubberDay}
                aria-label="Mood trend weekly day scrubber"
                onChange={(e) => {
                  setScrubberDay(parseInt(e.target.value));
                  soundEngine.playScrubTick();
                }}
                className="w-full accent-pop-forest cursor-pointer h-2.5 bg-slate-100 rounded-lg appearance-none mb-3"
              />

              {/* SVG Bezier wave in crisp emerald */}
              <div className="h-28 w-full relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 700 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waveLightGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D2F56C" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#D2F56C" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,30 C 100,50 150,20 233,15 C 316,10 350,45 466,25 C 550,10 600,18 700,5 L 700,100 L 0,100 Z"
                    fill="url(#waveLightGradient)"
                  />
                  <path
                    d="M 0,30 C 100,50 150,20 233,15 C 316,10 350,45 466,25 C 550,10 600,18 700,5"
                    fill="none"
                    stroke="#0A4839"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx={`${(scrubberDay / 6) * 700}`}
                    cy={`${30 - scrubberDay * 3}`}
                    r="7"
                    className="fill-pop-lime stroke-pop-forest stroke-[3px] shadow-cartoon-sm"
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Actual App Screenshot in Clean White Frame with subtle scroll parallax */}
          <motion.div
            style={{ y: rightColY }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* Theme Variant Switcher */}
            <div className="flex items-center gap-2 mb-4 p-1.5 rounded-full bg-white border-2 border-slate-900/10 shadow-cartoon-sm z-20">
              <button
                type="button"
                onClick={() => {
                  setDashboardTheme('light');
                  soundEngine.playScrubTick();
                }}
                data-cursor="pointer"
                aria-label="Switch mockup to Clean White theme"
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${
                  dashboardTheme === 'light'
                    ? 'bg-pop-lime text-pop-forest border border-pop-forest shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                Clean White (CW)
              </button>
              <button
                type="button"
                onClick={() => {
                  setDashboardTheme('dark');
                  soundEngine.playScrubTick();
                }}
                data-cursor="pointer"
                aria-label="Switch mockup to Ferris Wheel theme"
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${
                  dashboardTheme === 'dark'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                Ferris Wheel (Dark)
              </button>
            </div>

            <AdaptiveScreenshotFrame
              src={
                dashboardTheme === 'light'
                  ? './assets/screenshots/dashboard-light.jpeg'
                  : './assets/screenshots/dashboard-dark.jpeg'
              }
              alt={`instilll Dashboard ${dashboardTheme === 'light' ? 'Clean White' : 'Ferris Wheel Dark'}`}
              orientation="vertical"
              tiltDirection="right"
              glowColor={dashboardTheme === 'light' ? 'rgba(210, 245, 108, 0.45)' : 'rgba(203, 180, 245, 0.45)'}
              badge={dashboardTheme === 'light' ? 'Clean White (CW) Theme' : 'Ferris Wheel (Dark) Theme'}
              hotspots={[
                {
                  x: 50,
                  y: 22,
                  label: 'Daily Reflection Card',
                  detail: 'Curated daily wisdom quote with instant rotation and favorite toggle.',
                },
                {
                  x: 50,
                  y: 42,
                  label: '5-State Mood Picker',
                  detail: 'Bio-expressive mood chips (Happy, Okay, Low, Anxious, Tired) with micro-bounce animations.',
                },
                {
                  x: 28,
                  y: 68,
                  label: 'Guided Breathwork Activity',
                  detail: 'Single-tap quick launch into 5-minute Box Breathing and 4-7-8 relaxing protocols.',
                },
                {
                  x: 72,
                  y: 68,
                  label: 'Hydration Telemetry',
                  detail: 'Calibrated daily 2.5L water tracker with quick +250ml logging.',
                },
              ]}
            />
            <p className="mt-4 text-xs font-mono text-slate-500 text-center max-w-xs font-medium">
              Screenshots automatically tilt inward or outward based on viewport scroll depth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
