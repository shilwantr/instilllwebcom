import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, HeartPulse, Sparkles, BookOpen, ArrowRight, ShieldAlert, Phone } from 'lucide-react';
import { WellnessArticle, WELLNESS_ARTICLES } from '../data/wellnessArticles';
import { soundEngine } from '../utils/audio';

interface ArticleViewProps {
  article: WellnessArticle;
  onNavigate: (path: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.slug]);

  const relatedArticles = article.relatedSlugs
    .map((slug) => WELLNESS_ARTICLES.find((a) => a.slug === slug))
    .filter((a): a is WellnessArticle => Boolean(a));

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    try {
      soundEngine.playScrubTick();
    } catch {}
    onNavigate(path);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation & Breadcrumb Row */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-700">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              data-cursor="pointer"
              className="hover:text-pop-forest transition-colors font-bold"
            >
              Home
            </a>
            <span className="text-slate-400">/</span>
            <a
              href="/learn"
              onClick={(e) => handleLinkClick(e, '/learn')}
              data-cursor="pointer"
              className="hover:text-pop-forest transition-colors font-bold"
            >
              Wellness Library
            </a>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-xs">
              {article.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/learn"
              onClick={(e) => handleLinkClick(e, '/learn')}
              data-cursor="pointer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-900/10 shadow-sm hover:shadow transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Guides</span>
            </a>
          </div>
        </nav>

        {/* Article Reading Card (Frosted Glass Container with Guaranteed WCAG AA Contrast) */}
        <article className="relative rounded-[36px] bg-white/95 backdrop-blur-2xl border-4 border-slate-900/15 shadow-cartoon p-6 sm:p-12 text-slate-900 overflow-hidden">
          {/* Header Metadata */}
          <header className="mb-10 pb-8 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-pop-lime text-pop-forest border border-pop-forest/20 shadow-cartoon-sm">
                {article.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600">
                <Calendar className="w-3.5 h-3.5" />
                <span>Updated Nov 20, 2026</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {article.title}
            </h1>

            {/* Lead Paragraph */}
            <p className="text-base sm:text-xl text-slate-700 font-normal leading-relaxed border-l-4 border-pop-forest pl-4 sm:pl-6 bg-slate-50/70 py-3 rounded-r-2xl">
              {article.lead}
            </p>
          </header>

          {/* Article Body Sections */}
          <div className="space-y-10 text-slate-800 text-sm sm:text-base leading-relaxed">
            {article.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{section.heading}</span>
                </h2>

                <div className="space-y-3.5 pl-0 sm:pl-10">
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="font-normal text-slate-700 leading-relaxed">
                      {para}
                    </p>
                  ))}

                  {section.keyTakeaway && (
                    <div className="mt-4 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div className="text-xs sm:text-sm font-semibold text-amber-950">
                        <span className="font-bold uppercase tracking-wider text-[11px] font-mono text-amber-800 mr-2">Key Insight:</span>
                        {section.keyTakeaway}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* In-Article Fun Fact Callout (Styled like Daily Reflection Blockquote) */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-pop-lime/25 border-2 border-pop-forest/20 shadow-cartoon-sm">
            <div className="flex items-center gap-2.5 mb-3 text-pop-forest font-mono text-xs font-bold uppercase tracking-wider">
              <span className="text-xl">💡</span>
              <span>Mindful Science • Did You Know?</span>
            </div>
            <blockquote className="text-sm sm:text-base font-semibold text-slate-900 italic leading-relaxed">
              &ldquo;{article.funFact}&rdquo;
            </blockquote>
          </div>

          {/* Try This in instilll CTA Card */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-cartoon flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-pop-lime text-xs font-mono font-bold">
                <HeartPulse className="w-3.5 h-3.5" />
                <span>Direct Feature Alignment</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Experience this in instilll: {article.featureBadge}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Put these evidence-based principles into practice right now using instilll&apos;s guided on-device tools.
              </p>
            </div>

            <a
              href={article.featureHref}
              onClick={(e) => handleLinkClick(e, article.featureHref)}
              data-cursor="pointer"
              className="px-6 py-3.5 rounded-full bg-pop-lime text-pop-forest hover:bg-pop-yellow transition-all duration-200 font-bold text-xs sm:text-sm shadow-cartoon-sm flex-shrink-0 flex items-center gap-2 transform hover:scale-105"
            >
              <span>{article.featureCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Standard Educational Disclaimer & 988 Crisis Lifeline Banner */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="p-5 sm:p-6 rounded-2xl bg-rose-50 border-2 border-rose-200 text-rose-950 space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm uppercase tracking-wider text-rose-900 font-mono">
                <ShieldAlert className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>Medical &amp; Educational Disclaimer</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-rose-900/90 font-normal">
                This guide is for educational and wellness purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing a mental health crisis or thoughts of self-harm, call or text <strong className="font-bold underline">988</strong> (Suicide &amp; Crisis Lifeline, US &amp; Canada, free and confidential 24/7) or contact your local emergency services immediately.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="tel:988"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call or Text 988 (Free 24/7)</span>
                </a>
                <a
                  href="/safety"
                  onClick={(e) => handleLinkClick(e, '/safety')}
                  className="text-xs font-bold text-rose-800 hover:underline"
                >
                  View Privacy Vault &amp; Safety Resources &rarr;
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Guides Section */}
        {relatedArticles.length > 0 && (
          <aside className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-pop-forest" />
                <span>Related Wellness Guides</span>
              </h3>
              <a
                href="/learn"
                onClick={(e) => handleLinkClick(e, '/learn')}
                className="text-xs font-bold text-slate-700 hover:text-pop-forest"
              >
                View all &rarr;
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {relatedArticles.map((rel) => (
                <a
                  key={rel.slug}
                  href={rel.path}
                  onClick={(e) => handleLinkClick(e, rel.path)}
                  data-cursor="pointer"
                  className="p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-900/10 hover:border-slate-900/30 shadow-cartoon-sm hover:shadow-cartoon transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-2 group-hover:text-pop-forest transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-slate-700 group-hover:text-pop-forest">
                    <span>Read guide</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};
