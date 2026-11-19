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
import { WELLNESS_ARTICLES } from './data/wellnessArticles';
import { WellnessGuidesSection } from './components/WellnessGuidesSection';
import { LearnHubView } from './components/LearnHubView';
import { ArticleView } from './components/ArticleView';

interface RouteConfig {
  sectionId?: string;
  title: string;
  desc: string;
  keywords?: string;
  infoPage?: InfoModalPage;
  openModal?: 'clock' | 'sound';
}

const ROUTE_META_MAP: Record<string, RouteConfig> = {
  '/': {
    title: 'instilll (inStill) — Mindful Presence & Daily Balance | Sensory Digital Wellness',
    desc: 'instilll (searched as inStill / inSTILLL) is a luxury sensory wellness ecosystem featuring 60 FPS liquid canvas shaders, bio-responsive vagal breathwork, encrypted Agora RTC telehealth, and MagSafe StandBy desk clock.',
    keywords: 'instilll, inStill, inSTILLL, instill, inSTILL, inStilll, instilll.com, instill.com, instill app, instilll app, instill wellness, instilll wellness, mindful presence, daily balance, mental wellness, mental wellbeing, digital wellbeing, digital wellness, somatic therapy, box breathing, vagus nerve stimulation, magsafe desk clock, doomscroll breaker',
  },
  '/today': {
    sectionId: 'today',
    title: 'Today Dashboard — Mindful Presence & Daily Balance | instilll (inStill)',
    desc: 'Daily contemplation reflections, 5-state bio-expressive mood picker, guided breathwork, and hydration telemetry for daily balance and mental wellness.',
    keywords: 'instilll today, inStill today, mindful presence, daily balance, mental wellbeing, mood tracker, hydration counter, reflection quotes, walking telemetry, emotional climate log',
  },
  '/practice': {
    sectionId: 'practice',
    title: 'Mindful Practice: Breathe, Heal & Sleep — instilll (inStill)',
    desc: 'Evidence-based mental wellness routines: Guided Box Breathing, acoustic bilateral sound therapy, and restorative sleep scenes for nervous system regulation.',
    keywords: 'instilll practice, inStill practice, mindful practice, mental wellness routines, breathe heal sleep, vagus nerve stimulation, sleep ambient scenes, relaxation routines, autonomic regulation',
  },
  '/breathe': {
    sectionId: 'practice',
    title: 'Bio-Responsive Breathwork & Box Breathing — instilll (inStill)',
    desc: 'Practice Box Breathing (4-4-4), 4-7-8 deep sleep routines, and resonant coherence with instilll\'s (inStill) 60 FPS harmonic liquid bubble orb.',
    keywords: 'instilll breathe, inStill breathe, box breathing, 4-7-8 breathing, vagus nerve stimulation, vagal toning, polyvagal theory, resonant coherence, deep breathing exercises, diaphragmatic breathing',
  },
  '/heal': {
    sectionId: 'practice',
    title: 'Bilateral EMDR Acoustic Sound Therapy — instilll (inStill)',
    desc: 'Alternating bilateral acoustic stimulation and somatic soundscapes engineered to soothe anxiety, quiet the mind, and balance brainwaves.',
    keywords: 'instilll heal, inStill heal, bilateral sound therapy, emdr audio, binaural beats, 10hz alpha waves, sound healing, acoustic relaxation, pink noise, brainwave entrainment',
  },
  '/sleep': {
    sectionId: 'practice',
    title: 'Restorative Sleep Art & Ambient Soundscapes — instilll (inStill)',
    desc: 'Restorative nocturnal landscapes with rain on window, lotus ponds, and gentle wind-down chimes for deep REM sleep and insomnia relief.',
    keywords: 'instilll sleep, inStill sleep, sleep meditation, deep sleep soundscapes, rain on window, restorative rest, circadian rhythm sleep, evening wind down, insomnia relief',
  },
  '/journal': {
    sectionId: 'journal',
    title: 'Mindful Journal & Biometric Telemetry — instilll (inStill)',
    desc: 'Reflective journaling paired with direct hardware pedometer telemetry, hydration tracking, and 3D page-curling flip book diary.',
    keywords: 'instilll journal, inStill journal, mindful journaling, gratitude journal, emotional weather log, pedometer step counter, hydration tracker, 3d flip diary, encrypted private diary',
  },
  '/telehealth': {
    sectionId: 'telehealth',
    title: 'Clinical Somatic Telehealth & Agora RTC Video — instilll (inStill)',
    desc: 'Encrypted HD video consultations with certified neuro-psychologists and somatic therapists, synchronized with real-time breathing telemetry.',
    keywords: 'instilll telehealth, inStill telehealth, somatic therapy, licensed psychologist, online therapy video, agora rtc, hipaa compliant telehealth, trauma healing, clinical counseling',
  },
  '/therapy': {
    sectionId: 'telehealth',
    title: 'Licensed Somatic Therapy & Vagal Regulation — instilll (inStill)',
    desc: 'Connect with certified somatic clinicians specializing in trauma healing, autonomic nervous system stabilization, and burnout recovery.',
    keywords: 'instilll therapy, inStill therapy, somatic experiencing, polyvagal therapy, vagal regulation, nervous system healing, trauma recovery, burnout therapy, somatic clinician',
  },
  '/companions': {
    sectionId: 'companions',
    title: 'Mew Mew & EMO Interactive Mindful Companions — instilll (inStill)',
    desc: 'Meet Mew Mew the robot companion and EMO the desktop pet, providing playful calming routines, joyful reactions, and mindful pauses.',
    keywords: 'instilll companions, inStill companions, mew mew companion, emo robot pet, mindful pets, sensory companions, calming playful routines, digital pet wellness',
  },
  '/games': {
    sectionId: 'companions',
    title: 'Sensory Focus Games: Tile Shift 2048 & Reflex Core — instilll (inStill)',
    desc: 'Play soothing sensory micro-games: Frosted glass Tile Shift 2048, sub-millisecond Reflex Core Frost, and tactile pop bubble sheets.',
    keywords: 'instilll games, inStill games, sensory games, tile shift 2048, reflex core, bubble pop, tactile focus games, mindful gaming, stress relief games, sensory regulation',
  },
  '/desk-clock': {
    sectionId: 'desk-clock',
    title: 'MagSafe StandBy Landscape Desk Clock — instilll (inStill)',
    desc: 'Turn your device into a luxury bedside or desk clock with 152sp fluid pastel numerals, 270-degree battery gauge, charging wattage, thermals, and strict DND.',
    keywords: 'instilll desk clock, inStill desk clock, magsafe desk clock, standby mode clock, bedside clock app, pastel desk clock, distraction free clock, dnd clock, nightstand aesthetic',
  },
  '/standby': {
    sectionId: 'desk-clock',
    title: 'Fullscreen StandBy Mode Clock Simulator — instilll (inStill)',
    desc: 'Interactive OLED desk clock simulation with soft pastel duotone palettes, decimal battery telemetry, and zero-distraction focus.',
    keywords: 'instilll standby, inStill standby, fullscreen clock, oled desk clock, magsafe landscape simulator, focus mode clock, pastel clock typography',
    openModal: 'clock',
  },
  '/doombreaker': {
    sectionId: 'doombreaker',
    title: 'Doom-Scroll Breaker: Digital Wellbeing Intervention — instilll (inStill)',
    desc: 'Android Accessibility Service monitor that interrupts chronic social media feeds with full-screen vagal rest cues and gentle Tibetan gongs.',
    keywords: 'instilll doombreaker, inStill doombreaker, doomscroll breaker, digital wellbeing, screen time reduction, digital detox app, mindful screen pause, attention reset',
  },
  '/soundboard': {
    sectionId: 'soundboard',
    title: 'Interactive Sensory Soundboard & Acoustics — instilll (inStill)',
    desc: 'Synthesized pure acoustic sound generator: 1568 Hz Tibetan Tingsha bells, 174 Hz singing bowls, frequency-modulated rain cascades, and kalimba arpeggios.',
    keywords: 'instilll soundboard, inStill soundboard, sensory acoustics, tibetan singing bowls, tingsha bells, kalimba sound generator, web audio synthesizer, solfeggio healing',
    openModal: 'sound',
  },
  '/safety': {
    sectionId: 'safety',
    title: 'Privacy Vault & 24/7 988 Crisis Lifeline — instilll (inStill)',
    desc: 'Your sanctuary is protected with zero ad tracking, local device encryption, and one-tap 24/7 access to the free, confidential 988 Suicide & Crisis Lifeline.',
    keywords: 'instilll safety, inStill safety, 988 crisis lifeline, 24/7 crisis support, privacy first health, encrypted local vault, zero cloud tracking, suicide prevention lifeline',
  },
  '/themes': {
    sectionId: 'themes',
    title: '11 Living Canvas Ambient Shaders Matrix — instilll (inStill)',
    desc: 'Explore 11 dynamic 60 FPS GLSL canvas shaders: Clean White, Ferris Wheel, Midnight Sage, Cosmic Dusk, Oasis Aurora, Twilight Prairie, and more.',
    keywords: 'instilll themes, inStill themes, living canvas shaders, 60fps ambient backgrounds, procedural visualizers, calming background shaders, aesthetic pastel canvas',
  },
  '/science': {
    title: 'The Neuroscience of Presence & Vagal Biofeedback — instilll (inStill)',
    desc: 'The clinical and mathematical foundation of instilll: Polyvagal autonomic stabilization, respiratory sinus arrhythmia (RSA), and 60 FPS visual entrainment.',
    keywords: 'instilll science, inStill science, polyvagal theory, respiratory sinus arrhythmia, autonomic nervous system, heart rate variability science, vagal tone, neuro-aesthetics',
    infoPage: 'science',
  },
  '/faq': {
    title: 'Frequently Asked Questions — instilll (inStill)',
    desc: 'Common questions about instilll and inStill: zero-cloud privacy architecture, offline support, MagSafe desk clock, and clinical telehealth integrations.',
    keywords: 'instilll faq, inStill faq, digital wellness questions, offline meditation app, magsafe clock guide, telehealth security, local first storage, privacy architecture',
    infoPage: 'faq',
  },
  '/about': {
    title: 'About instilll (inStill) — Mindful Engineering & Human Sanctuary',
    desc: 'Learn about the vision behind instilll (inStill): Designing digital products that soothe rather than addict, restoring autonomic nervous system serenity.',
    keywords: 'about instilll, about inStill, mindful technology, humane tech design, digital wellness philosophy, anti doomscrolling mission, intentional software',
    infoPage: 'about',
  },
  '/contact': {
    title: 'Contact & Clinical Inquiries — instilll (inStill)',
    desc: 'Get in touch with the instilll (inStill) team for clinician directory onboarding, enterprise wellness partnerships, press inquiries, or support.',
    keywords: 'contact instilll, contact inStill, clinical onboarding, mental wellness partnerships, practitioner directory, press inquiries, hello@instilll.com',
    infoPage: 'contact',
  },
  '/downloads': {
    title: 'Downloads & App Installation — instilll (inStill)',
    desc: 'Install instilll (inStill) as an Android application, iOS Progressive Web App (PWA), or run directly in any modern desktop or mobile browser.',
    keywords: 'download instilll, download inStill, instilll apk, inStill app download, install pwa wellness, android mental health app, ios webapp installation',
    infoPage: 'downloads',
  },
  '/learn': {
    title: 'Wellness Library & Mental Health Guides | instilll',
    desc: 'Explore science-backed guides on anxiety, insomnia, burnout, doomscrolling, trauma recovery, and vagal breathwork designed for daily calm.',
    keywords: 'wellness library, mental health guides, vagal breathwork, anxiety relief, insomnia sleep, burnout recovery, trauma healing, digital fatigue, somatic therapy, mindful presence, daily balance',
  },
};

