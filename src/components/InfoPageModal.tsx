import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, HelpCircle, BookOpen, Mail, Shield, Phone, ExternalLink } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export type InfoModalPage = 'science' | 'faq' | 'about' | 'contact' | 'downloads' | null;

interface InfoPageModalProps {
  page: InfoModalPage;
  onClose: () => void;
}

export const InfoPageModal: React.FC<InfoPageModalProps> = ({ page, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && page) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page, onClose]);

  if (!page) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          role="dialog"
          aria-modal="true"
          aria-label={page}
          className="relative max-w-3xl w-full bg-white rounded-[36px] p-6 sm:p-10 border-4 border-slate-900 shadow-cartoon max-h-[90vh] overflow-y-auto text-slate-900"
        >
          {/* Close button */}
          <button
            onClick={() => {
              soundEngine.playScrubTick();
              onClose();
            }}
            data-cursor="pointer"
            aria-label="Close modal dialog"
            className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Page 1: Science */}
          {page === 'science' && (
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pop-lime text-pop-forest text-xs font-mono font-bold uppercase mb-4 border border-pop-forest/20 shadow-cartoon-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Neuroscience of Presence</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight mb-4">
                Clinical Science &amp; Biometric Mathematics
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Digital wellness should not rely on vague mysticism. inStill is built on peer-reviewed principles of Polyvagal Theory, Respiratory Sinus Arrhythmia (RSA), and neuro-aesthetic 60 FPS visual entrainment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">Vagal Brake Activation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Prolonged exhalation ratios during box breathing stimulate the tenth cranial nerve, lowering heart rate and rapidly reducing salivary cortisol.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">60 FPS Visual Entrainment</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Organic GLSL canvas shader curves provide harmonic stimuli that gently reduce saccadic eye agitation and cognitive hyperarousal.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">Hermite Cubic Spline Telemetry</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Second-order continuous biometric interpolation ensures trend curves represent genuine physiological stabilization over time.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-2">Acoustic Bilateral Panning</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Alternating stereo stimulation quietens the amygdala by engaging inter-hemispheric neural processing similar to somatic EMDR.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Page 2: FAQ */}
          {page === 'faq' && (
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pop-yellow text-slate-900 text-xs font-mono font-bold uppercase mb-4 border border-slate-900/15 shadow-cartoon-sm">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight mb-4">
                Everything You Need to Know About inStill
              </h2>

              <div className="space-y-4 mb-8">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">Is my journaling or step data stored in the cloud?</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    No. inStill adheres to a strict local-first architecture. All reflections, mood check-ins, step counters, and hydration counts reside strictly inside your device’s sandboxed encrypted storage.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">Does inStill work completely offline?</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Yes. The core application—Breathe orb, StandBy desk clock, Journal, offline soundboard, and DoomScroll Breaker—functions 100% offline without needing a network connection.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">How does the MagSafe StandBy Landscape Desk Clock work?</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rotate your phone horizontally on any MagSafe stand or bedside dock. inStill automatically engages StandBy mode, displaying 152sp fluid numerals, 270° battery telemetry, and strict Do-Not-Disturb.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">What is Doom-Scroll Breaker?</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    On Android, Doom-Scroll Breaker runs locally via the Accessibility Service to monitor continuous scroll velocity across YouTube, Instagram, X, Facebook, and Reddit, gently prompting eye-rest pauses.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Page 3: About */}
          {page === 'about' && (
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pop-lavender text-slate-900 text-xs font-mono font-bold uppercase mb-4 border border-slate-900/15 shadow-cartoon-sm">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Our Philosophy &amp; Mission</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight mb-4">
                Software Engineered to Return You to Yourself
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Modern consumer technology was largely designed to colonize human attention through infinite feeds, red notification badges, and cortisol-inducing alerts. inStill was founded on the opposite premise: what if software was engineered specifically to protect human presence?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">Humane Design Principles</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    No unread badges, no manipulative streaks designed to induce guilt, and zero algorithmic engagement traps.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">Luxury Sensory Craftsmanship</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every touchpoint is tuned with bespoke physics: tactile sound cues, liquid glass shaders, and restful pastel palettes.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Page 4: Contact */}
          {page === 'contact' && (
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pop-coral/30 text-slate-900 text-xs font-mono font-bold uppercase mb-4 border border-slate-900/15 shadow-cartoon-sm">
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight mb-4">
                Clinical Partnerships &amp; Support
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                We welcome licensed clinicians, neuroscientists, and healthcare organizations passionate about human-first digital wellness.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Clinician Directory Onboarding</h3>
                    <p className="text-xs text-slate-600">Join our vetted Agora RTC telehealth practitioner roster.</p>
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white border border-slate-200">clinical@instilll.com</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">General Inquiries &amp; Press</h3>
                    <p className="text-xs text-slate-600">Media kits, developer APIs, and institutional partnerships.</p>
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white border border-slate-200">hello@instilll.com</span>
                </div>

                <div className="p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-rose-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold text-rose-900">24/7 Crisis Support</h3>
                      <p className="text-xs text-rose-700">Immediate, free, and confidential emergency care.</p>
                    </div>
                  </div>
                  <a
                    href="tel:988"
                    className="text-xs font-bold px-4 py-2 rounded-full bg-slate-950 text-white shadow-cartoon-sm"
                  >
                    Call 988
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Page 5: Downloads */}
          {page === 'downloads' && (
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pop-lime text-pop-forest text-xs font-mono font-bold uppercase mb-4 border border-pop-forest/20 shadow-cartoon-sm">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Cross-Platform Installations</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight mb-4">
                Experience inStill Anywhere
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                inStill is engineered to run seamlessly across all your screens: web, Android APK, iOS Progressive Web App (PWA), and MagSafe landscape desk docking.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Web &amp; iOS Progressive Web App (PWA)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    In Safari or Chrome, tap <strong>Share</strong> &rarr; <strong>Add to Home Screen</strong> for full offline caching and standalone execution.
                  </p>
                  <span className="text-xs font-mono font-bold text-pop-forest bg-pop-lime/40 px-3 py-1 rounded-full">Available Now</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">Android Application</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Native Android package featuring on-device Accessibility Service Doom-Scroll Breaker and hardware pedometer telemetry.
                  </p>
                  <span className="text-xs font-mono font-bold text-slate-600 bg-slate-200 px-3 py-1 rounded-full">Android 12+ Required</span>
                </div>
              </div>
            </div>
          )}

          {/* Modal Footer CTA */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <span className="text-xs font-mono text-slate-500 font-semibold">inStill • Mindful Presence &amp; Daily Balance</span>
            <button
              onClick={() => {
                soundEngine.playScrubTick();
                onClose();
              }}
              data-cursor="pointer"
              className="px-6 py-2.5 rounded-full bg-slate-950 text-white text-xs font-bold shadow-cartoon hover:bg-slate-800 transition-all"
            >
              Continue to inStill
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
