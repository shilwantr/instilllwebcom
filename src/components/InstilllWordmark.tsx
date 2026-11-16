import React from 'react';

export interface InstilllWordmarkProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'hero';
  variant?: 'brand' | 'nav' | 'hero' | 'footer' | 'monochrome';
  casing?: 'caps' | 'lower' | 'title';
  showDomain?: boolean;
  className?: string;
}

/**
 * InstilllWordmark displays the brand name "instilll" / "inSTILLL" with
 * distinctly styled typography for each of the 3 "L"s:
 * - 1st L: Modern Geometric Sans-Serif (Plus Jakarta Sans, bold upright)
 * - 2nd L: Classic Editorial Serif Italic (Playfair Display, slanted italic swash)
 * - 3rd L: Tech Monospace Slab (JetBrains Mono, distinct terminal hook / slab)
 *
 * This visually reflects the triple-L identity intentionally and memorably.
 */
export const InstilllWordmark: React.FC<InstilllWordmarkProps> = ({
  size = 'md',
  variant = 'brand',
  casing = 'caps',
  showDomain = false,
  className = '',
}) => {
  const sizeClasses = {
    xs: 'text-sm',
    sm: 'text-base',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
    '2xl': 'text-4xl sm:text-5xl',
    '3xl': 'text-5xl sm:text-6xl',
    hero: 'text-4xl xs:text-5xl sm:text-6xl md:text-7xl',
  }[size];

  const isMonoChrome = variant === 'monochrome';

  // Render letters according to casing (stem has NO 'l', exactly 3 L's follow)
  const prefix = casing === 'lower' ? 'in' : casing === 'title' ? 'in' : 'in';
  const stem = casing === 'lower' ? 'sti' : casing === 'title' ? 'Sti' : 'STI';
  const l1 = casing === 'lower' ? 'l' : casing === 'title' ? 'L' : 'L';
  const l2 = casing === 'lower' ? 'l' : casing === 'title' ? 'L' : 'L';
  const l3 = casing === 'lower' ? 'l' : casing === 'title' ? 'L' : 'L';

  return (
    <span
      className={`inline-flex items-baseline tracking-tight font-sans select-none transition-colors ${sizeClasses} ${className}`}
      aria-label="instilll"
    >
      {/* "in" prefix */}
      <span className="font-sans font-light opacity-90">{prefix}</span>

      {/* "STIL" stem */}
      <span className="font-sans font-black tracking-tight">{stem}</span>

      {/* Triple distinct L's */}
      <span className="inline-flex items-baseline ml-[0.5px]">
        {/* L #1: Geometric Clean Sans-Serif */}
        <span
          title="1st L — Geometric Sans"
          className="font-sans font-black inline-block tracking-tighter"
        >
          {l1}
        </span>

        {/* L #2: Editorial Serif Italic */}
        <span
          title="2nd L — Editorial Serif Italic"
          className={`font-serif italic font-bold inline-block px-[1px] transform -skew-x-6 origin-bottom ${
            isMonoChrome ? '' : 'text-pop-forest'
          }`}
        >
          {l2}
        </span>

        {/* L #3: Monospace Slab Terminal */}
        <span
          title="3rd L — Monospace Slab"
          className={`font-mono font-black inline-block pl-[1px] ${
            isMonoChrome ? '' : 'text-amber-500'
          }`}
        >
          {l3}
        </span>
      </span>

      {/* Optional .com domain badge */}
      {showDomain && (
        <span className="font-mono text-[0.45em] font-extrabold uppercase px-1.5 py-0.5 ml-1.5 rounded-md bg-pop-lime text-pop-forest border border-pop-forest/20 shadow-sm align-middle self-center">
          .com
        </span>
      )}
    </span>
  );
};