// Register all 8 wellness articles into ROUTE_META_MAP
for (const article of WELLNESS_ARTICLES) {
  ROUTE_META_MAP[article.path] = {
    title: article.metaTitle,
    desc: article.metaDescription,
    keywords: article.keywords,
  };
}

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname.replace(/\/$/, '') || '/';
    }
    return '/';
  });
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
    setCurrentPath(cleanPath);
    const route = ROUTE_META_MAP[cleanPath] || ROUTE_META_MAP['/'];

    // Update document title & canonical link
    if (route) {
      document.title = route.title;
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', route.desc);
      const keywordsEl = document.querySelector('meta[name="keywords"]');
      if (keywordsEl && route.keywords) keywordsEl.setAttribute('content', route.keywords);

      const ogTitleEl = document.querySelector('meta[property="og:title"]');
      if (ogTitleEl) ogTitleEl.setAttribute('content', route.title);
      const ogDescEl = document.querySelector('meta[property="og:description"]');
      if (ogDescEl) ogDescEl.setAttribute('content', route.desc);

      const twTitleEl = document.querySelector('meta[name="twitter:title"]');
      if (twTitleEl) twTitleEl.setAttribute('content', route.title);
      const twDescEl = document.querySelector('meta[name="twitter:description"]');
      if (twDescEl) twDescEl.setAttribute('content', route.desc);

      const canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) {
        canonicalEl.setAttribute('href', `https://instilll.com${cleanPath === '/' ? '' : cleanPath}`);
      }

      // JSON-LD structured data injection for Article & Breadcrumbs
      let routeJsonLd = document.getElementById('route-jsonld');
      if (!routeJsonLd) {
        routeJsonLd = document.createElement('script');
        routeJsonLd.id = 'route-jsonld';
        routeJsonLd.setAttribute('type', 'application/ld+json');
        document.head.appendChild(routeJsonLd);
      }

      if (cleanPath.startsWith('/learn/')) {
        const article = WELLNESS_ARTICLES.find((a) => a.path === cleanPath || a.slug === cleanPath.replace('/learn/', ''));
        if (article) {
          routeJsonLd.textContent = JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              '@id': `https://instilll.com${cleanPath}#article`,
              'headline': article.title,
              'description': article.metaDescription,
              'datePublished': article.datePublished,
              'dateModified': article.dateModified,
              'author': {
                '@type': 'Organization',
                'name': 'instilll',
                'url': 'https://instilll.com',
              },
              'publisher': {
                '@type': 'Organization',
                'name': 'instilll',
                'url': 'https://instilll.com',
                'logo': {
                  '@type': 'ImageObject',
                  'url': 'https://instilll.com/assets/logo.png',
                },
              },
              'mainEntityOfPage': {
                '@type': 'WebPage',
                '@id': `https://instilll.com${cleanPath}`,
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://instilll.com/',
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Wellness Library',
                  'item': 'https://instilll.com/learn',
                },
                {
                  '@type': 'ListItem',
                  'position': 3,
                  'name': article.title,
                  'item': `https://instilll.com${cleanPath}`,
                },
              ],
            },
          ]);
        }
      } else if (cleanPath === '/learn') {
        routeJsonLd.textContent = JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': 'https://instilll.com/learn#webpage',
          'url': 'https://instilll.com/learn',
          'name': 'Wellness Library & Mindful Science Guides | instilll',
          'description': 'Explore science-backed guides on anxiety, insomnia, burnout, doomscrolling, trauma recovery, and vagal breathwork designed for daily calm.',
          'isPartOf': {
            '@type': 'WebSite',
            '@id': 'https://instilll.com/#website',
            'url': 'https://instilll.com/',
            'name': 'instilll',
          },
        });
      } else {
        routeJsonLd.textContent = '';
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
        {currentPath === '/learn' ? (
          <LearnHubView onNavigate={navigateTo} />
        ) : currentPath.startsWith('/learn/') ? (
          (() => {
            const article = WELLNESS_ARTICLES.find(
              (a) => a.path === currentPath || a.slug === currentPath.replace('/learn/', '')
            );
            return article ? (
              <ArticleView article={article} onNavigate={navigateTo} />
            ) : (
              <LearnHubView onNavigate={navigateTo} />
            );
          })()
        ) : (
          <>
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

            {/* Section 11: Wellness Guides & Mindful Science Section */}
            <WellnessGuidesSection onNavigate={navigateTo} />

            {/* Section 12: The 11 Living Canvas Ambient Themes Matrix */}
            <LivingThemesMatrix
              currentTheme={currentTheme}
              onThemeSelect={(t) => setCurrentTheme(t)}
            />
          </>
        )}
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
