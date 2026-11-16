import React from 'react';
import { ArrowUp } from 'lucide-react';
import { soundEngine } from '../utils/audio';
import { InstilllWordmark } from './InstilllWordmark';

interface FooterProps {
  onNavigate?: (path: string) => void;
  onOpenInfo?: (page: 'science' | 'faq' | 'about' | 'contact' | 'downloads') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInfo }) => {
  const scrollToTop = () => {
    soundEngine.playScrubTick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, infoPage?: 'science' | 'faq' | 'about' | 'contact' | 'downloads') => {
    if (infoPage && onOpenInfo) {
      e.preventDefault();
      soundEngine.playScrubTick();
      onOpenInfo(infoPage);
      return;
    }
    if (onNavigate) {
      e.preventDefault();
      soundEngine.playScrubTick();
      onNavigate(path);
    }
  };

  return (
    <footer className="relative bg-white text-slate-900 pt-20 pb-12 px-4 sm:px-8 border-t-2 border-slate-900/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 border-b border-slate-100">
          {/* Brand Info with Cartoon Mascot */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-900/15 shadow-cartoon-sm flex-shrink-0 bg-purple-100">
                <img
                  src="./assets/logo.png"
                  alt="instilll Logo"
                  width="44"
                  height="44"
                  className="w-full h-full object-cover block"
                />
              </div>
              <InstilllWordmark size="md" variant="brand" showDomain={true} />
            </div>
            <p className="text-slate-700 text-sm leading-relaxed max-w-sm mb-6 font-normal">
              Mindful Presence &amp; Daily Balance. A luxury sensory wellness ecosystem engineered with 60 FPS liquid canvas shaders, bio-responsive breathwork, and clinical telehealth.
            </p>

            {/* Cartoon Mascot Message Bubble */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-pop-lime/40 border-2 border-pop-forest/40 shadow-cartoon-sm mb-6">
              <span className="text-2xl select-none">🐱</span>
              <span className="text-xs font-bold text-pop-forest">
                Mew Mew says: &ldquo;Take a deep breath and smile!&rdquo;
              </span>
            </div>

            <div className="text-[11px] font-mono text-slate-600 space-y-1">
              <div>Encrypted Local State Vault</div>
              <div>Zero Ad Tracking or Cloud Profiling</div>
              <div>HIPAA &amp; SOC2 Telehealth Architecture</div>
            </div>
          </div>

          {/* Column 1: Experience */}
          <div className="md:col-span-2">
            <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-slate-900 mb-4">Experience</h2>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
              <li>
                <a href="/today" onClick={(e) => handleLinkClick(e, '/today')} className="hover:text-pop-forest transition-colors">
                  Today: Daily Hub
                </a>
              </li>
              <li>
                <a href="/breathe" onClick={(e) => handleLinkClick(e, '/breathe')} className="hover:text-pop-forest transition-colors">
                  Breathe: Liquid Orb
                </a>
              </li>
              <li>
                <a href="/heal" onClick={(e) => handleLinkClick(e, '/heal')} className="hover:text-pop-forest transition-colors">
                  Heal: Bilateral Audio
                </a>
              </li>
              <li>
                <a href="/sleep" onClick={(e) => handleLinkClick(e, '/sleep')} className="hover:text-pop-forest transition-colors">
                  Sleep: Ambient Art
                </a>
              </li>
              <li>
                <a href="/journal" onClick={(e) => handleLinkClick(e, '/journal')} className="hover:text-pop-forest transition-colors">
                  Journal: 3D Flip Book
                </a>
              </li>
              <li>
                <a href="/telehealth" onClick={(e) => handleLinkClick(e, '/telehealth')} className="hover:text-pop-forest transition-colors">
                  Agora RTC Telehealth
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Focus & Play */}
          <div className="md:col-span-2">
            <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-slate-900 mb-4">Focus &amp; Play</h2>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
              <li>
                <a href="/desk-clock" onClick={(e) => handleLinkClick(e, '/desk-clock')} className="hover:text-pop-forest transition-colors">
                  StandBy Desk Clock
                </a>
              </li>
              <li>
                <a href="/standby" onClick={(e) => handleLinkClick(e, '/standby')} className="hover:text-pop-forest transition-colors">
                  Fullscreen OLED Clock
                </a>
              </li>
              <li>
                <a href="/doombreaker" onClick={(e) => handleLinkClick(e, '/doombreaker')} className="hover:text-pop-forest transition-colors">
                  DoomScroll Breaker
                </a>
              </li>
              <li>
                <a href="/companions" onClick={(e) => handleLinkClick(e, '/companions')} className="hover:text-pop-forest transition-colors">
                  Mew Mew &amp; EMO Robot
                </a>
              </li>
              <li>
                <a href="/games" onClick={(e) => handleLinkClick(e, '/games')} className="hover:text-pop-forest transition-colors">
                  Tile Shift 2048 &amp; Reflex
                </a>
              </li>
              <li>
                <a href="/soundboard" onClick={(e) => handleLinkClick(e, '/soundboard')} className="hover:text-pop-forest transition-colors">
                  Sensory Acoustics
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Science & Insights */}
          <div className="md:col-span-2">
            <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-slate-900 mb-4">Science &amp; About</h2>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
              <li>
                <a href="/science" onClick={(e) => handleLinkClick(e, '/science', 'science')} className="hover:text-pop-forest transition-colors">
                  The Science of Presence
                </a>
              </li>
              <li>
                <a href="/lab" className="hover:text-pop-forest transition-colors">
                  Research Lab
                </a>
              </li>
              <li>
                <a href="/faq" onClick={(e) => handleLinkClick(e, '/faq', 'faq')} className="hover:text-pop-forest transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleLinkClick(e, '/about', 'about')} className="hover:text-pop-forest transition-colors">
                  About instilll
                </a>
              </li>
              <li>
                <a href="/downloads" onClick={(e) => handleLinkClick(e, '/downloads', 'downloads')} className="hover:text-pop-forest transition-colors">
                  Downloads &amp; PWA
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact', 'contact')} className="hover:text-pop-forest transition-colors">
                  Contact &amp; Partnerships
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Crisis Lifeline */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-slate-900 mb-4">Legal &amp; Safety</h2>
              <ul className="space-y-2.5 text-xs font-semibold text-slate-700">
                <li>
                  <a href="/privacy" className="hover:text-pop-forest transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-pop-forest transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy/spycam-pro" className="hover:text-pop-forest transition-colors">
                    Spycam Pro Policy
                  </a>
                </li>
                <li>
                  <a href="/safety" onClick={(e) => handleLinkClick(e, '/safety')} className="text-rose-600 font-bold hover:underline">
                    988 Crisis Lifeline
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                data-cursor="pointer"
                aria-label="Scroll back to top of page"
                className="w-full p-3 rounded-full bg-slate-950 text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-xs font-mono font-bold shadow-cartoon transform hover:-translate-y-0.5"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4 font-medium">
          <div className="flex items-center gap-2">
            <span>Crafted with gentle care for mindful living.</span>
            <span>•</span>
            <a href="/sitemap.xml" className="font-mono text-[11px] underline hover:text-pop-forest">
              XML Sitemap
            </a>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>&copy; {new Date().getFullYear()} instilll Systems. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
