import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, ArrowRight, ArrowLeft, HeartPulse, Search } from 'lucide-react';
import { WELLNESS_ARTICLES, ArticleCategory, WellnessArticle } from '../data/wellnessArticles';
import { MindfulFunFactsStrip } from './MindfulFunFactsStrip';
import { soundEngine } from '../utils/audio';

interface LearnHubViewProps {
  onNavigate: (path: string) => void;
}

export const LearnHubView: React.FC<LearnHubViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: string[] = ['All', 'Nervous System', 'Sleep & Focus', 'Emotional Health', 'Mind-Body'];

  const filteredArticles = WELLNESS_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.keywords.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    try {
      soundEngine.playScrubTick();
    } catch {}
    onNavigate(path);
  };

  const handleCategorySelect = (cat: string) => {
    try {
      soundEngine.playScrubTick();
    } catch {}
    setSelectedCategory(cat);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / Back to Home */}
        <div className="flex items-center justify-between mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-700">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              data-cursor="pointer"
              className="hover:text-pop-forest transition-colors font-bold"
            >
              Home
            </a>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-bold">Wellness Library</span>
          </nav>

          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            data-cursor="pointer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-900/10 shadow-sm hover:shadow transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </a>
        </div>

        {/* Hero Banner Card */}
        <div className="rounded-[36px] bg-white/90 backdrop-blur-xl border-4 border-slate-900/15 shadow-cartoon p-8 sm:p-14 text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase mb-4 border border-amber-300 shadow-cartoon-sm">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>Clinical Knowledge &amp; Mindful Science</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Wellness Library &amp; Mindful Science Guides
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto">
            Explore science-backed guides on anxiety, insomnia, burnout, doomscrolling, trauma recovery, and vagal breathwork designed for daily calm.
          </p>
        </div>

        {/* Mindful Fun Facts Strip */}
        <div className="max-w-4xl mx-auto mb-14">
          <MindfulFunFactsStrip />
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides by topic..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/90 border-2 border-slate-900/15 text-xs sm:text-sm font-medium placeholder:text-slate-400 focus:outline-none focus:border-slate-900 shadow-sm"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                data-cursor="pointer"
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border-2 shadow-cartoon-sm ${
                  selectedCategory === cat
                    ? 'bg-slate-950 text-white border-slate-950 scale-105'
                    : 'bg-white/90 text-slate-700 border-slate-900/10 hover:border-slate-900/30 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {article.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-pop-forest transition-colors line-clamp-2">
                    <a
                      href={article.path}
                      onClick={(e) => handleLinkClick(e, article.path)}
                      data-cursor="pointer"
                    >
                      {article.title}
                    </a>
                  </h2>

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
                    onClick={(e) => handleLinkClick(e, article.path)}
                    data-cursor="pointer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-pop-forest group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* 988 Lifeline & Safety Notice */}
        <div className="max-w-3xl mx-auto rounded-3xl p-6 bg-rose-50 border-2 border-rose-200 text-center space-y-2">
          <div className="font-mono text-xs font-bold text-rose-900 uppercase tracking-wider">
            24/7 Crisis Support &amp; Confidential Care
          </div>
          <p className="text-xs sm:text-sm text-rose-900/90 leading-relaxed">
            These guides provide wellness education and somatic grounding practices. If you are experiencing acute distress, panic, or thoughts of self-harm, free confidential 24/7 care is available by calling or texting <strong className="font-bold underline">988</strong> anytime.
          </p>
        </div>
      </div>
    </div>
  );
};
