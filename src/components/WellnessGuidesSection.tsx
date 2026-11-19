import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ArrowRight, Sparkles, Compass, CheckCircle2, HeartPulse } from 'lucide-react';
import { WELLNESS_ARTICLES, ArticleCategory, WellnessArticle } from '../data/wellnessArticles';
import { MindfulFunFactsStrip } from './MindfulFunFactsStrip';
import { soundEngine } from '../utils/audio';

interface WellnessGuidesSectionProps {
  onNavigate?: (path: string) => void;
}

export const WellnessGuidesSection: React.FC<WellnessGuidesSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: string[] = ['All', 'Nervous System', 'Sleep & Focus', 'Emotional Health', 'Mind-Body'];

  const filteredArticles = selectedCategory === 'All'
    ? WELLNESS_ARTICLES
    : WELLNESS_ARTICLES.filter((a) => a.category === selectedCategory);

  const handleArticleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      try {
        soundEngine.playScrubTick();
      } catch {}
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (cat: string) => {
    try {
      soundEngine.playScrubTick();
    } catch {}
    setSelectedCategory(cat);
  };

  return (
    <section id="wellness-library" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase mb-4 border border-amber-300 shadow-cartoon-sm">
          <BookOpen className="w-3.5 h-3.5 text-amber-700" />
          <span>📚 Mindful Library • Clinical &amp; Wellness Guides</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Understand Your Nervous System
        </h2>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          Evidence-informed guides on anxiety, sleep, burnout, attention recovery, and somatic calm—paired directly with instilll&apos;s daily tools.
        </p>
      </div>

      {/* Mindful Fun Facts Strip */}
      <div className="max-w-4xl mx-auto mb-14">
        <MindfulFunFactsStrip />
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategorySelect(cat)}
            data-cursor="pointer"
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border-2 shadow-cartoon-sm ${
              selectedCategory === cat
                ? 'bg-slate-950 text-white border-slate-950 scale-105'
                : 'bg-white/90 text-slate-700 border-slate-900/10 hover:border-slate-900/30 hover:bg-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article) => (
            <motion.article
              key={article.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col justify-between rounded-3xl p-6 bg-white/90 backdrop-blur-md border-2 border-slate-900/10 hover:border-slate-900/30 shadow-cartoon hover:shadow-cartoon-lg transition-all duration-300 group"
            >
              <div>
                {/* Meta Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {article.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-pop-forest transition-colors line-clamp-2">
                  <a
                    href={article.path}
                    onClick={(e) => handleArticleClick(e, article.path)}
                    data-cursor="pointer"
                  >
                    {article.title}
                  </a>
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div>
                {/* Linked Feature Badge */}
                <div className="pt-3 border-t border-slate-100 mb-4">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 w-full truncate">
                    <HeartPulse className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{article.featureBadge}</span>
                  </div>
                </div>

                {/* Read Guide CTA Link */}
                <a
                  href={article.path}
                  onClick={(e) => handleArticleClick(e, article.path)}
                  data-cursor="pointer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-pop-forest group-hover:translate-x-1 transition-all"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* View Full Library Button */}
      <div className="text-center">
        <a
          href="/learn"
          onClick={(e) => handleArticleClick(e, '/learn')}
          data-cursor="pointer"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 font-bold text-sm shadow-cartoon transition-all duration-200 transform hover:-translate-y-0.5"
        >
          <BookOpen className="w-4 h-4 text-pop-lime" />
          <span>View Full Wellness Library &amp; Guides ({WELLNESS_ARTICLES.length})</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
