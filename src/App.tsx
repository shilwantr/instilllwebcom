import React, { useState, useEffect, useCallback } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TodayDashboardSection } from './components/TodayDashboardSection';
import { PracticeSection } from './components/PracticeSection';
import { JournalSection } from './components/JournalSection';
import { TherapySection } from './components/TherapySection';
import { PlayCompanionsSection } from './components/PlayCompanionsSection';
import { DeskClockSection } from './components/DeskClockSection';
import { DoomBreakerSection } from './components/DoomBreakerSection';
import { SoundboardSection } from './components/SoundboardSection';
import { ProfileLifelineSection } from './components/ProfileLifelineSection';
import { LivingThemesMatrix } from './components/LivingThemesMatrix';
import { Footer } from './components/Footer';
import { BackToTopButton } from './components/BackToTopButton';
import { StandByClockModal } from './components/StandByClockModal';
import { SoundscapesModal } from './components/SoundscapesModal';
import { InfoPageModal, InfoModalPage } from './components/InfoPageModal';
import { LivingTheme } from './components/LivingCanvas';

interface RouteConfig {
  sectionId?: string;
  title: string;
  desc: string;
  infoPage?: InfoModalPage;
  openModal?: 'clock' | 'sound';
}

const ROUTE_META_MAP: Record<string, RouteConfig> = {
  '/': {
    title: 'inStill — Mindful Presence & Daily Balance | Sensory Digital Wellness',
    desc: 'inStill is a luxury sensory wellness ecosystem featuring 60 FPS liquid canvas shaders, bio-responsive vagal breathwork, encrypted Agora RTC telehealth, and MagSafe StandBy desk clock.',
  },
  '/today': {
    sectionId: 'today',
    title: 'Today Dashboard — Mindful Presence & Daily Balance | inStill',
    desc: 'Daily reflection quotes, 5-state bio-expressive mood picker, guided breathwork, and hydration telemetry.',
  },
  '/practice': {
    sectionId: 'practice',
    title: 'Mindful Practice: Breathe, Heal & Sleep — inStill',
    desc: 'Evidence-based mental wellness routines: Guided Box Breathing, acoustic bilateral sound therapy, and restorative sleep scenes.',
  },
  '/breathe': {
    sectionId: 'practice',
    title: 'Bio-Responsive Breathwork & Box Breathing — inStill',
    desc: 'Practice Box Breathing (4-4-4), 4-7-8 deep sleep routines, and resonant coherence with inStill\'s 60 FPS harmonic liquid bubble orb.',
  },
  '/heal': {
    sectionId: 'practice',
    title: 'Bilateral EMDR Acoustic Sound Therapy — inStill',
    desc: 'Alternating bilateral acoustic stimulation and somatic soundscapes engineered to soothe anxiety and balance brainwaves.',
  },
  '/sleep': {
    sectionId: 'practice',
    title: 'Restorative Sleep Art & Ambient Soundscapes — inStill',
    desc: 'Immerse in moonlit rain on glass, lotus pond waters, and summer hillside breezes with gentle Tibetan wind-down chimes.',
  },
  '/journal': {
    sectionId: 'journal',
    title: 'Mindful Journal & Biometric Telemetry — inStill',
    desc: 'Reflective journaling paired with direct hardware pedometer telemetry, hydration tracking, and 3D page-curling flip book diary.',
  },
  '/telehealth': {
    sectionId: 'telehealth',
    title: 'Clinical Somatic Telehealth & Agora RTC Video — inStill',
    desc: 'Encrypted HD video consultations with certified neuro-psychologists and somatic therapists, synchronized with real-time breathing telemetry.',
  },
  '/therapy': {
    sectionId: 'telehealth',
    title: 'Licensed Somatic Therapy & Vagal Regulation — inStill',
    desc: 'Connect with certified somatic clinicians specializing in trauma healing, autonomic nervous system stabilization, and burnout recovery.',
  },
  '/companions': {
    sectionId: 'companions',
    title: 'Mew Mew & EMO Interactive Mindful Companions — inStill',
    desc: 'Meet Mew Mew the hoverboard robot companion and EMO the desktop pet, providing playful calming routines and mindful pauses.',
  },
  '/games': {
    sectionId: 'companions',
    title: 'Sensory Focus Games: Tile Shift 2048 & Reflex Core — inStill',
    desc: 'Play soothing sensory micro-games: Frosted glass Tile Shift 2048, sub-millisecond Reflex Core Frost, and tactile pop bubble sheets.',
  },
  '/desk-clock': {
    sectionId: 'desk-clock',
    title: 'MagSafe StandBy Landscape Desk Clock — inStill',
    desc: 'Turn your device into a luxury bedside or desk clock with 152sp fluid pastel numerals, 270-degree battery gauge, charging wattage, thermals, and strict DND.',
  },
  '/standby': {
    sectionId: 'desk-clock',
    title: 'Fullscreen StandBy Mode Clock Simulator — inStill',
    desc: 'Interactive OLED desk clock simulation with soft pastel duotone palettes, decimal battery telemetry, and zero-distraction focus.',
    openModal: 'clock',
  },
  '/doombreaker': {
    sectionId: 'doombreaker',
    title: 'Doom-Scroll Breaker: Digital Wellbeing Intervention — inStill',
    desc: 'Android Accessibility Service monitor that interrupts chronic social media feeds with full-screen vagal rest cues and gentle Tibetan gongs.',
  },
  '/soundboard': {
    sectionId: 'soundboard',
    title: 'Interactive Sensory Soundboard & Acoustics — inStill',
    desc: 'Synthesized pure acoustic sound generator: 1568 Hz Tibetan Tingsha bells, 174 Hz singing bowls, frequency-modulated rain cascades, and kalimba arpeggios.',
    openModal: 'sound',
  },
  '/safety': {
    sectionId: 'safety',
    title: 'Privacy Vault & 24/7 988 Crisis Lifeline — inStill',
    desc: 'Your sanctuary is protected with zero ad tracking, local device encryption, and one-tap 24/7 access to the free, confidential 988 Suicide & Crisis Lifeline.',
  },
  '/themes': {
    sectionId: 'themes',
    title: '11 Living Canvas Ambient Shaders Matrix — inStill',
    desc: 'Explore 11 dynamic 60 FPS GLSL canvas shaders: Clean White, Ferris Wheel, Midnight Sage, Cosmic Dusk, Oasis Aurora, Twilight Prairie, and more.',
  },
  '/science': {
    title: 'The Neuroscience of Presence & Vagal Biofeedback — inStill',
    desc: 'The clinical and mathematical foundation of inStill: Polyvagal autonomic stabilization, respiratory sinus arrhythmia (RSA), and 60 FPS visual entrainment.',
    infoPage: 'science',
  },
  '/faq': {
    title: 'Frequently Asked Questions — inStill',
    desc: 'Common questions about inStill\'s zero-cloud privacy architecture, offline support, MagSafe desk clock, and clinical telehealth integrations.',
    infoPage: 'faq',
  },
  '/about': {
    title: 'About inStill — Mindful Engineering & Human Sanctuary',
    desc: 'Learn about the vision behind inStill: Designing digital products that soothe rather than addict, restoring autonomic nervous system serenity.',
    infoPage: 'about',
  },
  '/contact': {
    title: 'Contact & Clinical Inquiries — inStill',
    desc: 'Get in touch with the inStill team for clinician directory onboarding, enterprise wellness partnerships, press inquiries, or support.',
    infoPage: 'contact',
  },
  '/downloads': {
    title: 'Downloads & App Installation — inStill',
    desc: 'Install inStill as an Android application, iOS Progressive Web App (PWA), or run directly in any modern desktop or mobile browser.',
    infoPage: 'downloads',
  },
};

