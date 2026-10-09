import React from 'react';
import { Calendar, ChevronDown, Clock, MapPin, Sparkles } from 'lucide-react';
import { SHOP_INFO } from '../data/barbershopData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_barbershop_1791567024555.jpg"
          alt="Interior of JOHN'S premium barbershop with vintage chairs and warm ambient lighting"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08] scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Multi-tier dark scrim for 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/60 to-[#0b0b0c]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Quiet Brand Kicker - Clean unboxed metadata with subtle dot */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-6 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Established 2018</span>
          <span aria-hidden="true" className="text-neutral-500">·</span>
          <span>SoHo, New York</span>
        </div>

        {/* Bold Headline */}
        <h1 className="font-serif-brand text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-wide uppercase leading-[1.1] mb-6 max-w-4xl [text-wrap:balance]">
          Classic Cuts, <span className="gold-gradient-text">Modern Style</span>
        </h1>

        {/* Welcoming Subheadline */}
        <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mb-10 leading-relaxed [text-wrap:balance]">
          {SHOP_INFO.subheadline}
        </p>

        {/* Primary Call-to-Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenBooking}
            className="gold-button w-full sm:w-auto px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider text-neutral-950 flex items-center justify-center gap-3 cursor-pointer shadow-xl hover:scale-[1.02] active:scale-95 transition-transform"
          >
            <Calendar className="w-4 h-4 text-neutral-950" />
            <span>Book an Appointment</span>
          </button>

          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto px-8 py-4 rounded-sm text-sm font-semibold uppercase tracking-wider text-neutral-200 border border-[#d4af37]/40 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-colors cursor-pointer"
          >
            Explore Services & Rates
          </button>
        </div>

        {/* Highlights Row (Clean hairline grid) */}
        <div className="w-full max-w-3xl pt-8 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-neutral-300 text-xs">
          <div className="flex flex-col items-center text-center">
            <span className="font-serif-brand text-xl font-bold text-[#d4af37] tabular-nums">15+</span>
            <span className="text-neutral-400 mt-1 uppercase tracking-wider text-[11px]">Years Master Craft</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-serif-brand text-xl font-bold text-[#d4af37] tabular-nums">5.0 ★</span>
            <span className="text-neutral-400 mt-1 uppercase tracking-wider text-[11px]">800+ Verified Reviews</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-serif-brand text-xl font-bold text-[#d4af37]">Single-Malt</span>
            <span className="text-neutral-400 mt-1 uppercase tracking-wider text-[11px]">Complimentary Pour</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-serif-brand text-xl font-bold text-[#d4af37]">Japanese Steel</span>
            <span className="text-neutral-400 mt-1 uppercase tracking-wider text-[11px]">Straight Razor Edge</span>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <button
          onClick={scrollToServices}
          aria-label="Scroll to services"
          className="text-neutral-400 hover:text-[#d4af37] transition-colors p-2"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