export const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<LivingTheme>('CW');
  const [isClockModalOpen, setIsClockModalOpen] = useState(false);
  const [isSoundModalOpen, setIsSoundModalOpen] = useState(false);
  const [activeInfoPage, setActiveInfoPage] = useState<InfoModalPage>(null);

  const themeCycleOrder: LivingTheme[] = ['CW', 'FW', 'MS', 'CD', 'OA', 'TP', 'ZR', 'HW', 'TD', 'LT', 'RT'];

  const cycleTheme = () => {
    const currentIndex = themeCycleOrder.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeCycleOrder.length;
    setCurrentTheme(themeCycleOrder[nextIndex]);
  };

  const handleRoute = useCallback((pathname: string) => {
    const cleanPath = pathname.replace(/\/$/, '') || '/';
    const route = ROUTE_META_MAP[cleanPath] || ROUTE_META_MAP['/'];

    // Update document title & canonical link
    if (route) {
      document.title = route.title;
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', route.desc);
      const ogDescEl = document.querySelector('meta[property="og:description"]');
      if (ogDescEl) ogDescEl.setAttribute('content', route.desc);

      const canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) {
        canonicalEl.setAttribute('href', `https://instilll.com${cleanPath === '/' ? '' : cleanPath}`);
      }

      if (route.infoPage) {
        setActiveInfoPage(route.infoPage);
      } else {
        setActiveInfoPage(null);
      }

      if (route.openModal === 'clock') {
        setIsClockModalOpen(true);
      } else if (route.openModal === 'sound') {
        setIsSoundModalOpen(true);
      }

      if (route.sectionId) {
        const el = document.getElementById(route.sectionId);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, []);

  const navigateTo = useCallback((path: string) => {
    window.history.pushState(null, '', path);
    handleRoute(path);
  }, [handleRoute]);

  // Initial route inspection and popstate listener
  useEffect(() => {
    handleRoute(window.location.pathname);

    const onPopState = () => {
      handleRoute(window.location.pathname);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [handleRoute]);

  return (
    <div className="relative min-h-screen bg-pop-cream text-slate-900 font-sans selection:bg-pop-lime selection:text-pop-forest">
      {/* Native CSS Scroll-Driven Progress Bar */}
      <div
        id="native-scroll-progress"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pop-forest via-pop-lime to-pop-yellow z-[9999] pointer-events-none"
      />

      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-5 focus:py-2.5 focus:bg-slate-950 focus:text-white focus:rounded-full focus:font-bold focus:shadow-cartoon focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Bespoke Translucent Hourglass Cursor (Desktop) */}
      <CustomCursor />

      {/* Floating Status & Navigation Header */}
      <Navbar
        currentTheme={currentTheme}
        onThemeCycle={cycleTheme}
        onOpenClockModal={() => {
          navigateTo('/standby');
          setIsClockModalOpen(true);
        }}
        onOpenSoundModal={() => {
          navigateTo('/soundboard');
          setIsSoundModalOpen(true);
        }}
        onNavigate={navigateTo}
        onOpenInfo={(page) => {
          if (page) navigateTo(`/${page}`);
        }}
      />

      <main id="main-content">
        {/* Section 1: Hero with Tilted Cartoon Stickers */}
        <HeroSection
          currentTheme={currentTheme}
          onThemeSelect={(t) => setCurrentTheme(t)}
          onOpenSoundModal={() => {
            navigateTo('/soundboard');
            setIsSoundModalOpen(true);
          }}
        />

        {/* Section 2: Today (Dashboard) Feature Suite */}
        <TodayDashboardSection />

        {/* Section 3: Practice (Breathe, Heal & Sleep) */}
        <PracticeSection />

        {/* Section 4: Journal & Multi-Scale Trend Analytics */}
        <JournalSection />

        {/* Section 5: Clinical Telehealth (Agora RTC) */}
        <TherapySection />

        {/* Section 6: Play & Sensory Companions */}
        <PlayCompanionsSection />

        {/* Section 7: Focus Desk Clock & StandBy Mode */}
        <DeskClockSection
          onOpenFullscreenModal={() => {
            navigateTo('/standby');
            setIsClockModalOpen(true);
          }}
        />

        {/* Section 8: DoomScroll Breaker (Digital Wellbeing) */}
        <DoomBreakerSection />

        {/* Section 9: Sensory Acoustics & Soundboard */}
        <SoundboardSection />

        {/* Section 10: Profile, Safety & 24/7 Crisis Lifeline */}
        <ProfileLifelineSection />

        {/* Section 11: The 11 Living Canvas Ambient Themes Matrix */}
        <LivingThemesMatrix
          currentTheme={currentTheme}
          onThemeSelect={(t) => setCurrentTheme(t)}
        />
      </main>

      {/* Footer with Comprehensive Multipage Links */}
      <Footer
        onNavigate={navigateTo}
        onOpenInfo={(page) => {
          if (page) navigateTo(`/${page}`);
        }}
      />

      {/* Floating Back to Top Button */}
      <BackToTopButton />

      {/* Fullscreen Modals */}
      <StandByClockModal
        isOpen={isClockModalOpen}
        onClose={() => {
          setIsClockModalOpen(false);
          navigateTo('/desk-clock');
        }}
      />

      <SoundscapesModal
        isOpen={isSoundModalOpen}
        onClose={() => {
          setIsSoundModalOpen(false);
          navigateTo('/soundboard');
        }}
      />

      {/* Info Pages Modal (Science, FAQ, About, Contact, Downloads) */}
      <InfoPageModal
        page={activeInfoPage}
        onClose={() => {
          setActiveInfoPage(null);
          navigateTo('/');
        }}
      />
    </div>
  );
};

export default App;
